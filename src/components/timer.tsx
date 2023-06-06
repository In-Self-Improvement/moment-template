import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import useTimer from '~/hooks/useTimer';

interface Props {}

const Timer = ({}: Props) => {
  const styles = useStyles();
<<<<<<< Updated upstream:src/components/timer.tsx
  const timer = useTimer(4);

=======
  const timer = useTimer(60);
  const isOver = timer.time === 'end';
>>>>>>> Stashed changes:src/components/Timer.tsx
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
