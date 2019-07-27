import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.components'

class App extends Component{
  constructor(){
    super();
    this.state={
      monsters: [ ],
      searchField: ''
    };
    // this.handleChange= this.handleChange.bind(this);
  }

  handleChange=(e)=>{
    this.setState({searchField: e.target.value} );
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}));
  }
  render() {
    const { monsters ,searchField}  =this.state;
    const filterMonsters = monsters.filter( monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

      return(

        <div className="App">
        <h1> Monsters Rolodex</h1>
        <br /><br />
        <SearchBox 
        placeholder='Search  Monsters'
        handleChange={this.handleChange}
        />
        <br /><br />
                <CardList monsters={filterMonsters} /> 
      </div>
            );
          }
      }

export default App;
