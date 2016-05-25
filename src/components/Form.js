import React, { Component } from 'react';
import store from '../store';

class Form extends Component {
    add = (e) => {
        const name = this.refs.name.value;
        const number = this.refs.number.value;
        store.addContact(name, number);
    };

    render () {
        return (
            <div>
                <input ref="name" type="text" placeholder="name" />
                <input ref="number" type="text" placeholder="number" />
                <button onClick={this.add}>Add</button>
            </div>
        );
    }
}

Form.propTypes = {};
Form.defaultProps = {};

export default Form;
