import React, {useState, useEffect, useContext} from 'react'; 
import { StyleSheet, Text, View, Button } from 'react-native';
 
const SecondPage = ({navigation})=> { 
  return ( 
    <View style={styles.container}>
       <Text>SecondPage navigated to</Text>
      <Button onPress={()=> navigation.navigate('Home')} title="To Home Page"/>
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
export default SecondPage;
