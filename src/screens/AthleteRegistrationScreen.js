import React, {useState} from "react";
import { View, StyleSheet, Text, Button, TouchableOpacity } from "react-native";
import RegistrationForm from "../components/RegistrationForm";
import Spacer from '../components/Spacer';
import AuthForm from '../components/AuthForm';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const AthleteRegistrationScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <KeyboardAwareScrollView>
      <View style = {styles.viewStyle}>
        <Text style = {styles.textStyle}>Athlete Registration</Text>
        <AuthForm text = "Full Name" onTermChange= {setName} cap = "words"/>
        <AuthForm text = "Email" onTermChange = {setEmail} />
        <AuthForm text = "Password" onTermChange = {setPassword} secure = {true}/>
        <Spacer space={"7%"} />
        <TouchableOpacity onPress = {() => navigation.navigate("AthleteQ")}
          style = {styles.buttonStyle}>
          <Text style = {styles.opacityStyle}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  )
};

AthleteRegistrationScreen.navigationOptions = {
  headerStyle: {
    backgroundColor: "black",
    shadowColor: 'transparent'
  },
  
  headerTintColor: "#8ecfff",
  headerBackTitle: "Back",
  title: ""
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "white",
    fontFamily: "goodTimes",
    textAlign: "center",
  },
  viewStyle: {
    flex: 1,
    backgroundColor: "black",
    alignItems: 'center'
  },
  opacityStyle: {
    color: '#8ecfff',
    fontSize: 25
  },
  buttonStyle: {
    height: 75,
    width: 150,
    borderColor: "#8ecfff",
    marginBottom: 30,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5
  },
});

export default AthleteRegistrationScreen;
