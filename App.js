import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import estilo from './src/estilos';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style = {estilo.container}>
        <LinearGradient
          colors = {['blue','white','red']}
          style = {estilo.gradienteBackground}
        >

          <Image source = {{uri:'https://logodownload.org/wp-content/uploads/2017/02/psg-logo-escudo-paris-saint-germain.png'}}
          style = {estilo.Image}
          /> 

        </LinearGradient>
      {/*View com as entradas de dados*/}
        <View style = {estilo.box}>
        <View style={estilo.viewIcons}>
        <Feather name="user" size={24} color="black" />
        <TextInput style = {estilo.input} placeholder='e-mail'/>
        </View>

        <View style = {estilo.viewIcons}>
        <Ionicons name="key" size={24} color="black" />
        <TextInput style = {estilo.input} placeholder='senha'/>
        </View>

        <TouchableOpacity style = {{width:'80'}}>
          <LinearGradient
            colors={['red','white']}
            style = {estilo.button}
            
          >

            <Text style = {estilo.Text}>LOGAR</Text>

          </LinearGradient>
        </TouchableOpacity>

      </View>




    </View>
  );
}

