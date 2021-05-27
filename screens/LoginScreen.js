import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const LoginScreen = (props) => {

  useEffect(() => {
    console.log("props", props);
  })

  const goTo = () => {
    // console.log('props', props);
    props.navigation.navigate('Root', 
    {
      params: {
        celibataire: true,
        frameworks: ["React", "Angular", "Meteor"]
      },
      screen: "Home"
    })
  }

  return (
    <View style={styles.container}>
      <Text>Nom : {props.route.params.nom}</Text>
      <Text>Age : {props.route.params.age}</Text>
      <TouchableOpacity onPress={goTo}>
        <View style={styles.button}>
          <Text>Aller à Home</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
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

export default LoginScreen;