import React, {useState, useEffect, useContext} from 'react'; 
import { Button, StyleSheet, Text, View } from 'react-native';
 
const HomeScreen = ({navigation})=> { 
  return ( 
    <View style={styles.container}>
       <Text>Home</Text>
      <Button onPress={()=> navigation.navigate('SecondPage')} title="To Second Page"/>
     </View> 
  ) 
} 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default HomeScreen;
