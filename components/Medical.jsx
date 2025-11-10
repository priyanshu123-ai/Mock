import { StyleSheet, Text, TextInput, View, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import img from "../assets/images/img.png";

const playlists = [
  {
    title: "Chronic Pain",
    episodes: "8 episodes",
    image: "https://rlv.zcache.com/chronic_pain_awareness_ribbon_custom_art_pin-r821efa4b4d914c95b7f0458089dba04a_k94rk_1024.jpg?rlvnet=1&max_dim=325",
  },
  {
    title: "Mindfulness for Sleep",
    episodes: "8 episodes",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm2CjoRYug3FBGXSVkI4PbX0fr8DdjVYhI6g&s",
  },
  {
    title: "Healthy Heart Basics",
    episodes: "12 episodes",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrwMiHNKTODhHacgDHglMNkLv4TXwN117gQA&s",
  },
];


const Medical = () => {
  return (
    <SafeAreaView style={styles.bigbox}>
      <View style={styles.bigcon}>
        <View style={styles.searchbox}>
          <EvilIcons name="search" size={24} color="gray" />
          <TextInput
            placeholder="Search for symptom or condition..."
            placeholderTextColor="#aaa"
            style={styles.searchInput}
          />
        </View>

        <View style={styles.cir}>
          <View style={[styles.circle, { backgroundColor: "#FFEFD5" }]}>
            <Text style={[styles.dot, { backgroundColor: "#FFB347" }]}></Text>
            <Text style={styles.tagText}>Asthma</Text>
          </View>

          <View style={[styles.circle, { backgroundColor: "#E0FFFF" }]}>
            <Text style={[styles.dot, { backgroundColor: "#00CED1" }]}></Text>
            <Text style={styles.tagText}>Chest pain</Text>
          </View>

          <View style={[styles.circle, { backgroundColor: "#FFB6C1" }]}>
            <Text style={[styles.dot, { backgroundColor: "#FF6347" }]}></Text>
            <Text style={styles.tagText}>Heart diseases</Text>
          </View>
        </View>

        <Text style={styles.categoryTitle}>Browse by category</Text>

        <View style={styles.categoryContainer}>
          <View style={styles.categoryCard}>
            <Image style={styles.categoryImage} source={img} />

            <Text style={styles.categoryText}>Body</Text>
          </View>

          <View style={styles.categoryCard}>
            <Image
              style={styles.categoryImage}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9L_0Hua_YWcyfhETzoqQk0rDTqq90vRneqA&s",
              }}
            />
            <Text style={styles.categoryText}>Symptoms</Text>
          </View>

          <View style={styles.categoryCard}>
            <Image
              style={styles.categoryImage}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8XBwuL8vO6q-aAbrojVcz49bLAL3bgxQ3qw&s",
              }}
            />
            <Text style={styles.categoryText}>Treatment</Text>
          </View>
        </View>

        <View style={styles.play}>
          <Text style={styles.doct}>Doctor-curated playlists</Text>
          <Text style={styles.see}>See all</Text>
        </View>

       {playlists.map((item, i) => (
  <View key={i} style={styles.playlistCard}>
    <Image
      style={styles.playlistImage}
      source={{ uri: item.image }}
    />
    <View style={styles.playlistInfo}>
      <Text style={styles.playlistTitle}>{item.title}</Text>
      <Text style={styles.playlistEpisodes}>{item.episodes}</Text>
    </View>
    <FontAwesome5 name="angle-right" size={22} color="#333" />
  </View>
))}

      </View>
    </SafeAreaView>
  );
};

export default Medical;

const styles = StyleSheet.create({
  bigbox: {
    // flex: 1,
    backgroundColor: "#F5F7FB",
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,

    borderRadius: 20,

    elevation: 4,

    // padding: 16,
    // margin: 10,
  },
  bigcon: {
    flex: 1,
  },
  searchbox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginVertical: 15,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: "#333",
  },
  cir: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  circle: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 5,
  },
  tagText: {
    fontSize: 14,
    color: "#333",
    fontWeight: "500",
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 15,
    marginBottom: 10,
    color: "#333",
  },
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  categoryCard: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 10,
    width: 90,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 2,
  },
  categoryImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 5,
  },
  categoryText: {
    fontWeight: "600",
    color: "#333",
  },
  play: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 25,
  },
  doct: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
  },
  see: {
    fontSize: 14,
    color: "#6A5ACD",
  },
  playlistCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 10,
    marginTop: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  playlistImage: {
    width: 45,
    height: 45,
    borderRadius: 10,
    marginRight: 10,
  },
  playlistInfo: {
    flex: 1,
  },
  playlistTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  playlistEpisodes: {
    fontSize: 13,
    color: "#888",
  },
});
