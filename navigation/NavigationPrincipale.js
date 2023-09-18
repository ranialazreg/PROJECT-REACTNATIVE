import React from "react"
import { StatusBar } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import EcranPrincipale from  "../ecrans/EcranPrincipale"
import couleur from "../StyleGlobal"



//outillage 

const Stack = createNativeStackNavigator();

const NavigationPrincipale = () => {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor={couleur.headerBackground}
      />
      <Stack.Navigator
        initialRouteName="Principale"
        screenOptions={{
          headerStyle: {
            backgroundColor: couleur.headerBackground,
          },
          headerTintColor: couleur.headerTint,
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >

        <Stack.Screen
          name="Principale"
          component={EcranPrincipale}
          options={{ title: "Ecran principale" }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationPrincipale;
