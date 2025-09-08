# merCat (Expo)

Proyecto Expo listo para compilar APK con EAS.

## Pasos para usar
1. Descomprime este proyecto y súbelo a GitHub (el contenido de la carpeta, no el .zip).
2. En tu cuenta de Expo, crea/conecta el proyecto a este repo.
3. Compila: **Android → APK** usando el perfil `production` (ya definido en `eas.json`).

## Desarrollo local (opcional)
```bash
npm install
npx expo start
```

## Login
- Autenticación por correo/contraseña con Firebase (`src/services/firebase.js`).
- Asegúrate de tener habilitado Email/Password en Firebase Auth.

## Pantallas incluidas
- Login (inicial al abrir la app).
- Inicio: solicita permisos de ubicación y lista mercados cercanos (mock) ordenados por distancia.
- Menú (Drawer): Inicio, Mapa, Calendario, Favoritos, Área vendedor (placeholders).

## Colores
- Fondo beige (#F5F5DC), acentos verde y naranja oscuro.
