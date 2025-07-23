import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';

// Importar las pantallas de la aplicación
import PantallaPrincipal from './pages/PantallaPrincipal';
import PantallaEstudiante from './pages/PantallaEstudiante';

// Crear el stack navigator para manejar la navegación entre pantallas
const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      {/* Configurar la barra de estado */}
      <StatusBar style="auto" />
      
      {/* Contenedor principal de navegación */}
      <NavigationContainer>
        {/* Stack Navigator - permite navegar entre pantallas en forma de pila */}
        <Stack.Navigator
          initialRouteName="PantallaPrincipal" // Pantalla inicial
          screenOptions={{
            headerStyle: {
              backgroundColor: '#6200ee', // Color morado para el header
            },
            headerTintColor: '#fff', // Color blanco para el texto del header
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          {/* Definir la pantalla principal */}
          <Stack.Screen 
            name="PantallaPrincipal" 
            component={PantallaPrincipal}
            options={{ title: 'Módulo 3.5' }} // Título que aparece en el header
          />
          
          {/* Definir la pantalla del estudiante */}
          <Stack.Screen 
            name="PantallaEstudiante" 
            component={PantallaEstudiante}
            options={{ title: 'Información del Estudiante' }} // Título que aparece en el header
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}