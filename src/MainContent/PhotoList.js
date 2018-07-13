import React     from "react"
import PropTypes from "prop-types"
import Photo     from "./Photo"

const PhotoList = props =>
    <div className="photo-container">
        <h2>Results</h2>
        <ul>
            {props.data.map(photo =>
                <Photo
                    key={photo.id}
                    id={photo.id}
                    farm={photo.farm}
                    server={photo.server}
                    secret={photo.secret}
                    title={photo.title}/>
            )}
            <li className="not-found">
                <h3>No Results Found</h3>
                <p>You search did not return any results. Please try again.</p>
            </li>
        </ul>
    </div>

PhotoList.propTypes = {
    data: PropTypes.array.isRequired,
}

export default PhotoList