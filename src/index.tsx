import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {}

const MomentScreen = ({}: Props) => {
  const styles = createStyles();
  // const [viewIndex, setViewIndex] = useState<number>(0);
  return (
    <View style={styles.container}>
      <Text style={styles.time}>Hello World</Text>
    </View>
  );
};

export default MomentScreen;

const createStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    time: {
      fontWeight: 'bold',
      fontSize: 50,
    },
  });
