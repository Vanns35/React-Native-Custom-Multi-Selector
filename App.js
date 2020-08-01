import React, { Component } from 'react';
import { Text, View, StyleSheet, Modal, CheckBox, TouchableOpacity, ScrollView, Dimensions, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// import Ionicons from 'react-native-vector-icons/Ionicons';

const BannerWidth = Dimensions.get('window').width - 20;

class MultiSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SelectedPokemon: [],
      SavedPokemon: [],
      MultiSelectPopup: false,
      PokemonList : [{
          id: '1',
          Choose: false,
          Name: 'Pikachu',
          Avatar: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'
        }, {
          id: '2',
          Choose: false,
          Name: 'Charmander',
          Avatar: 'https://cdn.bulbagarden.net/upload/7/73/004Charmander.png'
        }, {
          id: '3',
          Choose: false,
          Name: 'Bulbasaur',
          Avatar: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png'
        }, {
          id: '4',
          Choose: false,
          Name: 'Squirtle',
          Avatar: 'https://cdn.bulbagarden.net/upload/3/39/007Squirtle.png'
        }, {
          id: '5',
          Choose: false,
          Name: 'Jigglypuff',
          Avatar: 'https://cdn.bulbagarden.net/upload/3/3e/039Jigglypuff.png'
      }]
    }
  }

  selectPokemon(item) {
    if (!item.Choose) {
        const newArray = [...this.state.PokemonList];
        const replaceArray = {
            id: item.id,
            Name: item.Name,
            Avatar: item.Avatar,
            Choose: !item.Choose
        };
        newArray.splice(newArray.findIndex(ele => ele.id === item.id), 1, replaceArray);
        this.setState({ PokemonList: newArray });

        this.state.SelectedPokemon.push({
            id: item.id,
            Name: item.Name,
            Avatar: item.Avatar
        })

    } else {
        const newArray = [...this.state.PokemonList];
        const replaceArray = {
            id: item.id,
            Name: item.Name,
            Avatar: item.Avatar,
            Choose: !item.Choose
        };
        newArray.splice(newArray.findIndex(ele => ele.id === item.id), 1, replaceArray);
        this.setState({ PokemonList: newArray });

        const deleteArrayValue = [...this.state.SelectedPokemon];
        deleteArrayValue.splice(deleteArrayValue.findIndex(ele => ele === item.id), 1);
        this.setState({ SelectedPokemon: deleteArrayValue });
    }
  }

  onChoose() {
    this.setState({ 
        SavedPokemon : this.state.SelectedPokemon,
        MultiSelectPopup: false
    })
  }

  render() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <Ionicons name="md-menu" size={30} color="#fff" />
                        <Text style={styles.topHeader}>Pokemon Cards</Text>
                    <Ionicons name="md-add" size={30} color="#fff" onPress={()=> this.setState({ MultiSelectPopup : true })}/>
                </View>
                <View style={styles.selectView}/>

                { this.state.SavedPokemon.length > 0 ?
                    <View style={{ marginTop: 5 }}>
                        <Text style={styles.selectListTitle}>Your Pokemon List</Text>
                        <ScrollView>
                            <View style={styles.cardView}>
                            { this.state.SavedPokemon.map(item => (
                                <View style={styles.cardMain}>
                                    <Image
                                        style={styles.pokeImage}
                                        source={{ uri: item.Avatar }}
                                    />
                                    <Text style={styles.pokeName}>{item.Name}</Text>
                                </View>
                            ))}
                            </View>
                        </ScrollView>
                    </View> 
                    :
                    <Text style={styles.noPokemonSelected}>OOPS! You Dont Have Any Pokemon!</Text>
                }

                <Modal transparent={true} visible={this.state.MultiSelectPopup}>
                    <View style={styles.modalMain}>
                        <View style={styles.modalView}>
                            <View style={styles.modalTitleView}>
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.modalTitle}>Pokemon I Choose You</Text>
                                </View>
                                <TouchableOpacity onPress={() => this.setState({ MultiSelectPopup : false })} >
                                    <Ionicons name="md-close" size={20} color="#000" />
                                </TouchableOpacity>
                            </View>
                            {this.state.PokemonList.length > 0 ?
                                <ScrollView showsVerticalScrollIndicator={true} style={{ paddingHorizontal: 20 }}>
                                    {this.state.PokemonList.map(item => {
                                    return (
                                        <View style={{ flexDirection : 'row'}}>
                                          <CheckBox value={item.Choose} onValueChange={() => this.selectPokemon(item)} color="black"/>
                                          <Text style={
                                            {
                                              marginTop: 5,
                                              color: !item.Choose?"rgba(84, 84, 84, 1)":"black",
                                              fontWeight: item.Choose? "bold" :"normal"
                                            }}
                                            >{item.Name}</Text>
                                        </View>
                                    )})}
                                </ScrollView>
                                :
                                <Text>No Pokemon Found</Text>
                            }
                                <TouchableOpacity onPress={() => this.onChoose()} style={styles.chooseButton}>
                                    <Text style={styles.chooseText}>Choose</Text>
                                </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </ScrollView>
            <View style={styles.cardFooter}>
                <Text style={styles.footerText}>Created by vanns35.com @2020</Text>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 8
  },
  header: { 
    flexDirection : 'row', 
    justifyContent: 'space-between'
  },
  topHeader: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  noPokemonSelected: {
    color: '#fff', 
    textAlign: 'center', 
    marginTop: 20, 
    fontSize: 15, 
    fontWeight: 'bold'
  },
  selectView: {
    height: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#b2b2b2',
  },
  cardFooter: {
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    width: Dimensions.get('window').width,
  },
  footerText: {
    color: '#fff',
    padding: 10
  },
  selectListTitle: {
    color: 'white',
    marginTop: 10,
    fontSize: 15
  },
  cardView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  cardMain: {
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    width: Dimensions.get('window').width/2.2,
  },
  pokeImage: {
    width: 100,
    height: 100
  },
  pokeName: {
    color: 'white',
    marginBottom: 5,
    fontSize: 18,
    fontWeight: 'bold'
  },
  modalMain: {
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    flex: 1,
    position: 'absolute',
    left: 0, right: 0,
    top: 0, bottom: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalTitleView: {
    padding: 10,
    borderBottomWidth: 1,
    flexDirection: "row",
    borderBottomColor: "#efefef"
  },
  modalView: { 
    backgroundColor: "rgba(158, 158, 158, 1)", 
    width: BannerWidth, 
    height: 'auto', 
    maxHeight: '30%', 
    borderRadius: 10 
  },
  modalTitle: { 
    fontSize: 15, 
    color: '#000' 
  },
  chooseButton: {
    backgroundColor: "#f7ad00",
    padding: 8,
    marginTop: 10,
    marginBottom: 10, 
    marginHorizontal: 100, 
    borderRadius: 5
  },
  chooseText: {
    color: "#000", 
    textAlign: "center"
  }
});

export default MultiSelector;