import React,{Component}from "react";


import CardList from "../Components/CardList";
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import './App.css'
import { robots } from "../robots";
class App extends Component{
    constructor(){
        super();
        this.state={
            robots:[],
            searchfield:'',
        }
        
    }
    
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
    .then(users=>this.setState({robots:users}));
        
    }
    onSearchChange=(event)=>{
        this.setState({ searchfield : event.target.value})
        
    }
    render(){
        const {robots,searchfield}=this.state;
        const filtered=robots.filter(robots=>
        robots.name.toLowerCase().includes(searchfield.toLowerCase()));

        return !robots.length?
            <h1 className="tc">no results :(</h1>:
        
        
    (
        <div className="tc">
        <h1 className="f1">Robo friends</h1>
        <SearchBox searchChange={this.onSearchChange}/> 
        <Scroll>
        <CardList robots={filtered}/>
        </Scroll>
        </div>
    );
        
    }
}
export default App;
