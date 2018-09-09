import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
import HandleError from '../../error/containers/handle-error';
import VideoPlayer from '../../player/containers/video-player';
import { connect } from 'react-redux';
import { List as list } from 'immutable';

class Home extends Component {

    state = {
        modalVisible: false
    };

    // to open modal when click on Media Component
    handleOpenModal = (media) => {
        this.setState({
            modalVisible: true,
            media: media
        });
    };

    // to close modal
    handleCloseModal = (event) => {
        this.setState({
            modalVisible: false
        });
    };

    render() {
        return (
            <HandleError>
                <HomeLayout>
                    <Related />
                    <Categories
                        categories={this.props.categories}
                        handleClick={this.handleOpenModal}
                        search={this.props.search}
                    />
                    {
                        this.state.modalVisible &&
                        <ModalContainer>
                            <Modal handleClick={this.handleCloseModal}>
                                <VideoPlayer
                                    autoplay
                                    src = {this.state.media.src}
                                    title = {this.state.media.title}
                                />
                            </Modal>
                        </ModalContainer>
                    }
                </HomeLayout>
            </HandleError>
        );
    }
}

function mapStateToProps(state, props) {
    const categories = state.get('data').get('categories').map( (categoryId) => {
        return state.get('data').get('entities').get('categories').get(categoryId)
    });

    const search = state.get('data').get('search');

    let results = list();

    if (search) {
        results = state.get('data').get('entities').get('media').filter( (item) => {
            return item.get('author').toLowerCase().includes(search.toLowerCase()) || item.get('title').toLowerCase().includes(search.toLowerCase());
        }).toList();
    }

    return {
        categories: categories,
        search: results
    }
}

export default connect(mapStateToProps)(Home);
