import React, {useState} from 'react';
import {View, Button, Text} from 'react-native';

const Test = () => {
  const [OTP, setOTP] = useState('');
  const generateOTP = (length) => {
    const digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < length; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }
    setOTP(OTP);
    return OTP;
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        onPress={() => generateOTP(4)}
        title="OTP"
        color="#841584"
      />
      <Text>{OTP}</Text>
    </View>
  );
};

export default Test;