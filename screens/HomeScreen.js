import React, {useState, useEffect, useContext} from 'react'; 
import { FlatList, Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import ColorBoxPreview from '../components/ColorBoxPreview';
 
const RAINBOW = [
  { colorName: 'Red', hexCode: '#FF0000' },
  { colorName: 'Orange', hexCode: '#FF7F00' },
  { colorName: 'Yellow', hexCode: '#FFFF00' },
  { colorName: 'Green', hexCode: '#00FF00' },
  { colorName: 'Violet', hexCode: '#8B00FF' },
];

const FRONTEND_MASTERS = [
  { colorName: 'Red', hexCode: '#c02d28' },
  { colorName: 'Black', hexCode: '#3e3e3e' },
  { colorName: 'Grey', hexCode: '#8a8a8a' },
  { colorName: 'White', hexCode: '#ffffff' },
  { colorName: 'Orange', hexCode: '#e66225' },
];
const SOLARIZED = [
  { colorName: 'Base03', hexCode: '#002b36' },
  { colorName: 'Base02', hexCode: '#073642' },
  { colorName: 'Base01', hexCode: '#586e75' },
  { colorName: 'Base00', hexCode: '#657b83' },
  { colorName: 'Base0', hexCode: '#839496' },
]

const HomeScreen = ({navigation})=> { 
  return ( 
    <>
      <View style={styles.colorPreview} >
        <TouchableOpacity onPress={()=> navigation.navigate('ColorPalette', { paletteName:'Rainbow', colors:RAINBOW })} >
        <FlatList
          horizontal={true}
          style={[{flex: 1, flexDirection: 'row'}, styles.colorPreview]}
          data={RAINBOW}
          keyExtractor={item => item.hexCode}
          renderItem={({ item }) => (
            <ColorBoxPreview hexCode={item.hexCode} colorName={''}  />
          )}
        />
        </TouchableOpacity> 
        <TouchableOpacity onPress={()=> navigation.navigate('ColorPalette', { paletteName:'Frontend Masters', colors:FRONTEND_MASTERS })} >
        <FlatList
          horizontal={true}
          style={[{flex: 1, flexDirection: 'row'}, styles.colorPreview]}
          data={FRONTEND_MASTERS}
          keyExtractor={item => item.hexCode}
          renderItem={({ item }) => (
            <ColorBoxPreview hexCode={item.hexCode} colorName={''}  />
          )}
        />
        </TouchableOpacity> 
        <TouchableOpacity onPress={()=> navigation.navigate('ColorPalette', { paletteName:'Solarized', colors:SOLARIZED })} >
        <FlatList
          horizontal={true}
          style={[{flex: 1, flexDirection: 'row'}, styles.colorPreview]}
          data={SOLARIZED}
          keyExtractor={item => item.hexCode}
          renderItem={({ item }) => (
            <ColorBoxPreview hexCode={item.hexCode} colorName={''}  />
          )}
        />
        </TouchableOpacity> 
      </View>
      <Button onPress={()=> navigation.navigate('ColorPalette', { paletteName:'Tomato'})} title="To Tomato Page"/>
    </>
  ) 
} 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  colorPreview: {
    flexDirection: 'column',
  },
});
export default HomeScreen;
