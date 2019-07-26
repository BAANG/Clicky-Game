import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterCard from './components/CharacterCard'
import Container from './components/Container'
import Hero from './components/Hero'
import InfoHeader from './components/InfoHeader'
import Footer from './components/Footer'
import characters from './characters.json'




class App extends Component {

  state = {
    characters: characters,
    userPicks: [],
    hiScore: 0,
    message: "",
    content: []
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
          <h1 className="display-1 text-center">
            Final Fantasy Memory Game
      </h1>
          <p className="lead text-center">
            Click on each character card only ONCE! Test your memory and see how high you can score!
         </p>
        </Hero>

        <Container>
          <div className='row'>
            {this.state.characters.map((card) => {
              return (
                <CharacterCard
                  id={card.id}
                  name={card.name}
                  image={card.image}
                  description={card.description}
                  onClick={this.handleUserPick}
                />
              )
            })}
          </div>

          {/* <div className='row'>
            {this.state.characters.map(card => {
              return (
                <CharacterCard
                  id={card.id}
                  name={card.name}
                  image={card.image}
                  description={card.description}
                  onClick={this.handleUserPick}
                />
              )
            })}
          </div> */}
        </Container>

        <Footer>

        </Footer>
      </div>

    )
  }

}

export default App;
