import React, {forwardRef, useState, useImperativeHandle} from 'react';
import {TextInput, TextInputProps} from 'react-native';

const Input = function (props: TextInputProps, ref: any) {
  const [input, setInput] = useState('');

  useImperativeHandle(
    ref,
    () => ({
      setInputRefVal: () => input,
    }),
    [input],
  );

  // useEffect(()=>{
  //   ref.current=input
  // },[input])

  return (
    <TextInput
      value={input}
      onChangeText={val => {
        setInput(val);
      }}
    />
  );
};

const forwardInputRef = forwardRef(Input);

export default forwardInputRef;
