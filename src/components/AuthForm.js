import React from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";

const AuthForm = ({ text, term, onTermChange, secure }) => {
  return (
    <View style={styles.signinStyle}>
      <Text style={{color: "white"}}>{text}</Text>
      <TextInput
        style={styles.inputStyle}
        placeholder={text}
        autoCapitalize="none"
        autoCorrect={false}
        value={term}
        onChangeText={(newTerm) => onTermChange(newTerm)}
        secureTextEntry={secure}
        placeholderTextColor="#707070"
        color="#8ecfff"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  signinStyle: {
    backgroundColor: "black",
    height: 50,
    width: "90%",
    marginTop: "10%",
    alignSelf: "center",
  },
  inputStyle: {
    backgroundColor: "grey",
    flex: 1,
    color: "#8ecfff",
    fontSize: 25,
    textAlign: "left",
    paddingLeft: 10,
    borderRadius: 5,
    borderBottomWidth: 4,
    borderBottomColor: "#8ecfff",
  },
});

export default AuthForm;
