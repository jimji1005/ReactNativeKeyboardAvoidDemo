import React from 'react';
import {View, StyleSheet, KeyboardAvoidingView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useHeaderHeight} from '@react-navigation/stack';
import AwesomeTextInput from './AwesomeTextInput';
import AwesomeText from './AwesomeText';
import AwesomeTouchableOpacity from './AwesomeTouchableOpacity';

export default function FooterTextInputWithoutSpellCheck(props) {
  const headerHeight = useHeaderHeight();

  const gotoNext = () => props.navigation.navigate('AvoidForm');

  return (
    <SafeAreaView style={styles.FooterTextInputWithoutSpellCheckContainer}>
      <View style={styles.innerContainer}>
        <AwesomeText text="Footer TextInput w/o SpellCheck" header />
        <AwesomeText text="Input sticking to the bottom without spellCheck" />
        <AwesomeTouchableOpacity title="Next Screen" onPress={gotoNext} />
      </View>
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={headerHeight}>
        <AwesomeTextInput
          placeholder="Tap me! I stick to the bottom!"
          nospellcheck
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  FooterTextInputWithoutSpellCheckContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 100,
    backgroundColor: 'palegreen',
  },
  innerContainer: {
    alignItems: 'center',
  },
});
