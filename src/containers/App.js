import React, {Component} from 'react';
import Cards from '../components/Cards';
import Search from '../components/Search';
import './App.css';
//import Scroll from '../components/Scroll';


class App extends Component {
    constructor(){
        super()
        this.state ={
        robots:[],
        searchField:''
       }       
    }
    
    newSearch = (event) => {
        this.setState({searchField: event.target.value});
    }
    
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(resp => resp.json())
            .then (data => this.setState({robots:data}));
    }
    
    render(){ 
      const {robots, searchField} = this.state;
      const filteredRobots= robots.filter( robots=>{
          return robots.name.toLowerCase().includes(searchField.toLowerCase())
      })
      return (
        <div className="tc">
           <div style={{ paddingBottom:'13px'}}> 
                <h1>Angry Robots</h1> 
                <Search searchChange={this.newSearch} />
            </div>
            <Cards robots={filteredRobots}/>
        </div> 
     );
 }
}

export default App;