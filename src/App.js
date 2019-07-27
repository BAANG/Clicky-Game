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
  }

  handleUserPick = event => {
    // Obtain character id and name
    console.log('Name:', event.target.getAttribute('name'));
    let cardId = event.target.getAttribute('data-id')
    console.log('ID:', cardId)

    // Check if picked
    // (!picked) push to userPicks, increase score by 1

    // Shuffle character cards
  }

  checkPick = (name, next) => {
    const newState = { ...this.state }; // Allows us to keep track of our previous game state.
    if (newState.userPicks.includes(name)) {
      newState.message = `You've already guessed The ${name}! Too bad.`;
      newState.userPicks = []; // Resets to empty array for game restart.
      this.setState(this.state = newState);
    } else { // On succesful guess...
      newState.userPick.push(name);
      newState.message = `You've picked The ${name}! Good job!`;
      this.setState(this.state = newState)
    }
    next(newState, this.message)
  }

  shuffleArray = (array) => { // Assigns random index to established array.
    let j;
    let temp;
    let i;
    for (i = array.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = a[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  shuffleCards = () => {
    this.setState(this.setState.characters = this.shuffleArray(this.state.characters)) //Sets character state to shuffled array.
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
                  handleUserPick={this.handleUserPick}
                />
              )
            })}
          </div>
        </Container>

        <Footer>

        </Footer>
      </div>

    )
  }

}

export default App;
