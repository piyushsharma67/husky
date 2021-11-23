import React from 'react';
import {ButtonProps, Button} from 'react-native';

const ButtonComponent = function (props: ButtonProps) {
  return <Button {...props} />;
};

export default ButtonComponent;
