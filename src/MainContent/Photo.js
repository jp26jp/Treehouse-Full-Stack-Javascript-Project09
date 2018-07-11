import React from "react"
import PropTypes from "prop-types"

const Photo = props =>
    <li>
        <img src={props.url} alt=""/>
        <div>{props.title}</div>
    </li>

Photo.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}

export default Photo