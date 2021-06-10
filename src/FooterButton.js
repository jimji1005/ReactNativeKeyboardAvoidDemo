import React from 'react';
import {StyleSheet, ScrollView, KeyboardAvoidingView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useHeaderHeight} from '@react-navigation/stack';
import AwesomeTextInput from './AwesomeTextInput';
import AwesomeText from './AwesomeText';
import AwesomeTouchableOpacity from './AwesomeTouchableOpacity';

export default function FooterButton(props) {
  const headerHeight = useHeaderHeight();

  const gotoNext = () => props.navigation.navigate('BottomTab');

  return (
    <SafeAreaView style={styles.FooterButtonContainer}>
      <ScrollView scrollEnabled={false} keyboardShouldPersistTaps="never">
        <AwesomeText text="Footer Button" header />
        <AwesomeText text="Input with spellcheck, button floating above keyboard" />
        <AwesomeTextInput placeholder="Tap me!" />
      </ScrollView>
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={headerHeight}>
        <AwesomeTouchableOpacity title="Next Screen" onPress={gotoNext} full />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  FooterButtonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 100,
    backgroundColor: 'hotpink',
  },
  innerContainer: {
    paddingHorizontal: 30,
    alignItems: 'center',
  },
});
