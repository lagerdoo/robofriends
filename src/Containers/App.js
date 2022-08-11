import React, {useState ,useEffect} from 'react'
import CardList from '../Components/CardList'
import SearchBox from '../Components/SearchBox'
import './App.css'
import Scroll from '../Components/Scroll'

 const App = () => {
  const[robots, setRobots]= useState([]);
  const[searchField , setSearchField]=useState('');

  const onSearchChange = (event) =>{   
    setSearchField(event.target.value)
  }
  
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(users => setRobots(users))
  },[]) //[] This is a shortcut like the component-did-mount
    
   const filterdRobots = robots.filter((robot)=>{
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  })


    return !robots.length 
    ?
     <h1 className='tc f1'>Loading</h1>
    :
    <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <CardList robots={filterdRobots}/>
        </Scroll>
        
    </div>
}
export default App;