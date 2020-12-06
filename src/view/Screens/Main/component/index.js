import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

class SongView extends React.PureComponent {
    render(){
        const {song, openArtistScreen} = this.props;
        return(
            <TouchableOpacity
                style={styles.container}
                onPress={() => openArtistScreen(song.artistID)}
            >
                <Text>{song.songName}</Text>
                <Text>{song.artistName}</Text>
                <Text style={styles.textUrl}>{song.artistURL}</Text>
            </TouchableOpacity>
        )
    }
}

export {SongView};