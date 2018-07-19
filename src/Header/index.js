import React     from "react"
import PropTypes from "prop-types"

import Form  from "./Form"
import Nav from "./Nav"

const Header = props =>
    <header>
        <Form onSearch={props.onSearch}/>
        <Nav categories={props.categories}/>
    </header>

Header.propTypes = {
    onSearch: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired,
}

export default Header
