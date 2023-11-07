import { Text, SafeAreaView, StyleSheet } from 'react-native';


import DataCollectionScreen from './components/DataCollectionScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    
      <DataCollectionScreen />
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'green'
    // padding: 8,
  },
  
});
