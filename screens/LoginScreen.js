import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native'

const LoginScreen = (props) => {

  useEffect(() => {
    console.log("props", props);
  })
  return (
    <View style={styles.container}>
      <Text>Nom : {props.route.params.nom}</Text>
      <Text>Age : {props.route.params.age}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgrey"
  }
})

export default LoginScreen;