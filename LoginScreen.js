import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

export default LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome</Text>
      <Image
        style={{ marginTop: -150 }}
        source={require("../assets/design2.5.png")}
      />
      <Text style={styles.welcome2}>UniApp</Text>
      <Text style={styles.textfont2}>The New AppiCenter</Text>
      <Text style={styles.textfont}>An App for Apps.</Text>
      <Text style={styles.textfont2}>
        Discover Different Apps That Suit You.
      </Text>
      <Button
        style={styles.buttonstyle}
        title="Get Started"
        color="#3b6978"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e4e3e3",
    alignItems: "center",
    justifyContent: "center",
  },
  welcome: {
    fontSize: 50,
    textAlign: "center",
    letterSpacing: 15,
    color: "#0f4c75",
  },
  welcome2: {
    fontSize: 25,
    textAlign: "center",
    letterSpacing: 15,
    color: "#0f4c75",
    marginTop: 20,
  },
  textfont: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 30,
    letterSpacing: 2,
    color: "#0f4c75",
  },
  textfont2: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 30,
    letterSpacing: 2,
    color: "#0f4c75",
  },
  buttonstyle: {
    textAlign: "center",
    marginTop: 50,
    letterSpacing: 2,
    borderRadius: 50,
  },
});
