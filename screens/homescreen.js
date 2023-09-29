import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Image
            source={require("../assets/hoppipDEMO.png")}
            style={styles.titleImage}
          />
          <Text style={styles.titleText}>PokeBagulho</Text>
        </View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            this.props.navigation.navigate("Pokedex");
          }}
        >
          <Image
            style={styles.titleImage}
            source={require("../assets/pokeball.png")}
          />
          <Text style={styles.buttonText}>Pokedex</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            this.props.navigation.navigate("Team Creator");
          }}
        >
          <Image
            style={styles.titleImage}
            source={require("../assets/greatball.png")}
          />
          <Text style={styles.buttonText}>Team Creator</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            this.props.navigation.navigate("who is that pokemon");
          }}
        >
          <Image
            style={styles.titleImage}
            source={require("../assets/ultraball.png")}
          />
          <Text style={styles.buttonText}>Quem é esse pokémon?</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFCB08",
    flex: 1,
  },
  titleContainer: {
    flex: 0.12,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    //border: "solid black",
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  buttonContainer: {
    marginTop: 40,
    flex: 0.25,
    width: 320,
    backgroundColor: "white",
    flexDirection: "colums",
    justifyContent: "space-evenly",
    alignItems: "center",
    //border: "solid black",
    borderRadius: 20,
    alignSelf: "center",
  },
  titleImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    //border: "solid black",
  },
  titleText: {
    fontSize: 50,
    fontFamily: "fantasy",
    //border: "solid black"
  },
  buttonText: {
    fontSize: 30,
    fontFamily: "fantasy",
    //border: "solid black"
  },
});
