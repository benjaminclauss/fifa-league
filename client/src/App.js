import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      loading: true,
      teams: []
    };
  }
  
  componentDidMount = () => {
    fetch("/teams")
      .then(response => response.json())
      .then(data => this.setState({loading: false, teams: data}));
  }

  renderTeams = () => this.state.teams.map((team) => (
    <li>{team.name}</li>
  ));

  render = () => (
    <div className="App">
      <header className="App-header">
        {this.state.loading && <p>Loading...</p>}
        <ul>{this.renderTeams()}</ul>
      </header>
    </div>
  );
}

export default App;
