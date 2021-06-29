import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Alert } from 'react-native';
import OutlineInput from 'react-native-outline-input';
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../src/BaseApi';
 
export default function Login({ navigation }) {
  let userProfile = null;

  const [userName, setUsername]= useState();
  const [password, setPassword]= useState();
  
async function  myfunction() {
  try{
    const res = await api.Login({
      "userName": userName,
      "password": password,
      "transporter": false,
      "driver": true,
      "agent": false,
      "trader": false
    });
    console.log('2nd res',res.data)
    const userProfile = res.data.profile;

    // //Storing User Profile
    AsyncStorage.setItem('authUser', JSON.stringify(userProfile))
  }
  catch(error){
     console.log(error)
     Alert.alert(error.message)

    // console.log(error.response?.data)
  }
  finally{
    if (userProfile!== null){
      navigation.navigate('Resend');
    }
  }
}
 
  return (
    <View style={styles.body}>
      <View style={styles.texts}>
        <Text style={{  fontWeight: 'bold', fontSize: 20}}>Please Login</Text>
      </View>
    
    
      <View style={styles.first}>
      <MaterialIcons name="email" size={24} color="orange" />
      <OutlineInput
        value={userName}
        onChangeText={text => setUsername(text)}
        label="Username"
        activeValueColor="black"
        activeBorderColor="darkorange"
        activeLabelColor="darkorange"
        passiveBorderColor="grey"
        passiveLabelColor="grey"
        passiveValueColor="#bbb7ff"
      />
      </View>
      <View style={styles.second}>
      <MaterialIcons name="lock" size={24} color="orange" />
      <OutlineInput
        value={password}
        onChangeText={text => setPassword(text)}
        label="Password"
        activeValueColor="black"
        password={true}
        secureTextEntry={true}
        activeBorderColor="darkorange"
        activeLabelColor="darkorange"
        passiveBorderColor="grey"
        passiveLabelColor="grey"
        passiveValueColor="#bbb7ff"
      />
      </View>
      <TouchableOpacity onPress={
         async()=>{myfunction()}}>
              <View style={styles.container}>
                <MaterialIcons name="login" size={24} color="orange" />
                      <Text style={{marginLeft: 1}}>Login</Text>
              </View>
      </TouchableOpacity>
          <Text style={{color: 'orange', marginTop: 60, marginLeft: 120}}>Forgot Your Password?</Text>
          <Text style={{color: 'orange', marginTop: 15, marginLeft: 150, fontWeight: 'bold'}}>Need Help?</Text>

    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    backgroundColor: '#ffffff',
    justifyContent: 'center'
  },
  texts: {
    marginTop: 150,
    marginLeft: 130,
  },
  first: {
    marginTop: 10,
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 30,
    
  },
  second: {
    marginTop: 20,
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 30,
  },
  container: {
    width: 300,
    marginTop: 35,
    marginLeft: 30,
    marginRight: 50,
    paddingLeft: 100,
    paddingRight: 100,
    height: 50,
    alignItems: 'center',
    borderRadius: 105,
    fontSize: 36,
    flexDirection: 'row',
    borderWidth: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
});