import React from 'react';
import './ContentBox.css';

function ContentBox(props) {
    const { size, image } = props;
    const imageStyle = {
        backgroundImage: `url('${ image }')`,
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat'
    }
    return (
        <div className={`wrapper ${ size }`} style={ imageStyle }>
            { props.children }
        </div>
    )
}

export default ContentBox
