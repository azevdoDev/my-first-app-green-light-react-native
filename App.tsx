import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import symbolOn from './assets/pictures/symbol-on.png'
import symbolOff from './assets/pictures/symbol-off.png'
export default function App() {
  const [isActive, setisActive] = useState(false)

  function HandleSymbol(){
    setisActive((oldValue:boolean)=>{
      return !oldValue 

    })
    console.log(isActive)
  }
  return (
    <View style={isActive ? styles.containerOn : styles.containerOff}>
      <TouchableOpacity onPress={HandleSymbol}>
        <Image source={isActive ? symbolOn : symbolOff}></Image>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  containerOn: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerOff:{
    flex:1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
