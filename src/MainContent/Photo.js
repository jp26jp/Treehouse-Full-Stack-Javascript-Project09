import React     from "react"
import PropTypes from "prop-types"

const Photo = props => {
    const url = `https://farm${props.farm}.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`
    return(
        <li>
            <img src={url} alt=""/>
        </li>
    )
}

Photo.propTypes = {
    id    : PropTypes.string.isRequired,
    farm  : PropTypes.number.isRequired,
    server: PropTypes.string.isRequired,
    secret: PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
}

export default Photo