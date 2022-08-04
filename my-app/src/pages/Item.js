import React from "react";
import { StyleSheet } from "react-native";

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

const Item = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.styledText}>Item</Text>
    </View>
  );
};

export default Item;
