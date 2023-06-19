import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

interface Props {
  children: React.ReactNode;
  onPressButton: () => void;
  backgroundColor?: string;
}

const Button = ({onPressButton, children, backgroundColor}: Props) => {
  const styles = useStyles(backgroundColor);

  return (
    <View>
      <TouchableHighlight style={styles.startBtn} onPress={onPressButton}>
        <Text style={styles.startText}>{children}</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Button;

const useStyles = (backgroundColor: string | undefined) =>
  StyleSheet.create({
    startBtn: {
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      width: 120,
      height: 40,
      backgroundColor: backgroundColor ? backgroundColor : 'black',
      borderRadius: 10,
    },
    startText: {
      fontSize: 15,
      color: 'white',
    },
  });
