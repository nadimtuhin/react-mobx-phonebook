import React, { Component } from 'react';
import store from '../store';
import { observer } from 'mobx-react';

@observer
class NumbersList extends Component {
    render () {
        return (
            <table>
                <tbody>
                {store.contacts.map(contact => {
                    return (
                        <tr>
                            <td>{contact.name}</td>
                            <td>{contact.number}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        );
    }
}

NumbersList.propTypes = {};
NumbersList.defaultProps = {};

export default NumbersList;
