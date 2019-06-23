import React, { Fragment } from 'react';
import SelectOption from './SelectOption.jsx';
import SelectBackdrop from './SelectBackdrop.jsx';
import SelectPlaceholder from './SelectPlaceholder.jsx';

const Menu = (props) => {
  const {
    selectedProject: {
      title,
      color,
    },
    projects,
    dataStore,
    menuToggle,
  } = props;

  const bindSelectItems = () => {
    let items = [];
    if (projects.length >= 1) {
        items = projects.map((options, index) => {
                return (
                    <SelectOption dataStore={dataStore} selectOptions={options} key={index} />
                );
            });
    }
    return items;
  };

  const select_items = bindSelectItems();
  const selectClasses = (menuToggle) ? 'select is-active' : 'select';

  return (
    <Fragment>
        <div className={selectClasses}>
          <SelectPlaceholder
            color={color}
            title={title}
            dataStore={dataStore}
          />
          <div className="select__options">
            {select_items}
          </div>
        </div>
        {(menuToggle) && <SelectBackdrop dataStore={dataStore} ></SelectBackdrop>}
      </Fragment>
  )
};

export default Menu;