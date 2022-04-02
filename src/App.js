// import React, {Component } from 'react';
import {useState ,useEffect} from 'react'
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css'


//use functional component

const App = ()=>{
    const [searchField , setSearchField] = useState('')
    const [monsters , setMonsters] = useState([])
    const [filteredMonster , setFilteredMonster] = useState(monsters)
 
   //that's means it's run the fetch api only when the state of the monsters changed
    useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) =>response.json())
      .then((users) =>{ setMonsters(users) })
  
    }, [])

    useEffect(()=>{
      const newFilterMonsters = monsters.filter((m)=>{
        return m.name.toLocaleLowerCase().includes(searchField)
      })

      setFilteredMonster(newFilterMonsters)
    } , [monsters , searchField])


    const  onSearchChange = (e)=>{
    const searchFieldString = e.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString)
  }

  return(
      <div className='App'>
          <h1 className='title'>Monsters Rolodex</h1>

          <SearchBox 
            className="monster-search-box"
            onChangeHandler = {onSearchChange}  
            placeholder = 'Search Monsters'
          />

          <CardList  monsters={filteredMonster}/>
      </div>
  )
} 

//this is the class component version of the application
// class App extends Component {
//   constructor(){
//     super();

//     this.state = {
//      monsters: [],
//      searchField :""
//     }

//     console.log("constructor");
//   }

//   componentDidMount(){
//     console.log("Component did mount");
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) =>response.json())
//     .then((users) =>{this.setState(()=>{
//       return {monsters : users}
//     } , ()=>{console.log(this.state);}
//       )
//     })
//   }

//   onSearchChange = (e)=>{
//     const searchField = e.target.value.toLocaleLowerCase()
//     this.setState(()=>{
//       return {searchField}
//   })
// }

//   render() { 
//       console.log("Render");
//     //destructing the values
//       const {monsters , searchField} =this.state
//       const {onSearchChange}   = this
  
//       const filteredMonster = monsters.filter((m)=>{
//       return m.name.toLocaleLowerCase().includes(searchField)
//     })

//     return (
//       <div className='App'>
//         <h1 className='title'>Monsters Rolodex</h1>

//         <SearchBox 
//           className="monster-search-box"
//           onChangeHandler = {onSearchChange}
//           placeholder = 'Search Monsters'
//          />

//         <CardList monsters={filteredMonster}/>
//       </div>
  
//     );
//   }
// }
 
export default App;