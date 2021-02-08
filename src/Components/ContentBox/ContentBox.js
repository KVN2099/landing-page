import React from 'react';
import './ContentBox';

function ContentBox(props) {
    const { width, height } = props;
    return (
        <div style={{ width: width, height: height }}>
            { props.children }
        </div>
    )
}

export default ContentBox
