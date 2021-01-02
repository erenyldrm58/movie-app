import React from 'react'
import PropTypes from 'prop-types'

const movieList = props => {

    const emptyMessage =(
        <p>There are no movies yet</p>
    );

    const movieList =(
        <p>Movies List</p>
    );

    return (
        <div>
            { props.movies.length === 0 ? emptyMessage : movieList }
        </div>
    )
}

movieList.propTypes = {
    movies:PropTypes.array.isRequired
}

export default movieList

