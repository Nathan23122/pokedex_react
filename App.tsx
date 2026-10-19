import { ScrollView, StyleSheet, View } from "react-native";
import PokemonCard from "./components/PokemonCard";
import Titre from "./components/Titre";

const POKEMONS = [
  { number: 1, name: "Bulbizarre", type: "Plante" },
  { number: 4, name: "Salamèche", type: "Feu" },
  { number: 7, name: "Carapuce", type: "Eau" },
  { number: 25, name: "Pikachu", type: "Électrik" },
  { number: 37, name: "Goupix", type: "Feu" },
  { number: 43, name: "Mystherbe", type: "Plante" },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Titre texte="Mon Pokédex" nombre={POKEMONS.length} />
      <ScrollView contentContainerStyle={styles.liste}>
        {POKEMONS.map((p) => (
          <PokemonCard
            key={p.number}
            number={p.number}
            name={p.name}
            type={p.type}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
  },
  liste: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
});