import React from 'react'

function Movies(props) {
    return (
        <div className='movies'>
            <img src={props.img} alt='#' />
            <p>{props.title}</p>
            <p>{props.year}</p>
        </div>
    )
}

export default Movies