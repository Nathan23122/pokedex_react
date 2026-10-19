import { StyleSheet, Text, View } from "react-native";

type TitreProps = {
  texte: string;
  nombre: number;
};

export default function Titre({ texte, nombre }: TitreProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.titre}>{texte}</Text>
      <Text style={styles.sousTitre}>{nombre} Pokémon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 20,
  },
  titre: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#CC0000",
  },
  sousTitre: {
    fontSize: 16,
    color: "#666",
    marginTop: 4,
  },
});