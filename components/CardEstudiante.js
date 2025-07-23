import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image 
} from 'react-native';

// Componente reutilizable que recibe datos a través de props
export default function CardEstudiante({ 
  nombre, 
  edad, 
  imagen, 
  carrera, 
  institucion 
}) {
  
  return (
    <View style={styles.card}>
      
      {/* Sección de la imagen del estudiante */}
      <View style={styles.imagenContainer}>
        <Image 
          source={imagen} // Usar la imagen pasada como prop (puede ser require() o URI)
          style={styles.imagen}
          defaultSource={require('../assets/20230620.jpg')} // Imagen por defecto si falla
        />
      </View>
      
      {/* Sección de información del estudiante */}
      <View style={styles.infoContainer}>
        
        {/* Nombre del estudiante */}
        <View style={styles.infoItem}>
          <Text style={styles.etiqueta}>Nombre:</Text>
          <Text style={styles.valor}>{nombre}</Text>
        </View>
        
        {/* Edad del estudiante */}
        <View style={styles.infoItem}>
          <Text style={styles.etiqueta}>Edad:</Text>
          <Text style={styles.valor}>{edad} años</Text>
        </View>
        
        {/* Carrera del estudiante */}
        <View style={styles.infoItem}>
          <Text style={styles.etiqueta}>Carrera:</Text>
          <Text style={styles.valor}>{carrera}</Text>
        </View>
        
        {/* Institución del estudiante */}
        <View style={styles.infoItem}>
          <Text style={styles.etiqueta}>Institución:</Text>
          <Text style={styles.valor}>{institucion}</Text>
        </View>
        
      </View>
    </View>
  );
}

// Estilos para el componente de la tarjeta
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    margin: 10,
    elevation: 5, // Sombra en Android
    shadowColor: '#000', // Sombra en iOS
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4.65,
    borderLeftWidth: 4,
    borderLeftColor: '#6200ee', // Borde izquierdo morado
  },
  imagenContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  imagen: {
    width: 120,
    height: 120,
    borderRadius: 60, // Hacer la imagen circular
    borderWidth: 3,
    borderColor: '#6200ee',
  },
  infoContainer: {
    marginBottom: 15,
  },
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  etiqueta: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  valor: {
    fontSize: 16,
    color: '#555',
    flex: 2,
    textAlign: 'right',
  },
  decoracion: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  punto: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#6200ee',
    marginHorizontal: 4,
  },
});