import React, {useState, useCallback, useEffect, useContext} from 'react'; 
import { RefreshControl, FlatList, Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import ColorBoxPreview from '../components/ColorBoxPreview';
 

const HomeScreen = ({navigation, route })=> { 
  let newColorPalette =  route.params ? route.params.newColorPalette : undefined 
  const [colorPalettes, setColorPalettes] = useState([])
  const [isRefreshing, setIsRefreshing] = useState(false)

  const fetchColors = useCallback(async()=> {
    try{
    let colorData = await fetch('https://color-palette-api.kadikraman.now.sh/palettes')
    colorData = await colorData.json()
    setColorPalettes(colorData)
    } catch (err) {
      console.log(err)
    }
  },[])

  const handleRefresh = useCallback(async()=> {
    setIsRefreshing(true);
    await fetchColors()
    setTimeout(()=>{setIsRefreshing(false)},1000)
  }, [])

  useEffect(()=> {
    fetchColors()
  },[])

  useEffect(()=> {
    if (newColorPalette) {
      setColorPalettes(currentState => [newColorPalette, ...currentState])
    }
  },[newColorPalette])

  return ( 
    <>
      <View style={styles.colorPreview} >
        <Button style={{fontSize: 24}} onPress={()=> navigation.navigate('AddNewPalette')} title={'Add a color scheme'}></Button>
        <FlatList
          data={colorPalettes}
          keyExtractor={item=> item.paletteName}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={()=> navigation.navigate('ColorPalette', { paletteName: item.paletteName, colors:item.colors })} >
              <Text style={styles.titles}> {item.paletteName}</Text>
            <FlatList
              horizontal={true}
              style={[{flex: 1, flexDirection: 'row'}, styles.colorPreview]}
              data={item.colors}
              keyExtractor={item => item.hexCode}
              renderItem={({ item }) => (
                <ColorBoxPreview hexCode={item.hexCode} colorName={''}  />
              )}
            />
            </TouchableOpacity> 

          )}
          onRefresh={handleRefresh} 
          refreshing={isRefreshing}
        />
      </View>
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
    backgroundColor: 'white',
    flex:1,
    padding: 2,
  },
  titles: {
    fontWeight: 'bold'
  }
});
export default HomeScreen;
