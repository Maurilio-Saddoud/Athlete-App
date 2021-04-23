import React, {useState, useEffect} from "react";
import { View, StyleSheet, Text, TouchableOpacity, FlatList} from "react-native";
import CoachQuestionsInput from "../components/CoachQuestionsInput";
import  { firebase } from "../../firebase/config";
import { Keyboard } from "react-native";
import { AntDesign } from '@expo/vector-icons';

const CoachQScreen = (props) => {
  //Creating a variable term to track state of the search bar
  const [questionText, setQuestionText] = useState('')
  const [questionsDatabase, setQuestionsDatabase] = useState([])

  const [currentTeamId, setTeamId] = useState('')
  
  //const teamRef = firebase.firestore().collection('users').doc(userId)
  
  //console.log("asdfsdfg;sdjfgjkasfd")

  const questionRef = firebase.firestore().collection('teams').doc("TIjC9ygzB3IuUKljylZ6").collection('questions')
  //questionRef BELOW??????????
  //USE MULTIPS USEEFFECTS????

  //.collection('teams').doc(teamID).
  //const userID = props.extraData.id //NOT sure about this
  // WILL NEED TO PASS IN THE USER FROM THE APP.JS FILE
  // look at the first firebase tutorial we did

  useEffect(() => {
    const userId = firebase.auth().currentUser.uid;
    //Getting the teamId of the current user NOT SURE if we want this in a hook or not
    firebase.firestore().collection('users').doc(userId).get().then((doc) => {
      if (doc.exists) {
        setTeamId(doc.data().teamId);
        console.log(currentTeamId)
        console.log("asdf")
        
      } 
      }).catch((error) => {
      console.log("Error getting document:", error);
      })

    //const questionRef = firebase.firestore().collection('teams').doc("TIjC9ygzB3IuUKljylZ6").collection('questions')
    console.log("asdfasfd")
    questionRef
          //.where("authorID", "==", userID)
          
          .orderBy('createdAt', 'desc')
          .onSnapshot(
              querySnapshot => {
                console.log("rrrrrrrrrr")
                  const newQuestions = []
                  querySnapshot.forEach(doc => {
                      const question = doc.data()
                      question.id = doc.id
                      newQuestions.push(question)
                  });
                  setQuestionsDatabase(newQuestions)
              },
              error => {
                  console.log(error)
              }
          )
  }, [])

  const onQuestionAddPress = () => {
    if (questionText && questionText.length > 0) {
      const timestamp = firebase.firestore.FieldValue.serverTimestamp();
      const data = {
        question: questionText,
        //authorID: userID,
        createdAt: timestamp,
      };
      questionRef
        .add(data)
        .then(_doc => {
          setQuestionText('')
          Keyboard.dismiss()
        })
        .catch((error) => {
          alert(error)
        })
    }
  }
      

  const onDeletePress = (id) => {
    questionRef.doc(id).delete().then(() => {
      //console.log("Document successfully deleted!");
    }).catch((error) => {
      //console.error("Error removing document: ", error);
    });
    //console.log(id)
  }


  const renderQuestion = ({item, index}) => {
    //console.log("Question" + item.question + "...")
    const id = item.id
    //console.log(id)
    return (
        <View style={styles.questionContainer}>
            <Text style={styles.textStyle}>
                {index}. {item.question}
                
            </Text>
            <TouchableOpacity
              onPress={() => onDeletePress(id)} //WHy this running on start of application????????
              //NOT GETTING THE RIGHT ID VARIABLE
            > 
              <AntDesign name="delete" size={24} color="red" />
            </TouchableOpacity>
            

            
        </View>
    )
  }

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.titleTextStyle}>Team Questions</Text>
      <CoachQuestionsInput text="Enter a question..." term={questionText} onTermChange={setQuestionText} />
      
      <TouchableOpacity
        onPress={onQuestionAddPress}
        style={styles.buttonStyle}
        activeOpacity={0.7}
        >
        <Text style={styles.textStyle}> Add Question </Text>
      </TouchableOpacity>

      <Text style={styles.titleTextStyle2} >Current Questions</Text>
      { questionsDatabase && (
                <View style={styles.listContainer}>
                    <FlatList
                        data={questionsDatabase}
                        keyExtractor={(item) => item.id}
                        renderItem={renderQuestion}
                        removeClippedSubviews={true}
                    />
                 </View>
      )}
    </View>
    //SINGLE QUESTION ENTERING BOX WITH CURRENT QUESTIONS LISTED BELOW
    //Need to add question to firebase on submit
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    paddingTop: 20,
    paddingHorizontal:10,
    backgroundColor: "black",
    flex: 1,
  },
  buttonStyle: {
    height: 40,
    width: 175,
    borderColor: "#8ecfff",
    marginBottom: 30,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5
  },
  textStyle: {
    fontWeight: "bold",
    color: "#8ecfff",
    fontSize: 15,
    fontFamily: "goodTimes",
  },
  titleTextStyle: {
    fontWeight: "bold",
    color: "#8ecfff",
    fontSize: 30,
    fontFamily: "goodTimes"
  },
  titleTextStyle2: {
    fontWeight: "bold",
    color: "#8ecfff",
    fontSize: 25,
    fontFamily: "goodTimes"
  },
  listContainer: {
    padding: 10,
},
  questionContainer: {
  marginTop: 16,
  borderBottomColor: '#cccccc',
  borderBottomWidth: 1,
  paddingBottom: 16,
  flexDirection: 'row',
  justifyContent: 'space-between'
},
});

export default CoachQScreen;
