import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// import { Container } from './styles';

const Home = () => {
  return  (
    <View style={styles.container}>
        <Text>Hooooomaaaa 👽  </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
  
});

export default Home;