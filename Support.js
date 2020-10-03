import * as React from "react";
import { TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";
function Suppor({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "#dbe2ef" }}>
      <Text style={styles.textfont}>Please Consider Supporting Us.</Text>
      <Text style={styles.textfont}>
        We Accept Payment From The Payment Methods Below.
      </Text>
      <Image style={styles.image} source={require("./assets/gc.png")} />
      <Image style={styles.image} source={require("./assets/mc.png")} />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          //   navigation.navigate("donate");
        }}
      >
        <Text style={styles.textfont2}>Donate Here</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  textfont: {
    fontSize: 18,
    textAlign: "center",
    margin: 10,
    letterSpacing: 2,
    color: "black",
  },
  textfont2: {
    fontSize: 24,
    textAlign: "center",
    margin: 20,
    letterSpacing: 2,
    color: "#bbe1fa",
  },
  image: {
    marginTop: 30,
    height: "15%",
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    margin: 30,
    marginTop: 70,
    alignItems: "center",
    backgroundColor: "#1b262c",
    borderRadius: 100,
  },
});
export default Support;
