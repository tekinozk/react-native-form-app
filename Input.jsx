import React from 'react'
import styles from "./Input.style"
import {Text,View,TextInput} from "react-native"



function Input({label,onChangeText,placeholder}) {
  return ( 
    <View style={styles.container} >
        <Text style={styles.label}>{label}</Text>
        <View  style={styles.input_container} >
        <TextInput  placeholder={placeholder} onChangeText={onChangeText} style={styles.input}></TextInput>
        </View>
       
       

    </View>
   
  )
}

export default Input