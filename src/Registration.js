import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import * as React from 'react';

export default function Registration({ navigation }) {
  const pressing = () => {
    navigation.navigate('Activation')
  }
  const click = () => {
    navigation.navigate('Login')
  }
    return(
        <View style={styles.all}>
          <View style={styles.image}>
            <Image source={require("../assets/small_icon.png")} />
          </View>
            <Text style={styles.first}>Ngamia Driver</Text>
            <Text style={styles.second}>Having Driver Activation Code?</Text>
            
                < TouchableOpacity onPress={pressing}>
                  <View style={styles.container}>
                 <Text>Activate</Text>
                 </View>
                 </TouchableOpacity>
                 <View>
                     <Text style={styles.new}>New To Ngamia Driver App?</Text>
                 </View>
            
                <TouchableOpacity> 
                <View style={styles.containers}>
                <Text>Get Started</Text>
            </View>
            </TouchableOpacity>
            
            <View style={styles.already}>
                <Text>
                  Already Have An Account? <TouchableOpacity onPress={click}><Text style={{color: 'peru', fontWeight: 'bold'}}>Login</Text></TouchableOpacity>
                </Text>
            </View>
            
            <View style={styles.help}>
                <Text style={{color: 'darkorange', fontWeight: 'bold'}}>Need Help</Text>
            </View>
        </View>

    );
}
const styles = StyleSheet.create({
  image: {
    marginLeft:130,
    marginTop: 60,
  },
    first: {
      //flex: 1,
      alignItems: 'center',
      marginTop: 40,
      marginLeft: 70,
      fontWeight: 'bold',
      backgroundColor: 'white',
      fontSize: 30,
      justifyContent: 'center',
      },
    second: {
        marginLeft:30,
        marginTop: 30,
        fontSize: 20,
      },
    container: {
        width: 300,
        marginTop: 15,
        marginLeft:20,
        height: 50,
        alignItems: 'center',
        borderRadius: 105,
        justifyContent: 'center',
        paddingLeft: 100,
        paddingRight: 100,
        borderWidth: 1,
      },
    containers: {
        width: 300,
        marginTop: 15,
        marginLeft: 20,
        height: 50,
        borderRadius: 105,
        paddingLeft: 100,
        paddingRight: 100,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
    all: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center'
      },
      new: {
        marginTop: 20,
        marginLeft: 30,
        
      },
    already: {
        marginLeft: 50,
        marginTop: 58,
      },
    help: {
        marginLeft: 120,
        marginTop: 20,
      },
    new: {
        marginLeft:30,
        marginTop: 30,
        fontSize: 20,
      },
});