export class Input extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.value
        };

        this.inputChange = this.inputChange.bind(this);
    }

    inputChange(event) {
        this.setState({value: event.target.value});
        
        this.props.inputChange(this.props.id, event.target.value, this.props.propertyId);
    }

    render() {
        return (
            <input type="text" value={this.state.value} onChange={this.inputChange}/>
        )
    }
}

export class Select extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            items: props.items,
            value: props.value
        };
        
        this.selectChange = this.selectChange.bind(this);
    }

    selectChange(event) {
        console.log('event', event);
        
        this.setState({value: event.target.value});

        this.props.selectChange(this.props.id, event.target.value, this.props.propertyId, this.props.propertyStringName, this.props.listName);
    }

    render() {
        return (
            <select value={this.state.value} onChange={this.selectChange}>
                {
                    this.state.items.map(item => (
                        <option key={item.Key} value={item.Key}>{item.Value}</option>
                    ))
                }
            </select>
        );
    }
}