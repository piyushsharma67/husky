import React, {useCallback, useRef} from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import RNTextComponent from '../../component/text';
import RNTextInputComponent from '../../component/input';
import ButtonComponent from '../../component/buttons';

const HomeScreen = function () {
  const inputRef = useRef(null);
  const inputRef2 = useRef(null);

  const submitt = useCallback(() => {
    console.log(inputRef.current);
    console.log(inputRef2.current);
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <RNTextComponent
        text="please enter input below"
        onPress={() => Alert.alert('yay', 'pressed')}
      />

      <RNTextInputComponent
        // value={input}
        ref={inputRef}
        style={style.input}
      />
      <RNTextInputComponent
        // value={input}
        ref={inputRef2}
        style={style.input}
      />
      <ButtonComponent onPress={submitt} title="submitt" />
    </View>
  );
};

const style = StyleSheet.create({
  input: {
    width: 120,
    height: 40,
    padding: 0,
    color: 'black',
    borderWidth: 0.5,
  },
});

export default HomeScreen;
