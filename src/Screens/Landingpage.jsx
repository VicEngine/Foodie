import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Landingpage = () => {
  return (
    <View style={styles.container}>
      <Text>Landingpage</Text>
    </View>
  )
}

export default Landingpage

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'magenta'
    },
})