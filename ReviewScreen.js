import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  TouchableHighlight,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

ReviewScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const [rating, setRating] = useState(0);
  const [inputdata, setInput] = useState(route.params);
  const [textinput, settextinput] = useState("");
  const [checker, setchecker] = useState(false);

  let starArray = [];

  updateInput = () => {
    if (!route.params.check) {
      setInput((prevState) => {
        return {
          ...prevState,
          reviewlist: [...prevState.reviewlist, textinput],
        };
      });

      setInput((prevState) => {
        return { ...prevState, rating: [...prevState.rating, rating] };
      });

      setInput((prevState) => {
        return { ...prevState, check: true };
      });
    } else {
      setInput((prevState) => {
        {
          let tempArray = [];
          tempArray = [...prevState.reviewlist];
          tempArray[2] = textinput;
          return {
            ...prevState,
            reviewlist: tempArray,
          };
        }
      });

      setInput((prevState) => {
        let tempArray = [];
        tempArray = [...prevState.rating];
        tempArray[2] = rating;
        return { ...prevState, rating: tempArray };
      });
    }
  };

  const updateData = () => {
    if (checker === false) {
      updateInput();
      setchecker(true);
      alert("Press again to navigate");
    } else {
      navigation.navigate("AppView", inputdata);

      setchecker(false);
    }
  };

  rate = (star) => setRating((ratings) => (ratings = star));

  for (let i = 1; i <= 5; i++) {
    starArray.push(
      <TouchableHighlight key={i} onPress={() => rate(i)}>
        <Stars filled={i <= rating ? true : false} />
      </TouchableHighlight>
    );
  }

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontSize: 24, color: "#FFF" }}>Rating: </Text>
        {starArray}
      </View>

      <TextInput
        multiline
        style={styles.textstyle}
        onChangeText={(val) => settextinput(val)}
      ></TextInput>

      <Button
        style={{ padding: 20 }}
        title="Submit Review"
        onPress={updateData}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#797a7e",
    padding: 10,
    justifyContent: "space-between",
  },

  textstyle: {
    borderWidth: 1,
    height: 500,
    borderColor: "#FFF",
    fontSize: 24,
    color: "white",
  },
});

class Stars extends React.Component {
  render() {
    return (
      <FontAwesome
        name={this.props.filled === true ? "star" : "star-o"}
        color="#bbe1fa"
        size={32}
        style={{ marginHorizontal: 6 }}
      />
    );
  }
}

export default ReviewScreen;
