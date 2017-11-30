import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      id: 1,
      pokemon: [],
      stats: []
    }
  }

  componentDidMount() {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.id}`)
         .then(res => {
           this.setState({ pokemon: res.data });
           this.setState({ stats: this.state.pokemon.stats.map(stat => stat.stat.name) });
        })
  }
  render() {
    let poke = this.state.pokemon;
    let allStats = this.state.stats.map(stat => <p>{ stat }</p>);
    console.log(this.state.stats);
    return (
      <div className="App">
        {
          this.state.pokemon.length === 0 ?
            <h1>Catching pokemon...</h1> :
            (
              <div className='pokeInfo'>
                <h1>Name: { poke.species.name }</h1>
                <p>Type: { poke.types[0].type.name }</p>
                { allStats }
              </div>
            )
        }
      </div>
    );
  }
}

export default App;
