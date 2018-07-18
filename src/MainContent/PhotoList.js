import React     from "react"
import PropTypes from "prop-types"
import Photo     from "./Photo"

const PhotoList = props => {
    
    let photos, results = props.data
    
    if (results.length) {
        photos = results.map(
            photo => <Photo
                key={photo.id}
                id={photo.id}
                farm={photo.farm}
                server={photo.server}
                secret={photo.secret}
                title={photo.title}/>,
        )
    } else {
        photos =
            <li className="not-found">
                <h3>No Results Found</h3>
                <p>You search did not return any results. Please try again.</p>
            </li>
    }
    
    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                {photos}
            </ul>
        </div>
    )
}

PhotoList.propTypes = {
    data: PropTypes.array.isRequired,
}

export default PhotoList