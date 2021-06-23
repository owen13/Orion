export class ActorList extends React.Component {
    render() {
        return (
            <div className="actor-list">
                <h1>Actors</h1>
                <ul>
                    {this.props.actors.map(actor => (
                        <Actor key={actor.Id} actor={actor} />
                    ))}
                </ul>
            </div>
        );
    }
}

export class Actor extends React.Component {
    render() {
        let actor = this.props.actor;
        return (
            <li>{actor.Id} {actor.Name}</li>
        )
    }
}