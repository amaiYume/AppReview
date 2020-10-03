import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableHighlight,
} from "react-native";
import { SearchBar } from "react-native-elements";

export default HomeScreen = ({ apps1 }) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  const navigation = useNavigation();

  const checking = (item) => {
    if (
      searchQuery === "" ||
      searchQuery.toLowerCase() ===
        item.name.toLowerCase().substring(0, searchQuery.length)
    ) {
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
    }
  };

  return (
    <View style={styles.background}>
      <SearchBar
        style={{}}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />

      <FlatList data={apps1} renderItem={({ item }) => checking(item)} />
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
