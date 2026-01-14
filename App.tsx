

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationApp } from '@core';

export default function App() {
    // Use `useFonts` only if you can't use the config plugin.
    const [loaded, error] = useFonts({
      'PlaypenSans-Bold': require('./assets/fonts/PlaypenSans-Bold.ttf'),
      'PlaypenSans-Light': require('./assets/fonts/PlaypenSans-Light.ttf'),
      'PlaypenSans-Regular': require('./assets/fonts/PlaypenSans-Regular.ttf')
    });

    useEffect(() => {
      if (loaded || error) {
        SplashScreen.hideAsync();
      }
    }, [loaded, error]);

    if (!loaded && !error) {
      return null;
    }

  return (
    <NavigationApp/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16
  },
});
