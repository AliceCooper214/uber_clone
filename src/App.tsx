/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Platform} from 'react-native';
import {AMapSdk} from 'react-native-amap3d';

import {MapScreen} from 'screens/MapScreen';
import {LocationPermissionsService} from 'services/LocationPermissionsService';

AMapSdk.init(
  Platform.select({
    android: 'b6fcba85f072d811261b5ee1f264ff07',
    // ios: '186d3464209b74effa4d8391f441f14d',
  }),
);

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        <MapScreen />
        <LocationPermissionsService />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

export default App;
