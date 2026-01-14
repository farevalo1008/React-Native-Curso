import { StyleSheet, Text, View, Button as RNButton} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import React from 'react'
import { Button, Input } from '@core'

export const LoginScreen = () => {
  const { top } = useSafeAreaInsets()

  return (
    <View style={[styles.container, {paddingTop: top + 100}]}>
      <Text style={styles.title}>Login</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <Input value='' onChange={()=>null}></Input>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Contraseña</Text>
        <Input value='' onChange={()=>null}></Input>
      </View>

      <View style={styles.buttonsCotainers}>
        <Button title='Iniciar Sesión' onPress={()=> null}/>
        <RNButton title='Crear Cuenta' onPress={()=> null}/>
      </View>
      
      
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:16,
    gap:24
  },
  title:{
    fontSize:24,
    fontFamily: 'PlaypenSans-Bold',
    textAlign: 'center',
    marginBottom:90
  },
  inputContainer:{
  },
  label:{
    fontFamily:'PlaypenSans-Regular',
    fontSize:16,
    marginBottom:8
  },
  buttonsCotainers:{
    marginTop:90,
    gap:24
  }
})