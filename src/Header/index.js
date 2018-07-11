import React     from "react"
import PropTypes from "prop-types"

import Form  from "./Form"
import Nav from "./Nav/"

const Header = props =>
    <header>
        <Form
            filterValue={props.filterValue}
            handleSubmitFilter={props.handleSubmitFilter}
            handleInputFilter={props.handleInputFilter} />
        <Nav categories={props.categories}/>
    </header>

Header.propTypes = {
    filterValue: PropTypes.func.isRequired,
    handleSubmitFilter: PropTypes.func.isRequired,
    handleInputFilter: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired,
}

export default Header
