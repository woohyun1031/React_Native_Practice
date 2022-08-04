import React from "react";
import { StyleSheet, Button, View, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  styledText: {
    fontSize: 30,
    marginBottom: 10,
  },
});

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.styledText}>Home</Text>
      <Button title="go to the list screen" />
    </View>
  );
};

export default Home;
