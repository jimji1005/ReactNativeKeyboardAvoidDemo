import React from 'react';
import {View, StyleSheet, KeyboardAvoidingView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useHeaderHeight} from '@react-navigation/stack';
import AwesomeTextInput from './AwesomeTextInput';
import AwesomeText from './AwesomeText';

export default function FooterTextInputWithTab(props) {
  const headerHeight = useHeaderHeight();

  return (
    <SafeAreaView style={styles.FooterTextInputWithTabContainer}>
      <View style={styles.innerContainer}>
        <AwesomeText text="Footer TextInput w/Tab" header />
        <AwesomeText text="Input sticking to the bottom with Tab" />
      </View>
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={headerHeight}>
        <AwesomeTextInput placeholder="Tap me! I float above the tab" />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  FooterTextInputWithTabContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 100,
    backgroundColor: 'mediumorchid',
  },
  innerContainer: {
    alignItems: 'center',
  },
});
