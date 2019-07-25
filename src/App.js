import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterCard from './components/CharacterCard'
import Container from './components/Container'
import Hero from './components/Hero'
import InfoHeader from './components/InfoHeader'
import Footer from './components/Footer'




class App extends Component {

  state = {
    characters: [],
    userPicks: [],
    hiScore: 0,
    message: ""
  }

  handleUserPick = event => {
    // Obtain character id and name
    // Check if picked
    // (!picked) push to userPicks, increase score by 1

    // Shuffle character cards

  }

  render() {
    return (
      <div>
        <InfoHeader />

        <Hero>
          <h1 className="display-1">
            Clicky Game
      </h1>
          <p className="lead">
            Click on each charater card only ONCE! Test your memory and see how high you can score!
         </p>
        </Hero>

        <Container>
          {/* Populate with each of the character cards */}
        </Container>

        <Footer>

        </Footer>
      </div>

    )
  }

}

export default App;
