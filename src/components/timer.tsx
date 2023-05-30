import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import useTimer from '~/hooks/timer';

interface Props {}

const Timer = ({}: Props) => {
  const styles = useStyles();
  const timer = useTimer(4);

  useEffect(() => {
    timer.start();
    return () => {
      timer.stop();
    };
  }, []);

  return (
    <View>
      <Text style={styles.time}>{timer.time}</Text>
    </View>
  );
};

export default Timer;

const useStyles = () =>
  StyleSheet.create({
    time: {
      fontWeight: 'bold',
      fontSize: 50,
    },
  });
