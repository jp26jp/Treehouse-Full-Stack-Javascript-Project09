import React from "react"
import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"

const Category = props =>
    <li>
        <NavLink to={"/search/" + props.label}>{props.label}</NavLink>
    </li>

Category.propTypes = {
    label: PropTypes.string.isRequired,
}

export default Category