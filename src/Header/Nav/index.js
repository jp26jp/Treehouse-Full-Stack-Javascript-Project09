import React     from "react"
import PropTypes from "prop-types"
import Category  from "./Category"

const Nav = props =>
    <nav className="main-nav">
        <ul>
            {props.categories
                  .map((category, index) =>
                           <Category
                               key={index}
                               label={category.title}/>)
            }
        </ul>
    </nav>

Nav.propTypes = {
    categories: PropTypes.array.isRequired,
}

export default Nav