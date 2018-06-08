import React, { PureComponent } from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'

class AlbumDetail extends PureComponent {
    handlePress = () => {
        console.log(this.props.album.title)
        Linking.openURL(this.props.album.url)
    }

    render() {
        const { album: {
            title,
            artist,
            thumbnail_image,
            image }
        } = this.props
        return (
           <Card>
                <CardSection>
                    <View 
                        style={styles.thumbnailContainerStyle}
                    >
                        <Image
                            style={styles.thumbnailStyle}
                            source={ {uri: thumbnail_image} }
                        />
                    </View>
                    <View style={styles.textContainer}> 
                        <Text style={styles.textStyle}>{ title }</Text>
                        <Text style={styles.textStyle}>{ artist }</Text>
                    </View>
                </CardSection>

                <CardSection>
                    <Image
                        source={{uri: image}}
                        style={styles.imageStyle}
                    />
                </CardSection>

                <CardSection>
                    <Button onPress={ this.handlePress}>
                        <Text>Buy Now</Text>
                    </Button>
                </CardSection>
           </Card>
        );
    }
}

const styles = {
    textContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    textStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginLeft: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
}

export default AlbumDetail;