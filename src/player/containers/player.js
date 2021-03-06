import React, { Component } from 'react';
import Video from 'react-native-video';
import {
    StyleSheet,
    ActivityIndicator,
    Text
} from 'react-native';

import Layout from '../components/layout';
import ControlLayout from '../components/control-layout';
import PlayPause from '../components/play-pause';

class Player extends Component {
    state = {
        loading: true,
        paused: false
    }
    onBuffer = ({ isBuffering }) => {
        this.setState({
            loading: isBuffering
        })
    }
    playPause = () => {
        this.setState({
            paused: !this.state.paused
        })
    }
    render() {
        return (
            <Layout
                loading={
                    this.state.loading
                }
                video={
                    <Video
                        source={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
                        style={styles.video}
                        resizeMode="contain"
                        onBuffer={this.onBuffer}
                        onLoad={this.onLoad}
                        paused={this.state.paused}
                    />
                }
                loader={
                    <ActivityIndicator color="red" />
                }
                controls = {
                    <ControlLayout>
                        <PlayPause onPress={this.playPause} paused={this.state.paused}/>
                        <Text>Barra de Progreso</Text>
                        <Text>Tiempo</Text>
                        <Text>Fullscreen</Text>
                    </ControlLayout>
                }
            />
        )
    }
}

const styles = StyleSheet.create({
    video: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
    }
})

export default Player;