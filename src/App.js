import React, {Component}     from "react"
import {BrowserRouter, Route} from "react-router-dom"
import Axios                  from "axios"
import "./App.css"
import Header                 from "./Header"
import MainContent            from "./MainContent"
import api                    from "./api"

class App extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            photos    : [],
            categories: [
                {title: "cat"},
                {title: "dog"},
                {title: "mouse"},
            ],
        }
    }
    
    componentDidMount() {
        this.performSearch()
    }
    
    performSearch = (query = "cats") => {
        const key = api,
              url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&text=${query}&format=json&nojsoncallback=1`
        Axios.get(url)
             .then(response => {
                 this.setState({photos: response.data.photos.photo})
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
                    <Route exact path="/" render={() => <MainContent data={this.state.photos}/>}/>
                    <Route path="/:query" render={({match}) => {
                        this.performSearch(match.params.query)
                        return <MainContent data={this.state.photos}/>
                    }}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App
