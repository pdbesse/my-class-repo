import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

function App() {
  const clickMe = () => {
    alert("Hello!");
  }

  return (
    <TouchableOpacity onPress={clickMe}>
      <View style={styles.box}>
        <Text>Hello! Please click me!</Text>
      </View>
    </TouchableOpacity>
  );
}

export default App;

var styles = StyleSheet.create({
  box: {
    borderColor: "red",
    backgroundColor: "#fff",
    borderWidth: 1,
    width: 100,
    height: 100
  }
});