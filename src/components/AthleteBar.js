import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import firebase from '../../firebase/config';
import { withNavigation } from "react-navigation";


const AthleteBar = ({ item, navigation }) => {
    return (
         <TouchableOpacity style = {styles.viewStyle}
         onPress = {() => {
            navigation.navigate('AthleteInfo')
         }}
         >
            <Text style = {styles.textStyle}> Andrew Denny </Text>
         </TouchableOpacity>
        )
    
};

const styles = StyleSheet.create({
    viewStyle: {
        borderColor: '#8ecfff',
        borderWidth: 5,
        flexDirection: 'column',
        alignItems: 'flex-start',
        height: 60

    },
    textStyle: {
        color: 'white',
        fontSize: 20,
        marginVertical: 12
        
    },
    opacityStyle: {
        flex: 1
    }

});

export default withNavigation(AthleteBar);