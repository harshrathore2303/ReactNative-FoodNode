import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import Login from './screens/Login/login'
import RestaurantLogin from './screens/RestaurantLogin/RestaurantLogin'
import RestaurantScreen from './screens/RestaurantScreen/RestaurantScreen'
import CreateRestaurant from './screens/CreateRestaurant/CreateRestaurant'
import AccountVerification from './screens/CreateRestaurant/AccountVerification'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>App</Text> */}
      {/* <Login /> */}
      {/* <RestaurantLogin/> */}
      {/* <RestaurantScreen/> */}
      {/* <CreateRestaurant/> */}
      {/* <AccountVerification/> */}
    </SafeAreaView> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default App