import React, {Component} from "react";

class Footer extends Component {

    createALert(){
        alert("clicked")
    }

    render() {
        return <h2 onClick={this.props.myAlert}>
            {this.props.trademark}
        </h2>
    }
}

export {Footer};
