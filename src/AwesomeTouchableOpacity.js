import React from 'react';
import {Dimensions, Text, StyleSheet, TouchableOpacity} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function AwesomeTouchableOpacity(props) {
  return (
    <TouchableOpacity
      style={props.full ? styles.innerFullContainer : styles.innerContainer}
      onPress={props.onPress}>
      <Text style={styles.textStyle}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  innerFullContainer: {
    width: windowWidth,
    height: 40,
    backgroundColor: 'lightskyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    minWidth: 150,
    backgroundColor: 'lightblue',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  textStyle: {
    fontSize: 14,
    textAlign: 'center',
  },
});
