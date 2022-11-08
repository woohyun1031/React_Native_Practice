import React from "react";
import { StyleSheet, View, Text } from "react-native";

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

const Item = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.styledText}>Is Item</Text>
    </View>
  );
};

export default Item;
