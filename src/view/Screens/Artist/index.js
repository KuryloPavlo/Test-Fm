import Artist from './Artist';
import {connect} from 'react-redux';
import {loadArtist} from '../../../state/actions/artist';

const mapStateToProps = state => {
    return{
        artist: state.artist.artist
    };
};

const mapDispatchToProps = dispatch => ({
    loadArtist: mbid => dispatch(loadArtist(mbid)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Artist);