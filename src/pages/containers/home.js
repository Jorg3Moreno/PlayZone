import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
import HandleError from '../../error/containers/handle-error';
import VideoPlayer from '../../player/containers/video-player';

class Home extends Component {

    state = {
        modalVisible: false
    }

    // to open modal when click on Media Component
    handleOpenModal = () => {
        this.setState({
            modalVisible: true
        });
    }

    // to close modal
    handleCloseModal = (event) => {
        this.setState({
            modalVisible: false
        });
    }

    render() {
        return (
            <HandleError>
                <HomeLayout>
                    <Related />
                    <Categories
                        categories={this.props.categories}
                        handleClick={this.handleOpenModal}
                    />
                    {
                        this.state.modalVisible &&
                        <ModalContainer>
                            <Modal handleClick={this.handleCloseModal}>
                                <VideoPlayer
                                    autoplay
                                />
                            </Modal>
                        </ModalContainer>
                    }
                </HomeLayout>
            </HandleError>
        );
    }
}

export default Home;
