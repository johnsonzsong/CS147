import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, TouchableOpacity, FlatList, ActivityIndicator, Keyboard, Linking } from 'react-native';
import { Images, Colors, Metrics } from '../Themes'
import { FontAwesome, Feather } from '@expo/vector-icons';
import { material } from 'react-native-typography';
import APIRequest from '../Config/APIRequest';
import ArticleScreen from './ArticleScreen';
import AppNavigation from '../Navigation/AppNavigation';

export default class SearchScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      header: null
    }
  };

  state = {
    loading: true,
    articles : [],
    searchText: '',
    category: ''
  }

  componentDidMount() {
    this.loadArticles();
  }

  async loadArticles(searchTerm = '', category = '') {
    this.setState({articles:[], loading: true});
    var resultArticles = [];
    if (category === '') {
      resultArticles = await APIRequest.requestSearchPosts(searchTerm);
    } else {
      resultArticles = await APIRequest.requestCategoryPosts(category);
    }
    console.log(resultArticles);
    this.setState({loading: false, articles: resultArticles});
  }

  getArticleContent = () => {
    const {articles, loading} = this.state;

    let contentDisplayed = null;

    if (loading) {
      contentDisplayed =
        <ActivityIndicator
          style = {styles.activityIndicator}
          size="large"
          color="black"
        />;
    } else {
      contentDisplayed =
        <FlatList
          data={this.state.articles}
          keyExtractor={ (item, index) => item.title }
          renderItem={({item}) =>
            {
              return (
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('ArticleScreen', { content: item}) }}>
                  <View style={styles.article}>
                    <Text style={material.title}>{item.title}</Text>
                    <Text style={material.body1}>{item.snippet}</Text>
                    <Text style={material.body2}>{item.byline}</Text>
                    <Text style={material.caption}>{item.date}</Text>
                  </View>
                </TouchableOpacity>
              )
            }
          }
        />;
    }

    return (
      <View style={styles.news}>
        {contentDisplayed}
      </View>
    )
  }

  render() {
    const {articles, loading} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        {/*LOGO*/}
        <Image style={styles.logo} source={Images.logo} />

        {/*SEARCH*/}
        <View style={styles.searchBar}>
          <TextInput
            style={styles.textInput}
            placeholder='Search for News'
            onChangeText={(text) => this.setState({text})}
            onSubmitEditing={() =>
              {
                this.loadArticles(this.state.text)
                Keyboard.dismiss()
                this.setState({text: ''})
              }
            }
            value={this.state.text}
          />

          <Feather
            style={styles.icon}
            name="search"
            size={Metrics.icons.small}
            onPress={() =>
              {
                this.loadArticles(this.state.text)
                Keyboard.dismiss()
                this.setState({text: ''})
              }
            }
          />
        </View>

        {this.getArticleContent()}

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    resizeMode: 'contain',
    width: 0.9*Metrics.screenWidth,
    height: 0.1 * Metrics.screenHeight,
  },
  searchBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    width: 0.9*Metrics.screenWidth,
    height: 60,
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  icon: {
    paddingRight: 20
  },
  textInput: {
    paddingLeft: 20,
    backgroundColor: '#f7f7f7',
    color: 'black',
    width: '90%'
  },
  activityIndicator: {
    flex: 1
  },
  news: {
    flex: 1,
    width: 0.9*Metrics.screenWidth
  },
  article: {
    margin: 10
  }
});
