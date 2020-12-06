import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

class TrackView extends React.PureComponent {
    render(){
        const {track} = this.props;
        return(
            <View style={styles.container}>
                <Text>{track.songName}</Text>
                <Text>{track.artistName}</Text>
            </View>
        )
    }
}

export default TrackView;