import React from 'react';
import Category from './category';
import Search from '../../widgets/containers/search';
import './categories.css';
import Media from "../../playlist/components/media";

function Categories(props) {
    return(
        <div className="Categories" >
            <Search />
            {
                props.isLoading &&
                <p>Searching your favorites videos...</p>
            }
            {
                props.search.map((item) => {
                    return (
                        <Media
                            title  = {item.get('title')}
                            author = {item.get('author')}
                            type   = {item.get('type')}
                            cover  = {item.get('cover')}
                            src    = {item.get('src')}
                            id     = {item.get('id')}
                            key    = {item.get('id')}
                            openModal={props.handleClick}
                        />
                    )
                })
            }
            {
                props.categories.map((item) => {
                    return (
                        <Category
                            description     = {item.get('description')}
                            title           ={item.get('title')}
                            playlist        ={item.get('playlist')}
                            key             ={item.get('id')}
                            // handleClick ={props.handleClick}
                        />
                    )
                })
            }
        </div>
    );
}

export default Categories;
