import { Image, StyleSheet, Text, View } from "react-native";

const ARTWORK =
  "https://raw.githubusercontent.com/PokeAPI/sprites" +
  "/master/sprites/pokemon/other/official-artwork/";

const TYPE_COLORS: Record<string, string> = {
  Plante: "#78C850",
  Feu: "#F08030",
  Eau: "#6890F0",
  Électrik: "#F8D030",
};

type PokemonCardProps = {
  number: number;
  name: string;
  type: string;
};

export default function PokemonCard({ number, name, type }: PokemonCardProps) {
  const color = TYPE_COLORS[type] ?? "#A8A878";

  return (
    <View style={[styles.card, { backgroundColor: color + "33" }]}>
      <Image
        source={{ uri: `${ARTWORK}${number}.png` }}
        style={styles.image}
      />
      <View style={styles.infos}>
        <Text style={styles.number}>#{number}</Text>
        <Text style={styles.name}>{name}</Text>
        <Text style={[styles.type, { backgroundColor: color }]}>{type}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: 16,
    marginBottom: 12,
  },
  image: {
    width: 80,
    height: 80,
  },
  infos: {
    marginLeft: 16,
  },
  number: {
    fontSize: 14,
    color: "#666",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  type: {
    alignSelf: "flex-start",
    marginTop: 6,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 10,
    overflow: "hidden",
    color: "#fff",
    fontWeight: "600",
  },
});