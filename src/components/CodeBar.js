import React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

const CodeBar = ({text, term, onTermChange}) => {
    return <View style = {styles.codebar}>
        <TextInput style = {styles.input}
        placeholder = {text} 
        autoCapitalize = "none"
        autoCorrect = {false}
        value = {term}
        onChangeText = {(newTerm) => onTermChange(newTerm)}
        />
        </View>
}

const styles = StyleSheet.create({
    codebar: {
        backgroundColor: '#F0EEEE',
        height: 50,
        width: 300,
        borderRadius: 5,
        marginTop: 30,
        flexDirection: 'row',
        
    },
    input : {
        flex: 1,
        marginLeft: 5
    }
});

export default CodeBar;