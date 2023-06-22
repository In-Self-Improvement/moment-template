import React from 'react';
import {StyleSheet, View} from 'react-native';
import MomentScreen from '~/index';

interface Props {}
if (process.env.NODE_ENV === 'development') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React, {
    trackAllPureComponents: true,
  });
}
const App = ({}: Props) => {
  const styles = createStyles();

  return (
    <View style={styles.container}>
      <MomentScreen />
    </View>
  );
};

export default App;

const createStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
  });
