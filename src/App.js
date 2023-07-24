import React, { PureComponent } from 'react';
import './App.css';
import Header from './Dashobard/Header/Header';
import Searchbar from './Dashobard/Searchbar/Searchbar';
import Filter from './Dashobard/Emoji/Filter';
import EmojiResults from './Dashobard/Emoji/EmojiResults';

export default class App extends React.PureComponent {
  state = {
    filteredEmojis: Filter("", 20)
  };

  handleChange = (e) => {
    console.log(e);
    this.setState({ filteredEmojis: Filter(e.target.value, 20) })
  }

  render() {
    return (
      <div>
        <Header />
        <Searchbar handleChange={this.handleChange} />
        <EmojiResults emojiData={this.state.filteredEmojis} />
      </div>
    );
  }
}