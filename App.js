import { StatusBar } from 'expo-status-bar';
import { startTransition } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './components/Welcome';
import { WebView } from 'react-native-webview';
import Signup from './screens/Signup';





export default function App() {

  return <Signup />;
}

  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
