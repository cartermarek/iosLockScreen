import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import wallpaper from './assets/images/wallpaper.webp'

export default function App() {
  return (
    <ImageBackground source={wallpaper} style={styles.container}>
      <Text>Hello world</Text>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
