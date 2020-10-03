import * as React from "react";
import { TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";
function donate({ navigation }) {
  return (
    <View
      style={{ flex: 1, justifyContent: "center", backgroundColor: "#3f4441" }}
    >
      <Text style={styles.textfont}>Choose A Payment Method</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("GC");
        }}
      >
        <Text style={styles.textfont2}>GCash</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("MC");
        }}
      >
        <Text style={styles.textfont2}>MasterCard</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  textfont: {
    fontSize: 24,
    textAlign: "center",
    margin: 20,
    letterSpacing: 2,
    color: "#FFF",
  },
  textfont2: {
    fontSize: 24,
    textAlign: "center",
    margin: 20,
    letterSpacing: 10,
    color: "#fbf0f0",
  },
  image: {
    marginTop: 30,
    height: "15%",
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    margin: 20,
    alignItems: "center",
    backgroundColor: "#7c7575",
    borderRadius: 100,
  },
});
export default donate;
