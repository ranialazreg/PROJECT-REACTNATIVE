import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    
  // example a suprimer 
  container: { flex: 1, alignItems: "center", justifyContent: "center", marginBottom: 40 },
  text: { fontSize: 18, paddingBottom: 10 },
});

// Options d'en-tête de pile courantes
const ecranOptions = {
  headerStyle: {backgroundColor: "#FF87FF",},
  headerTintColor: "#fff",
  headerTitleStyle: {fontWeight: "bold",},
};

const couleur = { 
    headerBackground: "#FF87FF", 
    headerTint: "#fff" 
};

export default styles;