import React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';


const LoginBar = ({ text, term, onTermChange, secure }) => {
    return <View style = {styles.signinStyle}>
    <TextInput style = {styles.inputStyle}
        placeholder = {text} 
        autoCapitalize = 'none'
        autoCorrect = {false}
        value = {term}
        onChangeText = {newTerm => onTermChange(newTerm)}
        secureTextEntry = {secure}
        
    />
    </View>

};

const styles = StyleSheet.create({
    signinStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        width: 300,
        borderRadius: 5,
        marginTop: 10,
        flexDirection: 'row'
      },
    inputStyle: {
        flex: 1,
        marginLeft: 5
    }

});

export default LoginBar;