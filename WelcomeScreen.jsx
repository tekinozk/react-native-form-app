import  React from 'react';
import { View, Text ,StyleSheet} from 'react-native';
import Button from '../components/Button/Button';


function Welcome({navigation}){
  const goToMemberSign = ()=>{
    navigation.navigate("MemberSign")
  }
  return(
    <View style={styles.container} ><Text style={styles.header}>Kebap Fitness Salonu</Text>
    <Button text="Üye Kaydı Oluştur" onPress={goToMemberSign} ></Button>
    </View>
   
  )
}
export default Welcome

const styles = StyleSheet.create({
  container:{
    alignItems:"center",
    justifyContent:"center",
    flex:1,
  },
  header:{
    fontWeight:"900",
    fontSize:30,
    margin:15,
    
    
  }
})
