import React from 'react'
import {View, TextInput, FlatList} from 'react-native';
import styles from './styles';
import TrackView from './component';
import {TopBar} from '../../components';

class Search extends React.PureComponent{
    constructor(props){
        super(props)
        this.state = {
            searchText: ''
        }
    }
    
    componentDidMount() {
        this.props.searchTracks('a')
        console.log(this.state.searchText + ' asdasdasd ')
    }

    onTextChange = (text) => {
        this.setState({
            searchText: text
        })
        this.props.searchTracks(this.state.searchText);
    } 

    render(){
        const {searchText} = this.state;
        const {tracks} = this.props;
        return(
            <View style={styles.container}>
                <TopBar title='Seach' />
                <TextInput 
                    value={searchText}
                    onChangeText={this.onTextChange}
                    style={styles.textInput}
                />
                <FlatList
                    data={tracks}
                    keyExtractor={i => i.listeners}
                    renderItem={({item}) => (
                        <TrackView track={item} /> 
                    )}
                />
            </View>
        )
    }
}

export default Search;