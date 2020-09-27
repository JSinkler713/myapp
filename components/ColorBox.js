import React from 'react'
import { StyleSheet, View, Text } from 'react-native';

const ColorBox = ({ hexCode, colorName }) => {
  const colorStyle = {
    backgroundColor: hexCode,
  }

  // check if it's in the white spectrum
  const textStyle = {
    color:
      parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1
        ? 'black'
        : 'white',
  };

  return (
    
    <View>
      <Text style={[styles.all_colors, colorStyle, textStyle]}>
        {colorName}: {hexCode}
      </Text>
    </View>
  );
};
 
const styles = StyleSheet.create({
  all_colors: {
    width: 350,
    margin: 5,
    padding: 5,
    textAlign: 'center',
    color: 'white',
    shadowColor: 'black',
    shadowOffset: {width:0, height:2},
    showOpacity: 0.4,
    shadowRadius: 4,
  },
  cyan: {
    backgroundColor: '#2aa198',
  },
})

export default ColorBox;
