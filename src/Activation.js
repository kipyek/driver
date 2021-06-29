import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import OutlineInput from 'react-native-outline-input';
import { MaterialIcons } from '@expo/vector-icons';
 
const Activation = () => {
  const [Code, setCode] = useState('');
 
  return (
    <View style={styles.all}>
      <View style={styles.texts}>
        <Text style={{ fontWeight: 'bold', fontSize: 28 }}> Verify Activation Code </Text>
      </View>
      <View style={styles.intro}>
        <Text style={{fontSize: 17, color: 'grey'}}>Enter the activation code sent to your </Text>
        <Text style={{fontSize: 17, color: 'grey'}}>  mobile number upon registration.</Text>
      </View>
    
    
      <View style={styles.first}>
      
      <OutlineInput
        Right={<MaterialIcons name="textsms" size={24} color="orange" />}
        value={Code}
        onChangeText={text => setCode(text)}
        label="Enter Activation Code"
        activeValueColor="black"
        activeBorderColor="darkorange"
        activeLabelColor="darkorange"
        passiveBorderColor="grey"
        passiveLabelColor="grey"
        passiveValueColor="#bbb7ff"
      />
      </View>
      <View style={styles.button}>
      < TouchableOpacity >
                <Text style={{marginLeft: 10, color: 'white', fontWeight: 'bold'}}>VERIFY CODE</Text>
      </TouchableOpacity>
      </View>
      <View>
        <Text style={{ marginTop: 50, color: 'grey', marginLeft: 80 }}> Resend Activation Code? </Text>
      </View>
      < TouchableOpacity style={{marginTop: 10, marginLeft: 50 }}>
            <View style={styles.container}>
            <MaterialIcons name="textsms" size={24} color="orange" />
                <Text style={{marginLeft: 10}}>Resend Code</Text>
            </View>
      </TouchableOpacity>
    </View>
  )};
  const styles = StyleSheet.create({
    texts: {
      marginTop: 130,
      marginLeft: 20,
    },
    intro: {
      marginTop: 30,
      marginLeft: 45,
    },
    first: {
      marginTop: 10,
      marginLeft: 10,
      fontWeight: 'bold',
      fontSize: 30,
    },
    button: {
      marginTop: 30,
      marginLeft: 80,
      marginRight: 110,
      height: 50,
      alignItems: 'center',
      borderRadius: 105,
      backgroundColor: 'darkorange',
      fontSize: 16,
      borderWidth: 0,
      justifyContent: 'center',
    },
    container: {
      marginTop: 5,
      marginLeft: 30,
      marginRight: 110,
      height: 50,
      alignItems: 'center',
      borderRadius: 105,
      fontSize: 16,
      flexDirection: 'row',
      borderWidth: 1,
      justifyContent: 'center',
    },
    all: {
      flex: 1,
      backgroundColor: '#ffffff',
      justifyContent: 'center',
    },
  });
      export default Activation;