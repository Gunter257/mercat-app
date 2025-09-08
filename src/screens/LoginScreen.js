import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebase';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Faltan datos', 'Introduce correo y contraseña');
      return;
    }
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email.trim(), password);
      navigation.reset({ index: 0, routes: [{ name: 'Root' }] });
    } catch (e) {
      Alert.alert('Error', 'No se pudo iniciar sesión. Revisa tus credenciales.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>merCat</Text>
      <Text style={styles.subtitle}>Encuentra mercados cerca de ti</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title={loading ? 'Entrando...' : 'Entrar'} onPress={handleLogin} disabled={loading} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24, backgroundColor: '#F5F5DC' },
  logo: { fontSize: 40, fontWeight: '800', textAlign: 'center', marginBottom: 8, color: '#2e7d32' },
  subtitle: { textAlign: 'center', marginBottom: 24, color: '#6b6b6b' },
  input: { height: 48, borderColor: '#d3c6a3', borderWidth: 1, borderRadius: 12, paddingHorizontal: 12, backgroundColor: '#fff', marginBottom: 12 }
});
