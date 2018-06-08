import React, { Component } from 'react';
import { ScrollView, ActivityIndicator, View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail'

class AlbumList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: []
        }
    }

    componentWillMount() {
        axios.get('http://rallycoding.herokuapp.com/api/music_albums')
        .then((response) => this.setState({albums: response.data}))
    }

    renderAlbums = () => {
        const Preloader = <ActivityIndicator size="large" color="#00e5ff" />


        return this.state.albums.length !== 0 ?
            (this.state.albums.map((item, i) =>
                <AlbumDetail key={item.title + i} album={item} />))
            : Preloader
    }

    render() {
        {console.log(this.state)}
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;
