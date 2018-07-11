import React     from "react"
import PropTypes from "prop-types"
import Category  from "./Category"

const Nav = props =>
    <nav className="main-nav">
        <ul>
            {props.categories
                  .map(category => <Category
                      label={category.title}/>)
            }
        </ul>
    </nav>

Nav.propTypes = {
    categories: PropTypes.array.isRequired
}

export default Nav