import React from 'react';
import { withRouter } from 'react-router-dom'

const SelectOption = (props) => {
  const {
    selectOptions: {
      path,
      title,
      color,
    },
    dataStore,
  } = props;

  const keyUpCallback = (e) => {
    if (e.charCode === 13) {
      dataStore({
        action: 'menuClose',
        value: '',
      });
      props.history.push(path);
    }
  };

  const onClickCallback = () => {
    dataStore({
      action: 'menuClose',
      value: '',
    });
    props.history.push(path);
  };

  const optionsStyle = {
    backgroundColor: color,
  };

  return (
    <div
      className="select__option"
      style={optionsStyle}
      tabIndex={-1}
      role="button"
      onKeyPress={keyUpCallback}
      onClick={onClickCallback} 
    >
        {title}
    </div>
  )
}

export default withRouter(SelectOption);