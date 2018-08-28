import React from 'react';
import PlayList from '../../playlist/components/playlist';
import './category.css';

function Category(props) {
    // console.log(props);
    return(
        <div className="Category" >
            <p className="Category-description" >{props.description}</p>
            <h2 className="Category-title" >{props.title}</h2>
            <PlayList
                playlist={props.playlist}
                handleClick={props.handleClick}
            />
        </div>
    )
}

export default Category;
