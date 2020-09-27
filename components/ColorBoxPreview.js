import React from 'react'
import { StyleSheet, View, Text } from 'react-native';

const ColorBoxPreview = ({ hexCode, colorName }) => {
  const colorStyle = {
    backgroundColor: hexCode,
  }

  return (
    
    <View style={[styles.all_colors, colorStyle, ]}>
    </View>
  );
};
 
const styles = StyleSheet.create({
  all_colors: {
    width: 50,
    height: 50,
    margin: 5,
    padding: 5,
    color: 'white',
  },
  cyan: {
    backgroundColor: '#2aa198',
  },
})

export default ColorBoxPreview;
