import React, {Component} from "react";

class Footer extends Component {

    state = {
        name: '',
        age: 23,
    }

    componentDidMount() {
        this.setState({name: "MyName"})
    }

    createALert() {
        alert("clicked")
    }

    changed = (event) => {
        console.log("changed", event.target.value)
        this.setState({name: event.target.value})
    }

    render() {
        return (
            <React.Fragment>
                <h2 onClick={this.props.myAlert}>
                    {this.props.trademark}
                </h2>
                <input
                    type="text"
                    value={this.state.name}
                    onChange={this.changed}
                />
            </React.Fragment>
        )
    }
}

export {Footer};
