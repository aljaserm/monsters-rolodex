import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           It's MJ and this my first React JS App
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component{
  constructor(){
    super();
    this.state={
      monsters: [ ],
      searchField: ''
    };
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
        <br /><br />
        <input type='search' placeholder='Search  Monsters' onChange={e => this.setState({searchField: e.target.value} )}/>
        <br /><br />
                <CardList monsters={filterMonsters} /> 
      </div>
            );
          }
      }

export default App;
