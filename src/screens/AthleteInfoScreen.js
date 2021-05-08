import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


const AthleteInfoScreen = ({navigation}) => {
    const athlete = navigation.getParam('athlete');
    return (
        <View style = {styles.viewStyle}>
            <Text>Athlete Info</Text>
            <Text style = {styles.textStyle}>{athlete.name}</Text>
        </View>
    )

};

AthleteInfoScreen.navigationOptions  = {
    headerStyle: {
      backgroundColor: "black",
      shadowColor: 'transparent'
    },
    headerTintColor: "#8ecfff",
    headerBackTitle: "Back",
    title: ""
  };

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'flex-start'
    },
    textStyle: {
        color: '#8ecfff',
        fontSize: 20,
        fontFamily: "goodTimes",
        marginLeft: 10
    }

});

export default AthleteInfoScreen;