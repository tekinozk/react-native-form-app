import React from 'react'
import { View,Text } from 'react-native'

function MemberResult({route}) {
   const {user} = route.params
  return (
    <View>
        <Text>Üye adı : {user.userName} </Text>
        <Text>Üye soyadı : {user.userSurname}</Text>
        <Text>Üye yaşı :{user.userAge} </Text>
        <Text>Üyer e-mail :{user.userEmail} </Text>
    </View>

  )
 
}

export default MemberResult