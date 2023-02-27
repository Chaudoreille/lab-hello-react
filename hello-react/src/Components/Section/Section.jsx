import React from 'react'

import './Section.css'

const Section = (props) => {
    const { title, description, button } = props; 
    return (
        <div className='Section'>
            <div className="container">
                <h2>{title}</h2>
                <p dangerouslySetInnerHTML={{__html: description}}></p>
                <button onClick={button.callback}>{button.content}</button>
            </div>
        </div>
    );
}

export default Section