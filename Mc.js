import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TextInput,
} from "react-native";
function Mc() {
  return (
    <View
      style={{ flex: 1, justifyContent: "center", backgroundColor: "#c9d6df" }}
    >
      <Text style={styles.textfont}>Card Number:</Text>
      <TextInput
        style={{
          alignSelf: "center",
          height: 40,
          width: 250,
          textAlign: "center",
          backgroundColor: "white",
          borderColor: "gray",
          borderWidth: 1,
          justifyContent: "center",
        }}
        keyboardType="numeric"
      />
      <Text style={styles.textfont}>Expiration Date:</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        <TextInput
          style={{
            height: 40,
            width: 25,
            textAlign: "center",
            backgroundColor: "white",
            borderColor: "gray",
            borderWidth: 1,
          }}
          keyboardType="numeric"
        />
        <Text style={{ fontSize: 32, color: "#393232" }}> / </Text>
        <TextInput
          style={{
            height: 40,
            width: 25,
            textAlign: "center",
            backgroundColor: "white",
            borderColor: "gray",
            borderWidth: 1,
          }}
          keyboardType="numeric"
        />
      </View>
      <Text style={styles.textfont}>Security code:</Text>
      <TextInput
        style={{
          height: 40,
          width: 50,
          textAlign: "center",
          backgroundColor: "white",
          borderColor: "gray",
          borderWidth: 1,
          alignSelf: "center",
        }}
        keyboardType="numeric"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          alert("Thank You!");
        }}
      >
        <Text style={styles.textfont}>Donate</Text>
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
    color: "#393232",
  },
  textfont2: {
    fontSize: 42,
    textAlign: "center",
    marginTop: 20,
    letterSpacing: 2,
  },
  button: {
    margin: 50,
    alignItems: "center",
    backgroundColor: "#f7fbfc",
    borderRadius: 100,
  },
});
export default Mc;
