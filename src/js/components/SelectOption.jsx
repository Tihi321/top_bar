import React, { Component } from 'react';

class SelectOption extends Component {

    render() {
        return (
            <option className="option" value={this.props.selectOptions.path}>
                {this.props.selectOptions.title}
            </option>
        )
    }
}

export default SelectOption;