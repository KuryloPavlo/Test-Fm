import React from 'react';
import {View, FlatList} from 'react-native';

import {SongView} from './component';
import {TopBar} from '../../components';

class Main extends React.PureComponent{
    componentDidMount() {
        this.props.loadSongs();
    }

    openArtistScreen = artistID => {
        this.props.navigation.navigate('Artist', {artistID});
    }

    render(){
        const {songs} = this.props;
        return(
            <View style = {{flex: 1}}>
                <TopBar title = 'Top chart' />
                <FlatList
                    numColumns={1}
                    data={songs}
                    keyExtractor={i => i.songName}
                    renderItem={({item}) => (
                        <SongView song={item} openArtistScreen={this.openArtistScreen} />
                    )} 
                />
            </View>
        )
    }
}

export default Main;