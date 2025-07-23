import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  SafeAreaView,
  ScrollView
} from 'react-native';

// Importar el componente de la tarjeta del estudiante
import CardEstudiante from '../components/CardEstudiante';

export default function PantallaEstudiante({ navigation }) {
  
  // Datos del estudiante que se pasarán como props al componente
  const datosEstudiante = {
    nombre: 'Ricardo Daniel Garcia Pocasngre', // Reemplazar con el nombre real
    edad: 18, // Reemplazar con la edad real
    imagen: require('../assets/20230620.jpg'), // Imagen local desde assets
    carrera: 'Desarrollo de Software',
    institucion: 'Instituto Técnico Ricaldone',
  };
  
  // Función para regresar a la pantalla principal
  const regresarAPrincipal = () => {
    navigation.goBack(); // Método para volver a la pantalla anterior
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Título de la pantalla */}
        <Text style={styles.titulo}>
          Información del Estudiante
        </Text>
        
        {/* Componente reutilizable CardEstudiante */}
        {/* Se pasan los datos como props al componente */}
        <CardEstudiante 
          nombre={datosEstudiante.nombre}
          edad={datosEstudiante.edad}
          imagen={datosEstudiante.imagen}
          carrera={datosEstudiante.carrera}
          institucion={datosEstudiante.institucion}
        />
        
        {/* Información adicional */}
        <View style={styles.infoAdicional}>
          <Text style={styles.infoTitulo}>Sobre esta aplicación:</Text>
          <Text style={styles.infoTexto}>
            Esta aplicación demuestra la implementación de navegación 
            entre pantallas en React Native utilizando React Navigation.
          </Text>
          <Text style={styles.infoTexto}>
            También muestra el uso de componentes reutilizables que 
            reciben datos a través de props.
          </Text>
        </View>
        
        {/* Botón para regresar a la pantalla principal */}
        <TouchableOpacity 
          style={styles.botonRegresar} 
          onPress={regresarAPrincipal}
          activeOpacity={0.7}
        >
          <Text style={styles.textoBoton}>
            ← Regresar al Inicio
          </Text>
        </TouchableOpacity>
        
      </ScrollView>
    </SafeAreaView>
  );
}

// Estilos para la pantalla del estudiante
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    padding: 20,
    paddingTop: 30,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 30,
  },
  infoAdicional: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 30,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  infoTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  infoTexto: {
    fontSize: 16,
    color: '#555',
    lineHeight: 22,
    marginBottom: 8,
  },
  botonRegresar: {
    backgroundColor: '#4CAF50', // Color verde para diferenciarlo
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    alignSelf: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  textoBoton: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});