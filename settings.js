import * as React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
} from "react-native";
settings = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={styles.image}
        resizeMode="cover"
        source={require("../assets/bg.jpg")}
      >
        <View
          style={{
            flex: 0.1,
            margin: 30,
            marginTop: 250,
          }}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.popToTop();
            }}
          >
            <Text style={styles.textfont}>Logout</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 0.1,
            margin: 30,
            marginTop: 10,
          }}
        >
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textfont}>Dark Mode (NIY)</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Donate")}
          >
            <Text style={styles.textfont}>Donate</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  textfont: {
    fontSize: 28,
    textAlign: "center",
    margin: 10,
    letterSpacing: 10,
    color: "#0f4c75",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    borderRadius: 100,
    marginBottom: 10,
  },
  textfont2: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 30,
    letterSpacing: 5,
    color: "#0f4c75",
  },
  buttonstyle: {
    textAlign: "center",
    marginTop: 50,
    letterSpacing: 2,
    borderRadius: 50,
  },
});
export default settings;
