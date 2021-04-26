import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, FlatList, Alert } from "react-native";
import { firebase } from '../../firebase/config';
import AthleteBar from "../components/AthleteBar";
import PlottingView from '../components/PlottingView';
import Spacer from '../components/Spacer';
import AthleteSearchBar from '../components/AthleteSearchBar';



const TeamDataScreen = ({navigation}) => {
  const user = firebase.auth().currentUser;
  const teamRef = firebase.firestore().collection('teams');
  const [athletes, setAthletes] = useState([]);
  const [searchTerm, setSearchTerm ] = useState('');
  var coachId;
  const athleteData = (item) => {
    var userForCompoment;
    teamRef.doc(coachId).collection("athletes").doc(item)
    .get()
    .then((firestoreDocument) => {
      if (!firestoreDocument.exists) {
        Alert.alert("User does not exist anymore.");
        return;
      }
      console.log(firestoreDocument.data())
      console.log(userForCompoment)
      return userForCompoment
    }).catch((error) => {
      Alert.alert(error)
    })
  }

  const findAthletes = () => {
    teamRef.where("mainCoachID", "==", user.uid)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        coachId = doc.id
        teamRef.doc(doc.id).collection("athletes").get()
        .then((query) => {
          query.forEach((athleteDoc) => {
            setAthletes([...athletes, athleteDoc.id])
          })
        }).catch((error) => {
          console.log("here")
          Alert.alert(error);
        })
      })

    }).catch((error) => {
      console.log("here2")
      Alert.alert(error);
    })
  }
  useEffect(findAthletes,[])

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
        data = {athletes}
        renderItem = {({ item }) => {
          const athleteItem = athleteData(item);
          //console.log(athleteItem)
          return (
              <AthleteBar item = {athleteItem}/>
          )
          
        }}
        keyExtractor = {(item) => item }
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
