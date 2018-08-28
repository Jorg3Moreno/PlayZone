import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './media.css';

/*
    LIFE CLICLE OF COMPONENTS
    1.  Mount.- the component is viewed or rendered. Constructor func is executed.
    2.  ComponentWillMount.- called inmediately before the component mount.
        the component cant be viewed yet.
    3.  Render.- contain all elements to render.
    4.  ComponentDidMount.- called after Mount. The component is displayed. This is
        the right place to use DOM functions, API functions, etc.
    5.  ComponentWillReceiveProps.- receive new props and update the state using
        the new props.
    6.  ShouldComponentUpdate.- indentify if is necesary render the component again.
    7.  ComponentWillUpdate.- the component need be re-render.
    8.  Render.- render the component again.
    9.  ComponentDidUpdate.- called after render.
    10. ComponentWillUnmount.- called before component dropped/deleted of application.
    11. ComponentDidCatch.- called if there are any error when the component is
        rendering.
*/
class Media extends PureComponent {
    render() {
        return (
            <div className="Media" onClick={this.props.handleClick}>
                <div className="Media-cover">
                    <img
                        className="Media-image"
                        src={this.props.cover}
                        alt=""
                        width={240} height={160}/>
                        <h3 className="Media-title">{this.props.title}</h3>
                        <p className="Media-author">{this.props.author}</p>
                </div>
            </div>
        );
    }
}

// data type validation
Media.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    type: PropTypes.oneOf(['video', 'audio'])
}

export default Media;