import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableHighlight,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default LibraryScreen = ({ apps1, up }) => {
  let navigation = useNavigation();

  checkFunction = (item) => {
    if (item.check) {
      return (
        <View style={styles.viewtext}>
          <TouchableHighlight
            onPress={() => navigation.navigate("AppView", item)}
          >
            <Text style={styles.flattext}>
              <Image source={{ uri: item.uri }} style={styles.imageprop} />{" "}
              {item.name}
            </Text>
          </TouchableHighlight>
        </View>
      );
    } else {
    }
  };

  return (
    <View style={styles.background}>
      <View style={{ width: "100%", flexDirection: "column" }}>
        <Button
          title="Refresh"
          style={{ backgroundColor: "#596e79" }}
          onPress={() => navigation.navigate("Library")}
        />
      </View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={apps1}
        renderItem={({ item }) => checkFunction(item)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#1b262c",

    paddingBottom: 10,
    paddingLeft: 2,
    paddingRight: 2,
  },

  viewtext: {
    backgroundColor: "#596e79",
    paddingBottom: 10,
    borderWidth: 1,
  },
  flattext: {
    color: "#FFFFFF",
    fontSize: 25,
    marginLeft: 5,
    paddingBottom: 10,
  },

  imageprop: {
    height: 50,
    width: 50,
    resizeMode: "center",
    borderWidth: 2,
  },
});
