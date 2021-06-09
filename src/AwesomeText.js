import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function AwesomeTextText(props) {
  return (
    <View style={styles.container}>
      <Text style={props.header ? styles.headerStyle : styles.textStyle}>
        {props.text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    alignItems: 'center',
  },
  headerStyle: {
    fontSize: 16,
  },
  textStyle: {
    fontSize: 14,
  },
});
