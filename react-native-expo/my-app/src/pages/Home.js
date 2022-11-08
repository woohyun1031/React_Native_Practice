import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  styledText: {
    fontSize: 30,
    marginBottom: 10,
  },
});

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.styledText}>Home</Text>
      <TouchableOpacity onPress={() => navigation.navigate("List")}>
        <Text>go to the list screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
