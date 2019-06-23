import React from 'react';

const SelectBackdrop = (props) => {
  const {
    dataStore,
  } = props;

  const keyUpCallback = (e) => {
    if (e.charCode === 13) {
      dataStore({
        action: 'menuClose',
        value: '',
      });
    }
  };

  const onClickCallback = () => {
    dataStore({
      action: 'menuClose',
      value: '',
    });
  };

  return (
    <div
      className="select__backdrop"
      tabIndex={-1}
      role="button"
      onKeyPress={keyUpCallback}
      onClick={onClickCallback} 
    >
    </div>
  )
}

export default SelectBackdrop;