import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  SafeAreaView,
  Image
} from 'react-native';

export default function PantallaPrincipal({ navigation }) {
  
  // Función para navegar a la pantalla del estudiante
  const navegarAEstudiante = () => {
    navigation.navigate('PantallaEstudiante');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Contenedor principal */}
      <View style={styles.contenido}>
        
        {/* Logo o ícono del módulo */}
        <View style={styles.iconContainer}>
          <Text style={styles.iconText}>📱</Text>
        </View>

        {/* Título del módulo */}
        <Text style={styles.titulo}>
          Módulo 3.5
        </Text>
        
        {/* Subtítulo */}
        <Text style={styles.subtitulo}>
          Desarrollo de componentes para dispositivos móviles
        </Text>
        
        {/* Descripción del módulo */}
        <View style={styles.descripcionContainer}>
          <Text style={styles.descripcion}>
            Este módulo se enfoca en el desarrollo de aplicaciones móviles 
            utilizando React Native, enseñando las mejores prácticas para 
            crear componentes reutilizables y sistemas de navegación eficientes.
          </Text>
        </View>
        
        {/* Información adicional */}
        <View style={styles.infoContainer}>
          <Text style={styles.infoTexto}>
            • Navegación entre pantallas
          </Text>
          <Text style={styles.infoTexto}>
            • Componentes reutilizables
          </Text>
          <Text style={styles.infoTexto}>
            • Desarrollo móvil con React Native
          </Text>
        </View>
        
        {/* Botón para navegar a la siguiente pantalla */}
        <TouchableOpacity 
          style={styles.boton} 
          onPress={navegarAEstudiante}
          activeOpacity={0.7} // Efecto visual al presionar
        >
          <Text style={styles.textoBoton}>
            Ver Información del Estudiante
          </Text>
        </TouchableOpacity>
        
      </View>
    </SafeAreaView>
  );
}

// Estilos para la pantalla principal
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Fondo gris claro
  },
  contenido: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: '#6200ee',
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconText: {
    fontSize: 40,
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
  },
  descripcionContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
    elevation: 2, // Sombra en Android
    shadowColor: '#000', // Sombra en iOS
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  descripcion: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    lineHeight: 22,
  },
  infoContainer: {
    alignSelf: 'stretch',
    marginBottom: 40,
  },
  infoTexto: {
    fontSize: 16,
    color: '#444',
    marginBottom: 8,
    paddingLeft: 10,
  },
  boton: {
    backgroundColor: '#6200ee', // Color morado
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    elevation: 3, // Sombra en Android
    shadowColor: '#000', // Sombra en iOS
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