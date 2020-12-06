import Search from './Search';
import {connect} from 'react-redux';
import {searchTracks} from '../../../state/actions/search';

const mapStateToProps = state => ({
    tracks: state.search.tracks,
})

const mapDispatchToProps = dispatch => ({
    searchTracks: (text) =>dispatch(searchTracks(text)), 
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);