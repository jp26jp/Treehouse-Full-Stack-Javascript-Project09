import React, {Component}             from "react"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Axios                          from "axios"
import "./App.css"
import Header                         from "./Components/Header"
import MainContent                    from "./Components/MainContent"
import config                         from "./config"

export default class App extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            query     : "Cats",
            loading   : true,
            photos    : [],
            categories: [
                {title: "Cats"},
                {title: "Dogs"},
                {title: "Computers"},
            ],
        }
    }
    
    componentDidMount() {
        this.performSearch()
    }
    
    performSearch = (query = "cats") => {
        const key = config,
              url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&text=${query}&format=json&nojsoncallback=1`
        Axios.get(url)
             .then(response => {
                 this.setState({
                                   query  : query,
                                   photos : response.data.photos.photo,
                                   loading: false,
                               })
             })
             .catch(error => {
                 console.log("Error fetching and parsing data", error)
             })
    }
    
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <Header onSearch={this.performSearch} categories={this.state.categories}/>
                    {
                        (this.state.loading)
                        ? <p>Loading...</p> :
                        <Switch>
                            <Route exact path="/" render={() => <MainContent data={this.state.photos} query={this.state.query}/>}/>
                            <Route path="/search/:query" render={({match}) => {
                                this.performSearch(match.params.query)
                                return <MainContent data={this.state.photos} query={this.state.query}/>
                            }}/>
                        </Switch>
                        
                    }
                </div>
            </BrowserRouter>
        )
    }
}