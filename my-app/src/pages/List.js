import React from "react";
import { StyleSheet, Button } from "react-native";

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

const List = () => {
  const _onPress = (item) => {};

  return (
    <View style={styles.container}>
      <Text style={styles.styledText}>List</Text>
      {items.map((item) => (
        <Button
          key={item.id}
          title={item.name}
          onPress={() => _onPress(item)}
        />
      ))}
    </View>
  );
};

export default List;
