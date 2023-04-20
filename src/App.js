// import { Component } from "react";
// import logo from './logo.svg';
import { useState, useEffect } from "react";
import './App.css';
import './Components/card_list/card-list.component'
import CardList from "./Components/card_list/card-list.component";
import SearchBox from "./Components/search_box/search-box.component";

const App = () => {
  
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  // console.log('render');

  useEffect(() => {
    console.log('effect fired..!');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => (response.json()))
    .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter(
    (monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters); 
    console.log('fx don fire..!');
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchStr = event.target.value.toLowerCase();
    return setSearchField(searchStr);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p></p>
        <h1>Monsters Rolodex..!</h1>

        {/* <input type="search" placeholder="Search Monsters" onChange={onSearchChange}></input> */}

        <SearchBox onChangeHandler={onSearchChange} className='monsters-search-box' placeholder='Search Monsters'/>
        <CardList monsters={filteredMonsters}/>
      </header>
    </div>
  );

}

// class App extends Component {

//   constructor() {
//     super();
 
//     this.state = {
//       searchField: '',
//       monsters: []
//     }
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => (response.json()))
//     .then((users) => {
//       this.setState(
//         () => {
//           return { monsters: users };
//         },
//         () => {
//           console.log(this.state)
//         }
//       )
//     });
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase();
//     this.setState(() => {
//       return { searchField }
//     });
//   }

//   render() {

//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter(
//     (monster) => {
//       return monster.name.toLowerCase().includes(searchField);
//     });
              
//     return (
//       <div className="App">
//         <header className="App-header">
//           <p>Somethin Here..!</p>

//           {/* <input type="search" placeholder="Search Monsters" onChange={onSearchChange}></input> */}

//           <SearchBox onChangeHandler={onSearchChange} className='monsters-search-box' placeholder='Search Monsters'/>
//           <CardList monsters={filteredMonsters}/>
//         </header>
//       </div>
//     );
//   }
// }

export default App;
