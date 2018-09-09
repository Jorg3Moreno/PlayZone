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
                props.search.map((item) => {
                    return item.map((item) => {
                        return (
                            <Media
                                {...item}
                                key={item.id}
                                openModal={props.handleClick}
                            />
                        )
                    })
                })
            }
            {
                props.categories.map((item) => {
                    return (
                        <Category
                            key={item.id}
                            {...item}
                            handleClick={props.handleClick}
                        />
                    )
                })
            }
        </div>
    );
}

export default Categories;
