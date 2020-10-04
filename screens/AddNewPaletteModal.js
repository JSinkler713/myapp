import React, {useState, useEffect, useContext, useCallback} from 'react'; 
import { FlatList, Switch, TouchableOpacity, View, Text, TextInput, StyleSheet, Alert } from 'react-native'
 
const AddNewPaletteModal = ({navigation})=> { 
  const [name, setName] = useState('')

  const handleSubmit = useCallback(()=> {
    if (!name) {
      Alert.alert('need a palette name')
    } else {
      const newColorPalette = {
        paletteName: name,
        colors: [],
      }
      navigation.navigate('Home', {newColorPalette} );
    }
  }, [name])

  return ( 
     <View style={styles.container} >
       <Text style={styles.name}>Name of the new Palette</Text>
       <TextInput style={styles.input} placeholder='Palette name' value={name} onChangeText={setName} />
       <FlatList 
       <View style={styles.color}>
         <Text>Color Name</Text>
         <Switch value={true} onValueChange={()=>{}} />
       </View>
       <TouchableOpacity style={styles.button} onPress={handleSubmit}>
         <Text style={styles.buttonText}>Submit</Text>
       </TouchableOpacity>
       <Text> Check Check</Text>
     </View> 
  ) 
} 
const styles = StyleSheet.create({
  color: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth:1,
    borderBottomColor: 'grey',
  },
  input: {
    borderColor: 'grey',
    borderWidth: 1,
    padding: 10,
    marginBottom: 50,
  },
  container: {
    padding: 10,
    backgroundColor: 'white',
  },
  button: {
    height: 40,
    backgroundColor: 'teal',
    borderRadius:5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  name: {
    paddingTop: 10,
    paddingBottom: 10,
  }
})
 
export default AddNewPaletteModal;
