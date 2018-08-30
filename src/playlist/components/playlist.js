import React from 'react';
import Media from './media';
import './playlist.css';

function Playlist(props) {
    return (
        <div className="Playlist">
            {
                props.playlist.map((item) => {
                    return (
                        <Media
                            {...item}
                            key={item.id}
                            openModal={props.handleClick}
                        />
                    );
                })
            }
        </div>
    );
}

// use functional components when the Component never change.
// FunctionalComponents doesnt have life cicle
// user PureComponents when the component will be updated every.
// function Playlist(props) {
//     return(
//         <div onClick={props.handleClick}>
//             {props}
//         </div>
//     )
// }

export default Playlist;
