import React     from "react"
import PropTypes from "prop-types"

import PhotoList from "./PhotoList"

const MainContent = props =>
    <PhotoList data={props.data} query={props.query}/>

MainContent.propTypes = {
    data : PropTypes.array.isRequired,
    query: PropTypes.string.isRequired,
}

export default MainContent