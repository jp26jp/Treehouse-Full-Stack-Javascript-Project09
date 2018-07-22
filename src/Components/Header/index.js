import React     from "react"
import {Route} from "react-router-dom"
import PropTypes from "prop-types"

import Form from "./Form"
import Nav  from "./Nav/index"

const Header = props =>
    <header>
        <Route path="/search/" render={() => <Form onSearch={props.onSearch}/>}/>
        <Nav categories={props.categories}/>
    </header>

Header.propTypes = {
    onSearch: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired,
}

export default Header
