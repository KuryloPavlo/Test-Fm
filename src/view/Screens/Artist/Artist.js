import React from 'react';
import {View, Text} from 'react-native';
import {TopBar} from '../../components';

import styles from './styles';

class Artist extends React.PureComponent {
    componentDidMount() {
        this.props.loadArtist(this.props.route.params.artistID);
    }

    stringTags = (tags) => {
        if (!tags) return '';
        return tags.map((item) => {
            return item.name
        }).join(' ');
    }

    render(){
        const {artist} = this.props;
        return(
            <View style={{flex: 1}}>
                <TopBar title='Artist' />
                <View style={styles.container}>
                    <Text style={styles.textName}>{artist.name}</Text>
                    <Text style={styles.textOpacity}>Tags</Text>
                    <Text>{this.stringTags(artist.tags)}</Text>
                    <Text style={styles.textOpacity}>Bio</Text>
                    <Text>{artist.bio}</Text>
                </View>
            </View>
        )
    }
}

export default Artist;