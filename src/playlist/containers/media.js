import React, { Component } from 'react';
import Media from '../components/media';
import { connect } from 'react-redux';
import { openModal } from "../../actions";

class MediaContainer extends Component {
    openModal = (id) => {
        this.props.openModal(id);
    };

    render() {
        return <Media
            {...this.props.data.toJS()}
            openModal={this.openModal}
        />
    }
}

function mapStateToProps(state, props) {
    return {
        data: state.get('data').get('entities').get('media').get(props.id)
    }
}

const mapDispatchToProps = {
    openModal
};

export default connect(mapStateToProps, mapDispatchToProps)(MediaContainer)
