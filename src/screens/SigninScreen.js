import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Alert
} from "react-native";
import CreateAccountButton from "../components/CreateAccountButton";
import LoginBar from "../components/LoginBar";
import LoginButton from "../components/LoginButton";
import Spacer from "../components/Spacer";

const SigninScreen = ({ navigation }) => {
  const [term, setTerm] = useState("");
  const [term2, setTerm2] = useState("");

  const onLoginPress = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid;
        const usersRef = firebase.firestore().collection("users");
        usersRef
          .doc(uid)
          .get()
          .then((firestoreDocument) => {
            if (!firestoreDocument.exists) {
              alert("User does not exist anymore.");
              return;
            }
            const user = firestoreDocument.data();
            navigation.navigate("AthleteQ");
          })
          .catch((error) => {
            Alert.alert(error);
          });
      })
      .catch((error) => {
        Alert.alert(error);
      });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.viewStyle}>
        <Spacer space={40} />
        <Text style={styles.kumoStyle}>KUMO</Text>
        <View style={styles.underlineStyle} />
        <Text style={styles.metricStyle}>Metrics</Text>
        <Spacer space={30} />
        <LoginBar
          text={"Email"}
          term={term}
          onTermChange={(newTerm) => setTerm(newTerm)}
          secure={false}
        />
        <LoginBar
          text={"Password"}
          term={term2}
          onTermChange={(newTerm2) => setTerm2(newTerm2)}
          secure={true}
        />
        <Spacer space={75} />
        <TouchableOpacity onPress={() => onLoginPress}>
          <Text style={styles.textStyle}>Login</Text>
        </TouchableOpacity>
        <Spacer space={10} />
        <CreateAccountButton />
      </View>
    </TouchableWithoutFeedback>
  );
};

SigninScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  viewStyle: {
    alignItems: "center",
    backgroundColor: "black",
    flex: 1,
  },
  kumoStyle: {
    fontSize: 70,
    fontWeight: "bold",
    color: "#8ecfff",
    marginTop: 150,
    fontFamily: "abnes",
  },
  metricStyle: {
    fontSize: 30,
    color: "#707070",
    bottom: 20,
    marginLeft: 100,
    fontWeight: "bold",
    fontFamily: "abnes",
    padding: 10,
  },
  login: {
    alignSelf: "flex-start",
    left: 50,
  },
  textStyle: {
    color: "#8ecfff",
    fontSize: 40,
    marginTop: 20,
    fontFamily: "goodTimes"
  },
});

export default SigninScreen;
