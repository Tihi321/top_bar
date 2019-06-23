import React from 'react';

const SelectPlaceholder = (props) => {
  const {
    title,
    color,
    dataStore,
  } = props;

  const keyUpCallback = (e) => {
    if (e.charCode === 13) {
      dataStore({
        action: 'menuOpen',
        value: '',
      });
    }
  };

  const onClickCallback = () => {
    dataStore({
      action: 'menuOpen',
      value: '',
    });
  };

  const style = {
    color: color, 
  };

  return (
    <div
      className="select__placeholder"
      style={style}
      tabIndex={-1}
      role="button"
      onKeyPress={keyUpCallback}
      onClick={onClickCallback}
    >
      {title}
    </div>
  );
};

export default SelectPlaceholder;
