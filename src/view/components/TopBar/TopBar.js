import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

class TopBar extends React.PureComponent {
    render(){
        const {title} = this.props;
        return(
            <View style = {styles.container}>
                <Text style = {styles.text}>{title}</Text>
            </View>
        )
    }
}

export default TopBar;