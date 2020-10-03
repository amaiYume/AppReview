import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Button,
  Linking,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

export default AppView = ({ apps1, update }) => {
  let route = useRoute();
  let navigation = useNavigation();

  const [trating, setTrating] = useState(0);

  useEffect(() => {
    calculate();
    for (let i = 0; i < apps1.length; i++) {
      if (route.params.id === i.toString()) {
        update(route.params, i - 1);
      }
    }
  }, [route.params]);

  const calculate = () => {
    route.params.rating.map((number) => {
      setTrating((prevState) => prevState + number);
    });

    setTrating((prevState) =>
      parseFloat(prevState / route.params.rating.length, 1)
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.appcomponent}>
        <Image
          style={styles.imageprop}
          source={{
            uri: route.params.uri,
          }}
        />
        <View style={styles.appcomponent2}>
          <Text style={styles.texttitle}>{route.params.name}</Text>
          <Text style={styles.textrating}>Rating: {trating} </Text>
        </View>
      </View>

      <View style={styles.viewLabel}>
        <Text
          style={
            (styles.textLabel,
            {
              margin: 10,
              fontSize: 20,
              borderBottomWidth: 2,
              borderColor: "#596e79",
            })
          }
        >
          Description
        </Text>

        <ScrollView style={styles.scrollstyle}>
          <Text style={{ textAlign: "justify", margin: 5 }}>
            Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
            Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
            Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
            Arem Arem Arem Arem Arem Arem Arem Arem Arem Arem Arem Arem Arem
            Arem Arem Arem Arem Arem Arem Arem Arem Arem Arem Arem Arem Arem
            Arem Arem Arem Arem Arem Arem Arem Arem Arem Arem Arem Arem Arem
            asdasd Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
            Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
            Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
            Lorem Arem Arem Arem Arem Arem Arem Arem Arem Arem Arem Arem Arem
            Arem Arem Arem Arem Arem Arem Arem Arem Arem Arem Arem Arem Arem
            Arem Arem Arem Arem Arem Arem Arem Arem Arem Arem Arem Arem Arem
            Arem asdasd
          </Text>
        </ScrollView>
      </View>

      <View style={styles.viewLabel}>
        <Text style={styles.textLabel}>Review</Text>

        <ScrollView style={styles.scrollstyle}>
          {route.params.reviewlist.map((content) => (
            <View
              key={content}
              style={{
                height: 50,
                width: "100%",
                marginBottom: 20,
                borderBottomWidth: 2,
              }}
            >
              <Text style={{ textAlign: "justify", margin: 5 }}>
                Review: {content}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <View
        style={{
          flexDirection: "row",

          justifyContent: "space-evenly",
        }}
      >
        <Button
          title="Write a Review"
          style={{
            textAlign: "center",

            letterSpacing: 2,
            borderRadius: 50,
          }}
          color="#222831"
          onPress={() => navigation.navigate("ReviewScreen", route.params)}
        />
        <Button
          title="Link to Google Play"
          style={{
            textAlign: "center",

            borderRadius: 50,
          }}
          color="#222831"
          onPress={() => Linking.openURL(route.params.link)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: "#d6e0f0",
  },
  appcomponent: {
    backgroundColor: "#204051",
    marginTop: 25,
    flexWrap: "wrap",
    flexDirection: "row",
  },

  viewLabel: {
    height: 200,
  },

  textLabel: {
    fontSize: 20,
    margin: 10,
    borderBottomWidth: 2,
    borderColor: "#596e79",
  },

  scrollstyle: {
    borderTopWidth: 1,
    borderLeftWidth: 1,

    borderRightWidth: 1,
    margin: 5,
  },
  appcomponent2: {
    backgroundColor: "#1b262c",
    flex: 1,
  },

  texttitle: {
    paddingTop: 40,
    fontSize: 40,
    textAlign: "center",
    color: "#eeecda",
    letterSpacing: 2,
  },

  textrating: {
    fontSize: 24,
    textAlign: "center",
    color: "#eeecda",
    letterSpacing: 2,
  },
  imageprop: {
    resizeMode: "center",
    height: 150,
    width: 150,
    marginTop: 5,
    flexWrap: "wrap",
  },
});
