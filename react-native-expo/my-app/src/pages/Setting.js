import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

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

const items = [
  { _id: 1, name: "React Native" },
  { _id: 2, name: "React Navigation" },
  { _id: 3, name: "Eunbin" },
];

const Setting = () => {
  const _onPress = (item) => {};

  return (
    <View style={styles.container}>
      <Text style={styles.styledText}>Setting</Text>
      {items.map((item) => (
        <TouchableOpacity key={item.id} onPress={() => _onPress(item)}>
          <Text>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Setting;
