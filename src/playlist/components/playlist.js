import React from 'react';
import MediaContainer from '../containers/media';
import './playlist.css';

function Playlist(props) {
    return (
        <div className="Playlist">
            {
                props.playlist.map((mediaId) => {
                    return (
                        <MediaContainer
                            id={mediaId}
                            key={mediaId}
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
