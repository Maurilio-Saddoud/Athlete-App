import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { firebase } from '../../firebase/config';
import AthleteBar from "../components/AthleteBar";
import PlottingView from '../components/PlottingView';
import Spacer from '../components/Spacer'


const TeamDataScreen = ({navigation}) => {
  const user = firebase.auth().currentUser;
  const teamRef = firebase.firestore().collection('teams');
  const [athletes, setAthletes] = useState([]);

  const athleteData = (item) => {
    var userForCompoment;
    teamRef.doc("7TCfCUVylFHGyteHQcbn").collection("athletes").doc(item)
    .get()
    .then((firestoreDocument) => {
      if (!firestoreDocument.exists) {
        Alert.alert("User does not exist anymore.");
        return;
      }
      userForCompoment = firestoreDocument.data()
      return userForCompoment
    }).catch((error) => {
      alert(error)
    })
  }

  const findAthletes = () => {
    teamRef.where("mainCoachID", "==", user.uid)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        teamRef.doc(doc.id).collection("athletes").get()
        .then((query) => {
          query.forEach((athleteDoc) => {
            setAthletes([...athletes, athleteDoc.id])
          })
        }).catch((error) => {
          console.log("here")
          alert(error);
        })
      })

    }).catch((error) => {
      console.log("here2")
      alert(error);
    })
  }
  useEffect(findAthletes,[])

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Team Data Screen</Text>
      <Text style = {styles.nameStyle}>Hello {user.displayName} !</Text>
      <PlottingView />
      <Spacer space = {10}/>
      <View style = {styles.lineStyle}/>
      <Spacer space = {10}/>
      <View style = {styles.containerStyle}>
        <FlatList style = {styles.flatListStyle}
        data = {athletes}
        renderItem = {({ item }) => {
          const athleteItem = athleteData(item);
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
