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

  handleUserPicks = event => {
    // Obtain character id and name
      // console.log('Name:', event.target.getAttribute('name'));
      // console.log('ID:', cardId)
    const name = event.target.getAttribute('name').value;
    this.checkPick(name, this.setScore)
    this.shuffleCards()

    // Check if picked
    // (!picked) push to userPicks, increase score by 1

    // Shuffle character cards
  }

  checkPick = (name, next) => {
    const newState = { ...this.state }; // Allows us to keep track of our previous game state. And update the values at the same time when setting this.state to newState.
    if (newState.userPicks.includes(name)) {
      newState.message = `You've already guessed The ${name}! Too bad.`;
      newState.userPicks = []; // Resets to empty array for game restart.
      this.setState(this.state = newState);
    } else { // On succesful guess...
      newState.userPicks.push(name);
      newState.message = `You've picked The ${name}! Good job!`;
      this.setState(this.state = newState)
      console.log(this.state)
    }
    next(newState, this.message)
  }

  setScore = (newState, next) => {
    if (newState.userPicks.length > newState.hiScore) {
      newState.hiScore ++;
      this.setState(this.state = newState)
    }
    next(newState)
  }

  shuffleArray = (array) => { // Assigns random index to established array.
    let j;
    let temp;
    let i;
    for (i = array.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  shuffleCards = () => {
    this.setState(this.setState.characters = this.shuffleArray(this.state.characters)) //Sets character state to shuffled array.
  }

  winConditionMet = (newState) => {
    if (newState.userPicks.length === this.characters.length) {
      newState.message = 'You win!';
      newState.userPicks = [];
      this.setState(this.state = newState)
    }
  }

  render() {
    return (
      <div>
        <InfoHeader 
        message={this.state.message}
        hiScore={this.state.hiScore}
        score={this.state.userPicks.length} />

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
                  handleUserPicks={this.handleUserPicks}
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
