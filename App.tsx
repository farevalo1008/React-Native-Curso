
import { COLORS, Spinner } from 'containers/core';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator, TextInput, Alert, TouchableOpacity } from 'react-native';

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
    <View style={styles.container}>
      <Button title='Presioname' onPress={() => Alert.alert('Hola Mundo')}></Button>
      <TouchableOpacity onPress={() => Alert.alert('Hola Mundo')}
        style={{
          backgroundColor: COLORS.primary,
          padding:16,
          borderRadius: 5,
          marginTop: 10
        }}>
        <Text style={{color: COLORS.white, fontSize: 24 }}>Hola soy un boton custom</Text>
      </TouchableOpacity>
      <ActivityIndicator size='large' color='blue'/>
      <TextInput style={{backgroundColor: 'pink', width: 300, padding:16 }}/>
    </View>
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
