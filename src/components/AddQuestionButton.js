import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";


const AddQuestionButton = () => {
  return (
    <TouchableOpacity
      //sonPress={() => navigation.navigate(navigateto)}
      style={styles.buttonStyle}
      activeOpacity={0.7}
    >
      <Text style={styles.textStyle}> Add Question </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  
});

export default AddQuestionButton;