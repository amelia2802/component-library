import React from 'react';

const useToggle = (initialValue = false) => {
  const [state, setState] = React.useState(initialValue);

  const toggle = () => {
    setState((prev) => !prev);
  };

  return [state, toggle];
}

export default useToggle;