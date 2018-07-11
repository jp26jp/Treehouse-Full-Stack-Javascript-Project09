import React, {Component} from "react"
import "./App.css"
import Header             from "./Header"
import MainContent        from "./MainContent"

class App extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            value     : "",
            categories: [
                {title: "cat"},
                {title: "dog"},
                {title: "mouse"},
            ],
            photos    : [
                {
                    url  : "https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg",
                    title: "Bob",
                },
                {
                    url  : "https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg",
                    title: "Glen",
                },
                {
                    url  : "https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg",
                    title: "Steve",
                },
                {
                    url  : "https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg",
                    title: "Bob",
                },
            ],
        }
        
        this.handleInputFilter = this.handleInputFilter.bind(this)
        this.handleSubmitFilter = this.handleSubmitFilter.bind(this)
    }
    
    handleInputFilter = event => {
        this.setState({value: event.target.value})
    }
    
    handleSubmitFilter = event => {
        alert("A name was submitted: " + this.state.value)
        event.preventDefault()
    }
    
    render() {
        return (
            <div className="container">
                <Header
                    filterValue={this.state.value}
                    handleSubmitFilter={this.handleSubmitFilter}
                    handleInputFilter={this.handleInputFilter}
                    categories={this.state.categories}
                />
                <MainContent
                    photos={this.state.photos}/>
            </div>
        )
    }
}

export default App
