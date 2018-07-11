import React     from "react"
import PropTypes from "prop-types"
import Photo     from "./Photo"

const PhotoList = props =>
    <div className="photo-container">
        <h2>Results</h2>
        <ul>
            {props.photos
                  .map(photo => <Photo url={photo.url} title={photo.title}/>)
            }
            <li className="not-found">
                <h3>No Results Found</h3>
                <p>You search did not return any results. Please try again.</p>
            </li>
        </ul>
    </div>

PhotoList.propTypes = {
    photos: PropTypes.array.isRequired,
}

export default PhotoList