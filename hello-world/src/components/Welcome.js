import React, {Component} from 'react'

class Welcome extends Component {
    render() {
        return <h1>Welcome {this.props.name} or {this.props.heroname}</h1>
    }
}

export default Welcome