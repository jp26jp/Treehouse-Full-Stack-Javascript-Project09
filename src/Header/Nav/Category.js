import React from "react"
import PropTypes from "prop-types"

const Category = props =>
    <li>
        <button>{props.label}</button>
    </li>

Category.propTypes = {
    label: PropTypes.string.isRequired,
}

export default Category