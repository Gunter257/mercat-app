import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import * as Location from 'expo-location';
import MarketItem from '../components/MarketItem';
import { sampleMarkets } from '../services/markets';
import { haversineDistance } from '../utils/geo';

export default function HomeScreen({ navigation }) {
  const [coords, setCoords] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setError('Permiso de ubicación denegado');
          setLoading(false);
          return;
        }
        const pos = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = pos.coords;
        setCoords({ latitude, longitude });

        const enriched = sampleMarkets.map(m => ({
          ...m,
          distanceKm: haversineDistance(latitude, longitude, m.lat, m.lon)
        })).sort((a, b) => (a.distanceKm ?? 0) - (b.distanceKm ?? 0));

        setData(enriched);
      } catch (e) {
        setError('No se pudo obtener la ubicación');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Text style={styles.menu}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Mercados cercanos</Text>
        <View style={{ width: 28 }} />
      </View>

      {loading ? (
        <View style={styles.center}><ActivityIndicator /></View>
      ) : error ? (
        <View style={styles.center}><Text>{error}</Text></View>
      ) : (
        <FlatList
          contentContainerStyle={{ padding: 16 }}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MarketItem item={item} />}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5DC' },
  header: {
    height: 56,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#e7dec3',
    borderBottomWidth: 1,
    borderBottomColor: '#d8cba3'
  },
  menu: { fontSize: 24, color: '#2e7d32' },
  headerTitle: { fontSize: 18, fontWeight: '700', color: '#2e7d32' },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' }
});
