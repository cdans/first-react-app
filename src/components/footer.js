import React, {Component} from "react";

class Footer extends Component {

    createALert() {
        alert("clicked")
    }

    changed(){
        console.log("changed")
    }

    render() {
        return (
            <React.Fragment>
                <h2 onClick={this.props.myAlert}>
                    {this.props.trademark}
                </h2>
                <input
                    type="text"
                    onChange={this.changed}
                />
            </React.Fragment>
        )
    }
}

export {Footer};
