import React from 'react';
import { Header, View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const WelcomeScreen = (props) => {

  const goTo = () => {
    // console.log('props', props);
    props.navigation.navigate('Login', 
    {
      nom: "Julien",
      age: 56
    })
  }

  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
      <TouchableOpacity onPress={goTo}>
        <View style={styles.button}>
          <Text>Aller à Login</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgrey"
  },
  button: {
    backgroundColor: "lightblue",
    borderBottomColor: "darkblue",
    borderWidth: 2,
    alignItems: "center",
  }
})

export default WelcomeScreen;