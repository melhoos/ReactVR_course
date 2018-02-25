import React from 'react';
import {AppRegistry, asset, Pano, View, NativeModules} from 'react-vr';

import IntroText from './components/introduction/IntroText';
import Game from './components/game/Game';

export default class IteraGame extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
      </View>
    );
  }
};

AppRegistry.registerComponent('IteraGame', () => IteraGame);
