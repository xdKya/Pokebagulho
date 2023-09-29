import React, { Component } from "react";
import { View, StyleSheet, Text, FlatList, Image } from "react-native";
import axios from "axios";

const pokedex = require("../pokedex_kanto.json");

export default class Pokedex extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: [],
    };
  }

  // getPokemonHouse = () => {
  //   axios.get(`https://pokeapi.co/api/v2/pokemon`).then((response) => {
  //     this.setState({
  //       pokemon: response.data.json(),
  //     });
  //   });
  // };

  // componentDidMount() {
  //   this.getPokemonHouse();
  //   console.log(this.state.pokemon[25]);
  // }

  renderItem = ({ item }) => {
    console.log(item);
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.itemTitle}>#00{item.id}</Text>
        <Text style={styles.itemTitle}>{item.name}</Text>
        <Text style={styles.itemTitle}>{item.type}</Text>
      </View>
    );
  };

  keyExtractor = (item, index) => index.toString();

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
        <FlatList
          data={pokedex}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fc5391",
    flex: 1,
  },
  titleContainer: {
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

  itemContainer: {
    backgroundColor: "#E3F5D1",
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 20,
    padding: 5,
  },

  itemTitle: {
    alignSelf: "center",
    textAlign: "center",
    marginLeft: 10,
    fontFamily: "Bungee Inline",
    fontSize: 20,
    color: "green",
  },
});
