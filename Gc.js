import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
Gc = () => {
  return (
    <View
      style={{ flex: 1, justifyContent: "center", backgroundColor: "#c9d6df" }}
    >
      <Text style={styles.textfont}>GCash Number:</Text>
      <Text style={styles.textfont}>09123456789</Text>
      <Text style={styles.textfont2}>Thank You Very Much!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textfont: {
    fontSize: 34,
    textAlign: "center",
    margin: 20,
    letterSpacing: 2,
    color: "#393232",
  },
  textfont2: {
    fontSize: 42,
    textAlign: "center",
    marginTop: 20,
    letterSpacing: 2,
  },
});
export default Gc;
