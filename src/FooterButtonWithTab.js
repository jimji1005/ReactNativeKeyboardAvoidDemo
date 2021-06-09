import React from 'react';
import {StyleSheet, View, KeyboardAvoidingView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useHeaderHeight} from '@react-navigation/stack';
import AwesomeTextInput from './AwesomeTextInput';
import AwesomeText from './AwesomeText';
import AwesomeTouchableOpacity from './AwesomeTouchableOpacity';

export default function FooterButton(props) {
  const headerHeight = useHeaderHeight();

  const gotoNext = () => props.navigation.navigate('BottomTab');

  return (
    <SafeAreaView
      style={styles.FooterButtonWithTabContainer}
      edges={['right', 'top', 'left']}>
      <View style={styles.innerContainer}>
        <AwesomeText text="Footer Button w/tab" header />
        <AwesomeText text="Input with spellcheck, button floating above tab" />
        <AwesomeTextInput placeholder="Tap me!" />
      </View>
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={headerHeight}>
        <AwesomeTouchableOpacity title="Next Screen" onPress={gotoNext} full />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  FooterButtonWithTabContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 100,
    backgroundColor: 'lightcoral',
  },
  innerContainer: {
    paddingHorizontal: 30,
    alignItems: 'center',
  },
});
