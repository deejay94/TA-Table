import React, { Component } from 'react';

class TableExamplePadded extends Component {

    render() {
        return (
            <tr>
                <td>{this.props.obj.number}</td>
                <td className="single line">{this.props.obj.title}</td>
                {/* Created At and Updated At are reformatted to display the date and time separately */}
                <td className="single line">{this.props.obj.created_at.replace('T', ', ').replace('Z', '')}</td>
                <td className="single line">{this.props.obj.updated_at.replace('T', ', ').replace('Z', '')}</td>
                <td>
                <ul>{this.props.obj.labels.map(key => <li key={key.id}> {key.id} </li>)}</ul>
                </td>
                <td className="right aligned">{this.props.obj.state}</td>
            </tr>
        )
    }
}

export default TableExamplePadded