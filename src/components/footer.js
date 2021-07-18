import React, {Component} from "react";
import {CtxConsumer} from '../index';

class Footer extends Component {

    state = {
        name: '',
        age: 23,
    }

    componentDidMount() {
        this.setState({name: "MyName"});
    }

    createALert() {
        alert("clicked");
    }

    changed = (event) => {
        console.log("changed", event.target.value);
        this.setState({name: event.target.value});
    }

    render() {

        const animals = ['cat', 'dog', 'horse'];

        return (
            <CtxConsumer>
                    {(context) => (
                        <div>
                            {context.animals.map(animal => {
                                return (
                                    <div key={animal}>
                                        <p>{animal}</p>
                                    </div>
                                );
                            })}
                        </div>
                    )}
            </CtxConsumer>

            /* Problem to use context and normal react togehter in one component
            {animals.map(animal => {
                 return (
                     <div key={animal}>
                         <p>{animal}</p>
                     </div>
                 );
             })}
             {this.state.age === 23 ? (
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
             ) : <React.Fragment>
                 <h2>You cant see this Footer</h2>
                 <h2>You have to login</h2>
             </React.Fragment>
             }*/
        );
    }
}

export {Footer};

