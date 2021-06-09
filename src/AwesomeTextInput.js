import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

export default function AwesomeTextInput(props) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder={props.placeholder}
        spellCheck={props.spellCheck || false}
        autoCorrect={props.spellCheck || false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  textInput: {
    width: 300,
    backgroundColor: 'gold',
    borderColor: 'black',
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 14,
  },
});
