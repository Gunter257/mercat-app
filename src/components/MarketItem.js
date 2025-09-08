import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MarketItem({ item }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.meta}>{item.city} · {item.type} · {item.day}</Text>
      {item.distanceKm != null && (
        <Text style={styles.distance}>{item.distanceKm.toFixed(1)} km</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3
  },
  title: { fontSize: 16, fontWeight: '600', color: '#2e7d32' },
  meta: { marginTop: 4, color: '#666' },
  distance: { marginTop: 6, fontWeight: '600', color: '#a25b21' }
});
