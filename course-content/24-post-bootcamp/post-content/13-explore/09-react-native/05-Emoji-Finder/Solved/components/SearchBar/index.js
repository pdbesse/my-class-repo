import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Searchbar, Provider, Portal, Modal, Button, Text } from "react-native-paper";
import { ListItem } from "react-native-elements";
import Loading from "../Loading";
import API from "../../utils/API";

class SearchBar extends Component {
  state = {
    searchValue: "",
    emojis: [],
    hasFetched: false,
    filteredSearch: [],
    visible: false
  }

  componentDidMount = () => {
    this.getAllEmojis();
  }

  getAllEmojis = () => {
    API.getEmoji().then(results => {
      console.log(results.data);
      this.setState({
        emojis: results.data,
        hasFetched: true
      });
    })
  }

  onChangeSearch = value => {
    this.setState({
      searchValue: value
    });
    this.search();
  }

  search = () => {
    const filteredArray = this.state.emojis.filter(emoji => {
      return emoji.slug.includes(this.state.searchValue);
    });
    this.setState({
      filteredSearch: filteredArray
    });
  }

  showModal = () => {
    this.setState({
      visible: true
    });
  }

  hideModal = () => {
    this.setState({
      visible: false
    });
  }

  render() {
    return (
      <View>
        <Searchbar
          placeholder="Search"
          onChangeText={this.onChangeSearch}
          value={this.state.searchValue}
        />
        {this.state.hasFetched ?
          <>
            {
              this.state.filteredSearch.length === 0 ?
                <>
                  {this.state.emojis.map((icon, index) => (
                    <ListItem key={index} bottomDivider
                      onPress={this.showModal}>
                      <ListItem.Content>
                        <ListItem.Title>
                          {icon.character}{" "}{icon.unicodeName}
                        </ListItem.Title>
                      </ListItem.Content>
                    </ListItem>
                  ))}
                </>
                :
                <>
                  {this.state.filteredSearch.map((icon, index) => (
                    <ListItem key={index} bottomDivider
                      onPress={this.showModal}>
                      <ListItem.Content>
                        <ListItem.Title>
                          {icon.character}{" "}{icon.unicodeName}
                        </ListItem.Title>
                      </ListItem.Content>
                    </ListItem>
                  ))}
                </>
            }
          </>
          :
          <Loading />
        }
        <Provider>
          <Portal>
            <Modal visible={this.state.visible} onDismiss={this.hideModal}
             contentContainerStyle={styles.containerStyle}
            >
              <Text>Example Modal.  Click outside this area to dismiss.</Text>
            </Modal>
          </Portal>
        </Provider>
      </View>
    )
  }
}

export default SearchBar;

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'white',
    padding: 20,
  }
});