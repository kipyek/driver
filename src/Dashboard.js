/*import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar } from 'react-native';
import * as React from 'react';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

const THEME_COLOR = 'peru';

export default function Dashboard({ navigation }) {
    const pressHandlers =() =>{
        navigation.navigate('Registration')
    }
    const pressHandler =() =>{
        navigation.navigate('Login')
    }
    return(
        <View style={styles.all}>
          <StatusBar backgroundColor={THEME_COLOR} barStyle="light-content" />
          <View style={styles.ngamia}>
            <Image source={require("../assets/splash_icon.png")} />
          </View>
            <Text style={styles.first}>Welcome Driver</Text>
            <Text style={styles.second}>Proceed With</Text>
            
                <TouchableOpacity onPress={pressHandler} style={{flexDirection: 'row'}}>
              <View style={styles.container}>
                <MaterialIcons name="login" size={24} color="orange" />
                      <Text style={{marginLeft: 10}}>Login</Text>
              </View>
                </TouchableOpacity>
            
              <TouchableOpacity onPress={pressHandlers}>
          <View style={styles.containers}>
              <MaterialIcons name="app-registration" size={24} color="orange" /> 
            <Text style={{marginLeft: 10}}>Register</Text>    
          </View> 
              </TouchableOpacity>
              <View style={styles.last}>
              <FontAwesome name="question-circle-o" size={14} color="orange" />
            </View>
              <View  style={styles.help}>
              <Text style={{ color: 'peru', fontWeight: 'bold'}}>Need Help?</Text>
              </View>    
        </View>
 
    );
}
const styles = StyleSheet.create({
  all: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center'
  },
  ngamia: {
    marginLeft:110,
    marginTop: 70,
    fontSize: 20,
  },
    first: {
      alignItems: 'center',
      marginTop: 30,
      marginLeft: 70,
      fontWeight: 'bold',
      fontSize: 30,
      justifyContent: 'center',
    },
    second: {
        marginLeft:110,
        marginTop: 20,
        fontSize: 20,
      },
      container: {
        width: 300,
        marginTop: 35,
        marginLeft: 35,
        marginRight: 50,
        paddingLeft: 100,
        paddingRight: 100,
        height: 50,
        alignItems: 'center',
        borderRadius: 105,
        fontSize: 16,
        flexDirection: 'row',
        borderWidth: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
      },
      containers: {
        width: 300,
        marginTop: 15,
        marginLeft: 35,
        height: 50,
        borderRadius: 105,
        paddingLeft: 100,
        paddingRight: 100,
        fontSize: 16,
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
      },
      help: {
        marginLeft: 140,
        paddingBottom: 100,
        flexDirection: 'row'
      },
      last: {
        marginTop: 40,
        marginLeft: 220,
        paddingTop: 40,
      },
});*/