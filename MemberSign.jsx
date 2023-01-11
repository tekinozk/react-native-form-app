import  {React,useState} from 'react';
import { View, Text } from 'react-native';
import Input from '../components/Button/Input/Input';
import  Button  from '../components/Button';
import { Alert } from 'react-native';

function MemberSign({navigation}){
  const [userName, setUserName] = useState("")
  const [userSurname, setUserSurname] = useState("")
  const [userAge, setUserAge] = useState("")
  const [userEmail, setUserEmail] = useState("")
   
  const handleSubmit = ()=>{
    if(userName===""||
      userSurname===""||
      userAge===""||
      userEmail===""){Alert.alert("Kebab Fitness Salonu","Form alanı boş bırakılamaz")}
      else{
        const user = {
          userName,
          userSurname,
          userAge,
          userEmail,
          
        }
       navigation.navigate("MemberResult",{user})
      }
   
    
  }
  return(
    <View>
  <Input onChangeText={setUserName} placeholder={"Üye ismini giriniz..."} label={"Üye Adı"} ></Input>
  <Input onChangeText={setUserSurname}placeholder={"Üye soyadını giriniz..."} label={"Üye Soyadı"} ></Input>
  <Input onChangeText={setUserAge}placeholder={"Üye yaşını giriniz..."} label={"Üye Yaşı"} ></Input>
  <Input onChangeText={setUserEmail}placeholder={"Üye e-posta adresini giriniz..."} label={"Üye e-mail "} ></Input>
  <Button text={"Onayla"} onPress={handleSubmit} ></Button>
    </View>
  )
}
export default MemberSign