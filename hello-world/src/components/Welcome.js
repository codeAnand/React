import React, {Component} from 'react'

class Welcome extends Component {
    render() {
        const {name, heroname} = this.props
        // const {stat2, state2} = this.state
        return (
        <h1>
            Welcome {name} or {heroname}
        </h1>
        )
    }
}

export default Welcome