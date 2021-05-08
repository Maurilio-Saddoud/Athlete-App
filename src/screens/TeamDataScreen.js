import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, FlatList, Alert } from "react-native";
import { firebase } from '../../firebase/config';
import AthleteBar from "../components/AthleteBar";
import PlottingView from '../components/PlottingView';
import Spacer from '../components/Spacer';
import AthleteSearchBar from '../components/AthleteSearchBar';
import AthleteRegistrationScreen from "./AthleteRegistrationScreen";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";



const TeamDataScreen = ({navigation}) => {
  const user = firebase.auth().currentUser;
  const teamRef = firebase.firestore().collection('teams');
  const [athletes, setAthletes] = useState([]);
  const [searchTerm, setSearchTerm ] = useState('');
  const [athleteData, setathleteData] = useState([]);
  const [athleteObj, setathleteObj] = useState([]);

  const findAthletes = () => {
    teamRef.where("mainCoachID", "==", user.uid)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const newRef = teamRef.doc(doc.id).collection("athletes")
        let athletesArray = []
        let athleteDataArray = []
        newRef.get()
        .then((query) => {
          query.forEach((athleteDoc) => {
            athletesArray.push(athleteDoc.id)
            newRef.doc(athleteDoc.id).get()
            .then((document) => {
              //const docData = document.data().name
              const info = document.data()
              const docData = {
                name: info.name,
                email: info.email,
                id: info.id
              }
              athleteDataArray.push(docData)
              console.log("Yo", athleteDataArray)
            }) 
              .then(() => {
              setAthletes(athletesArray)
              //setathleteData(athleteDataArray);
              setathleteObj(athleteDataArray);
            })
            .catch((error) => {
              Alert.alert(error.message)
            })
          })
          
        }).catch((error) => {
          Alert.alert(error.message);
        })
      })
    }).catch((error) => {
      Alert.alert(error.message);
    })
  }
  useEffect(() => {
    findAthletes()
  }, [])
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Team Data Screen</Text>
      <Text style = {styles.nameStyle}>Hello {user.displayName} !</Text>
      <PlottingView />
      <Spacer space = {5}/>
      <AthleteSearchBar text = "Search" onTermChange = {setSearchTerm} term = {searchTerm}/>
      <Spacer space = {5}/>
      <View style = {styles.containerStyle}>
        <FlatList style = {styles.flatListStyle}
        data = {athleteObj}
        renderItem = {({ item }) => {
          console.log("this the new item", item)
          return <AthleteBar item = {item}/>     
        }}
        keyExtractor = {(item) => item.id }
        />
      </View>
    </View>
  );
};

TeamDataScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  textStyle: {
    marginTop: 60,
    fontSize: 32,
    color: '#8ecfff',
    fontFamily: "goodTimes"
  },
  viewStyle: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center'
  },
  nameStyle: {
    color: 'white',
    fontFamily: "goodTimes",
    fontSize: 18,
    alignSelf: 'flex-start',
    marginLeft: 15,
    marginTop: 10
  },
  containerStyle: {
    flexDirection: 'row',
    flex: 1,
    marginHorizontal: 15
  },
  flatListStyle: {
    flex: 1,
  },
  lineStyle: {
    width: 400,
    height:5,
    backgroundColor:'white'
  }
});

export default TeamDataScreen;
