import React from 'react';
import { Text, Button, View } from 'react-native';
import { firebase } from '../../firebase/config';


const ByPassScreen = ({ navigation }) => {
    const user = firebase.auth().currentUser;
    console.log(user);
    if(user){
        navigation.navigate('coachFlow');
    } else{
        navigation.navigate('Signin');
    }
    return( 
        <View>
            <Text>Loading </Text>
        </View>
    )
}

export default ByPassScreen;