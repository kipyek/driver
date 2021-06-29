import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Text, withCallingCode, TouchableOpacity} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';

export default function Test ({ navigation }) {
  const [countrycode, setcountryCode]= useState('KE');
  const [callingCode, setcallingCode]= useState('254');

  return (
    <View 
    style={{
      backgroundColor: '#465881',
      height: 65,
      borderRadius: 10,
      marginTop: 100,
      flexDirection: 'row',
      width: '100%',
      
      alignItems: 'center',
      alignSelf: 'center',
     
    }}>
      <View
      style={{
        alignItems: 'center',
        width: '15%',
        
      }}>
        <CountryPicker
        withFilter
        countrycode={countrycode}
        withFlag
        withAphaFilter={false}
        withCurrencyButton={false}
        withCallingCode
        onSelect={country => {
          console.log('country', country);
          setcountryCode('');
          setcallingCode('');
        }}
        />
        
      </View>
      <TextInput
      style={{
        fontSize: 15,
        width: '65%',
        color: 'white'
      }}
      keyboardType="phone-pad"
      placeholder="Phone Number"
      placeholderTextColor="#003f5c"
      />
      
      
    </View>
  )
}