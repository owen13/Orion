import {ComputerList} from './Modules/ComputerList'

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <ComputerList model={this.props.model} />
            </div>
        );
    }
}

ReactDOM.render(
    <App model={viewModel} />,
    document.getElementById('root')
)
