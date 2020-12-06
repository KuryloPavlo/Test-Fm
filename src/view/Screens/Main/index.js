import Main from './Main';
import {connect} from 'react-redux';
import {loadSongs} from '../../../state/actions/chart';

const mapStateToProps = state => {
    return{
        songs: state.chart.songs,
    };
};

const mapDispatchToProps = dispatch => ({
    loadSongs: () => dispatch(loadSongs()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);