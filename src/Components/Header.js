
import React, { PureComponent } from 'react';
import { Text, View } from 'react-native'
import styles from './../Styles/'

class Header extends PureComponent {
    render() {
        return (
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>{this.props.headerText}</Text>
            </View>
        );
    }
}

export default Header;