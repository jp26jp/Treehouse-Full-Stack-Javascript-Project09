import React from "react"
import PropTypes from "prop-types"

import PhotoList from "./PhotoList"

const MainContent = props =>
    <PhotoList data={props.data}/>

MainContent.propTypes = {
    data: PropTypes.array.isRequired,
}

export default MainContent