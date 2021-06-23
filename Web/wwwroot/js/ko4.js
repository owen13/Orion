function AppViewModel(question, pointsBudget, answers, viewModel) {
    // tutorial 1
    // http://learn.knockoutjs.com/#/?tutorial=intro
    this.firstName = ko.observable('John');
    this.lastName = ko.observable('Smith');

    this.fullName = ko.computed(function () {
        return this.firstName() + ' ' + this.lastName();
    }, this);

    this.capitalizeLastName = function () {
        var currentLastName = this.lastName();
        this.lastName(currentLastName.toUpperCase());
    };

    // tutorial 2
    // http://learn.knockoutjs.com/#/?tutorial=collections
    var self = this;

    function SeatReservation(name, initialMeal) {
        var self = this;
        self.name = name;
        self.meal = ko.observable(initialMeal);

        self.formattedPrice = ko.computed(function() {
            var price = self.meal().price;
            return price ? '$' + price.toFixed(2) : 'None';
        });
    }

    // Non-editable catalog data - would come from the server
    self.availableMeals = [
        { mealName: "Standard (sandwich)", price: 0 },
        { mealName: "Premium (lobster)", price: 34.95 },
        { mealName: "Ultimate (whole zebra)", price: 290 }
    ];

    // Editable data
    self.seats = ko.observableArray([
        new SeatReservation("Steve", self.availableMeals[0]),
        new SeatReservation("Bert", self.availableMeals[0])
    ]);

    // Operatinos
    self.addSeat = function () {
        self.seats.push(new SeatReservation("", self.availableMeals[0]));
    }
    self.removeSeat = function (seat) {
        self.seats.remove(seat);
    };
    self.totalSurcharge = ko.computed(function() {
        var total = 0;
        for (var i = 0; i < self.seats().length; i++)
            total += self.seats()[i].meal().price;
        return total;
    });
    
    // Tutorial 3: 
    // http://learn.knockoutjs.com/#/?tutorial=webmail
    self.folders = ['Inbox', 'Archive', 'Sent', 'Spam'];
    self.chosenFolderId = ko.observable();
    self.chosenFolderData = ko.observable();
    self.chosenMailData = ko.observable();

    // Behaviours
    self.goToFolder = function(folder) {
        location.hash = folder;
        //self.chosenFolderId(folder);
        //self.chosenMailData(null); // Stop showing a mail
        //$.get('/mail', { folder: folder }, self.chosenFolderData);
    }
    self.goToMail = function(mail) {
        location.hash = mail.folder + '/' + mail.id;
        //self.chosenFolderId(mail.folder);
        //self.chosenFolderData(null); // Stop showing a folder
        //$.get("/mail", { mailId: mail.id }, self.chosenMailData);
    };

    // Client-side routes
    Sammy(function() {
        this.get('#:folder', function() {
            self.chosenFolderId(this.params.folder);
            self.chosenMailData(null); // Stop showing a mail
            $.get('/mail', { folder: this.params.folder }, self.chosenFolderData);
        });

        this.get('#:folder/:mailId', function() {
            self.chosenFolderId(this.params.folder);
            self.chosenFolderData(null); // Stop showing a folder
            $.get('/mail', { mailId: this.params.mailId }, self.chosenMailData);
        });

        // Default Route
        //this.get('', function() { this.app.runRoute('get', '#Inbox') });
    }).run();

    // tutorial 4 : Creating Custom Bindings
    // http://learn.knockoutjs.com/#/?tutorial=custombindings

    // Reusable bindings - ideally kept in a separate file
    ko.bindingHandlers.fadeVisible = {
        init: function(element, valueAccessor) {
            // Start visible/invisible according to initial value
            var shouldDisplay = valueAccessor();
            $(element).toggle(shouldDisplay);
        },
        update: function(element, valueAccessor) {
            // On update, fade in/out
            var shouldDisplay = valueAccessor();
            shouldDisplay ? $(element).fadeIn() : $(element).fadeOut();
        }
    };

    ko.bindingHandlers.jqButton = {
        init: function(element) {
            $(element).button(); // Turns the element into a jQuery UI button
        },
        update: function(element, valueAccessor) {
            var currentValue = valueAccessor();
            // Here we just update the "disabled" state, but you could update other properties too
            $(element).button("option", "disabled", currentValue.enable === false);
        }
    };

    ko.bindingHandlers.starRating = {
        init: function(element, valueAccessor) {
            $(element).addClass("starRating");
            for (var i = 0; i < 5; i++) {
                var star = $("<span>");
                star.text(i);
                star.appendTo(element);
            }
            
            // Handle mouse events on the stars
            $("span", element).each(function(index) {
                $(this).hover(
                    function() { $(this).prevAll().add(this).addClass("hoverChosen") },
                    function() { $(this).prevAll().add(this).removeClass("hoverChosen") }
                ).click(function() {
                    var observable = valueAccessor();  // Get the associated observable
                    observable(index+1);               // Write the new rating to it
                });
            });
        },
        update: function(element, valueAccessor) {
            // Give the first x stars the "chosen" class, where x <= rating
            var observable = valueAccessor();
            $("span", element).each(function(index) {
                $(this).toggleClass("chosen", index < observable());
            });
        }
    };
    
    // Tutorial 5: Loading and saving data
    // http://learn.knockoutjs.com/#/?tutorial=loadingsaving
    
    function Task(data) {
        this.title = ko.observable(data.title);
        this.isDone = ko.observable(data.isDone);
    }

    // Data
    var self = this;
    self.tasks = ko.observableArray([]);
    self.newTaskText = ko.observable();
    self.incompleteTasks = ko.computed(function() {
        return ko.utils.arrayFilter(self.tasks(), function(task) { return !task.isDone() && !task._destroy });
    });

    // Operations
    self.addTask = function() {
        self.tasks.push(new Task({ title: this.newTaskText() }));
        self.newTaskText("");
    };
    self.removeTask = function(task) { self.tasks.remove(task) };

    // Load initial state from server, convert it to Task instances, then populate self.tasks
    $.getJSON("/tasks", function(allData) {
        var mappedTasks = $.map(allData, function(item) { return new Task(item) });
        self.tasks(mappedTasks);
    });
    
    // ------------------------------------------------------------
    function Answer(text) {
        this.answerText = text; 
        this.points = ko.observable(1);
    }

    this.question = question;
    this.pointsBudget = pointsBudget;
    this.answers = $.map(answers, function(text) { return new Answer(text) });
    self.save = function() {
        $.ajax("/tasks", {
            data: ko.toJSON({ tasks: self.tasks }),
            type: "post", contentType: "application/json",
            success: function(result) { alert(result) }
        });
    };

    this.pointsUsed = ko.computed(function() {
        var total = 0;
        for (var i = 0; i < this.answers.length; i++)
            total += this.answers[i].points();
        return total;
    }, this);

    // Silverbear Test: Computers
    console.log('viewModel', viewModel);
    this.computers = ko.observableArray(viewModel.Computers);
}