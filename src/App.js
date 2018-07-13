import React, {Component} from "react"
import Axios              from "axios"
import "./App.css"
import Header             from "./Header"
import MainContent        from "./MainContent"

class App extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            value     : "",
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
        const key = "e72ad237457be60deb5413722be2799e",
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
            <div className="container">
                <Header
                    onSearch={this.performSearch}
                    categories={this.state.categories}
                />
                <MainContent
                    data={this.state.photos}/>
            </div>
        )
    }
}

export default App
