import React, { Component } from 'react';
import SelectOption from './SelectOption.jsx';
import { withRouter, history } from 'react-router-dom'

class Menu extends Component {
    bindSelectItems() {
        let items = [];
        if (this.props.projects.length >= 1) {
            items = this.props.projects.map((options, index) => {
                    return (
                        <SelectOption selectOptions={options} key={index} />
                    );
                });
        }
        return items;
    }
    render() {
        let select_items = this.bindSelectItems();
        return (
            <select value={this.props.selectedProjectPath} onChange={this.handleOnChange.bind(this)} className="select">
                {select_items}
            </select>
        )
    }

    handleOnChange(e){
        this.props.history.push(e.target.value);
    }
}

export default withRouter(Menu);