import React from 'react';
import {View, StyleSheet, KeyboardAvoidingView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useHeaderHeight} from '@react-navigation/stack';
import AwesomeTextInput from './AwesomeTextInput';
import AwesomeText from './AwesomeText';
import AwesomeTouchableOpacity from './AwesomeTouchableOpacity';

export default function AvoidForm(props) {
  const headerHeight = useHeaderHeight();

  const gotoNext = () => props.navigation.navigate('FooterButton');

  return (
    <SafeAreaView style={styles.AvoidFormContainer}>
      <View style={styles.innerContainer}>
        <AwesomeText text="Keyboard Avoid Form" header />
        <AwesomeText text="Multiple Input Keyboard avoid" />
      </View>
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={headerHeight}>
        <AwesomeTextInput placeholder="My Awesome Firstname" nospellcheck />
        <AwesomeTextInput placeholder="My Super Email" nospellcheck />
        <AwesomeTextInput placeholder="My Great Address" nospellcheck />
        <AwesomeTouchableOpacity title="Next Screen" onPress={gotoNext} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  AvoidFormContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 100,
    backgroundColor: 'salmon',
  },
  innerContainer: {
    alignItems: 'center',
  },
});
