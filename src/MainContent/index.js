import React from "react"
import PropTypes from "prop-types"

import PhotoList from "./PhotoList"

const MainContent = props =>
    <PhotoList photos={props.photos}/>

MainContent.propTypes = {
    photos: PropTypes.array.isRequired,
    
}

export default MainContent