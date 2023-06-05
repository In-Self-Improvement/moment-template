import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

interface Props {
  onPressButton: () => void;
  buttonText: string;
}

const Button = ({onPressButton, buttonText}: Props) => {
  const styles = useStyles();

  return (
    <View>
      <TouchableHighlight style={styles.startBtn} onPress={onPressButton}>
        <Text style={styles.startText}>{buttonText}</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Button;

const useStyles = () =>
  StyleSheet.create({
    startBtn: {
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      width: 120,
      height: 40,
      backgroundColor: 'black',
      borderRadius: 10,
    },
    startText: {
      fontSize: 15,
      color: 'white',
    },
  });
