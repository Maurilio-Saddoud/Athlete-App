import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

const PlottingView = () => {
    return (
        <View style = {styles.viewStyle}>
            <Text style = {styles.textStyle}>Davidson Swimming</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        height: 400,
        width: 375,
        backgroundColor: 'black',
        marginTop: 20,
        alignItems: 'center',
        borderColor: '#8ecfff',
        borderWidth: 5
    },
    textStyle: {
        color: '#8ecfff',
    }

});

export default PlottingView;