import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native'

const HomeScreen = (props) => {

  useEffect(() => {
    console.log(props.route.params.frameworks)

  }, [])
  return (
    <View style={styles.container}>
      <Text>Célibataire : {props.route.params.celibataire ? "Oui" : "Non"}</Text>
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

export default HomeScreen;