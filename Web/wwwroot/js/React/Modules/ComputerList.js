import {Computer} from './Modules/Computer'

export class ComputerList extends React.Component {

    constructor(props) {
        super(props);

        this.onEdit = this.onEdit.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
        
        this.inputChange = this.inputChange.bind(this);
        this.selectChange = this.selectChange.bind(this);
        
        this.state = {
            computers: props.model.Computers,
            
            lists: props.model.Lists,
            
            editState: {
                status: false,
                rowKey: null,
                computerBeingEdited: null
            }
        }
    }

    onEdit (rowId) {
        let computerBeingUpdated = this.state.computers[rowId-1];
        let computerBeingEdited = this.state.editState.computerBeingEdited;
        if (computerBeingEdited == null || computerBeingEdited.Id !== computerBeingUpdated.Id) {
            // different computer being edited
            
            if (computerBeingEdited != null) {
                this.state.computers[this.state.editState.computerBeingEdited.Id-1] = computerBeingEdited;
                this.setState({computers: this.state.computers});
            }

            this.state.editState.computerBeingEdited = JSON.parse(JSON.stringify(computerBeingUpdated));
        } else {
            // same computer being edited
        }
        
        this.state.editState.status = true;
        this.state.editState.rowKey = rowId;
        this.setState({editState: this.state.editState});
    };

    onUpdate (updatedComputer) {

        let state = this.state;
        $.ajax({
            type: 'put',
            url: 'https://localhost:5001/api/Computer/' + updatedComputer.Id,
            contentType: 'application/json',
            data: JSON.stringify(updatedComputer),
            success: (data, status, xhr) => {
                console.log('data', data);
                console.log('status', status);
                console.log('xhr', xhr);

                this.state.computers[updatedComputer.Id-1] = updatedComputer;
                this.setState({computers: state.computers});

                this.setState({
                    editState: {
                        status: false,
                        rowKey: null,
                        computerBeingEdited: null
                    }
                });
            },
            error: (xhr, status, error) => {
                console.log('xhr', xhr);
                console.log('status', status);
                console.log('error', error);
            }
        });
        
    };
    
    inputChange (computerId, value, propertyId) {
        let computerBeingUpdated = this.state.computers[computerId-1];
        
        let valueInt = parseInt(value);
        if (isNaN(valueInt))
            computerBeingUpdated[propertyId] = value;
        else
            computerBeingUpdated[propertyId] = parseInt(value);
        
        this.setState({computers: this.state.computers});
    }

    selectChange (computerId, value, propertyId, propertyStringName, listName) {
        let computerBeingUpdated = this.state.computers[computerId-1];
        
        if (propertyId.startsWith('Usb')) {
            computerBeingUpdated.UsbCounts[propertyId] = parseInt(value);
        } else {
            computerBeingUpdated[propertyId] = parseInt(value);
        }
        
        if (listName && propertyStringName) {
            let listItem = this.state.lists[listName][value-1];
            computerBeingUpdated[propertyStringName] = listItem.Value;
        }
        
        this.setState({computers: this.state.computers});
    }

    render() {
        return (
            <div className="computer-list">
                <h1>Computers</h1>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>RAM</th>
                        <th>Graphics</th>
                        <th>Hard Drive</th>
                        <th>USB Ports</th>
                        <th>PSU</th>
                        <th>Weight</th>
                        <th>Processors</th>
                        
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.computers.map(computer => (
                                <Computer key={computer.Id} computer={computer} editState={this.state.editState} onEdit={this.onEdit} onUpdate={this.onUpdate} inputChange={this.inputChange} selectChange={this.selectChange} lists={this.state.lists} />
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}