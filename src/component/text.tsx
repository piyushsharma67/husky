import React from 'react';
import {Text, TextProps} from 'react-native';

interface text extends TextProps {
  text: string;
}

const RNText = function (props: text) {
  console.log('test');
  return <Text {...props}>{props.text}</Text>;
};

export default React.memo(RNText);
