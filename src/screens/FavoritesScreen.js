import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
export default function FavoritesScreen() {
  return (
    <View style={styles.container}><Text>Favoritos (próximamente)</Text></View>
  );
}
const styles = StyleSheet.create({ container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F5F5DC' } });
