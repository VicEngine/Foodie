import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import React from 'react'

const Landingpage = () => {
  return (
    <View style={styles.container}>
      <ImageBackground>
        <View style={styles.step1}>
          <Image source={require('../assets/images/Ellipse3.png')} />
        </View>
        <View style={styles.step2}>
          <Image source={require('../assets/images/Ellipse2.png')} />
        </View>
        <View style={styles.step3}>
          <Image source={require('../assets/images/Ellipse1.png')} />
        </View>
      </ImageBackground>
      <View style={styles.step4}>
        <Image source={require('../assets/images/bbg1.png')} />
      </View>
      <View style={styles.step5}>
        <Text style={styles.title}>
          Your Food, Lightning Fast
        </Text>
        <Image source={require('../assets/images/bbg2.png')}/>
      </View>
    </View>
  )
}

export default Landingpage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  step1: {
    position: 'relative',
    right: 8
  },
  step2: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: -5,
  },
  step3: {
    position: 'absolute',
    top: 14,
    bottom: 0,
    left: -5,
  },
  step4: {
    transform: [{
      translateY: 30,
    }],
    alignItems: 'center'
  },
  step5:{
    marginTop:50,
    flexDirection:'row',
    alignItems:'center'
  },
  title: {
    fontFamily: 'OpenSans',
    fontSize: 24,
    fontWeight: '600',
    color: '#1F2937',
  },
})