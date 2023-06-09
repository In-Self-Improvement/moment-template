import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import useTimer from '~/hooks/useTimer';
import Button from '~/components/Button';
interface Props {}

const Timer = ({}: Props) => {
  const styles = useStyles();
  const timer = useTimer(4);
  const isOver = timer.time === 'end';
  useEffect(() => {
    return () => {
      timer.stop();
    };
  }, []);
  const start = () => {
    timer.start();
  };
  const restart = () => {
    timer.restart();
  };
  return (
    <View>
      <Text style={styles.timeText}>{timer.time}</Text>
      {isOver ? (
        <Button onPressButton={restart}>다시시작!</Button>
      ) : (
        <Button onPressButton={start}>시작!</Button>
      )}
    </View>
  );
};

export default Timer;

const useStyles = () =>
  StyleSheet.create({
    timeText: {
      fontWeight: 'bold',
      fontSize: 50,
      alignSelf: 'center',
    },
  });
