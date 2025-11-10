import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Library = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.logoRow}>
            <Icon name="pulse" size={26} color="#007AFF" />
            <Text style={styles.logoText}>HealthCast</Text>
          </View>
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRcGSpUGlQhLvpAhpFx6RJpc2p-kUxiUS4GQ&s",
            }}
            style={styles.profilePic}
          />
        </View>

        {/* Titles */}
        <Text style={styles.title}>Library</Text>
        <Text style={styles.subtitle}>Doctor’s approved audio episodes</Text>

        {/* Search Bar */}
        <View style={styles.searchBar}>
          <Icon name="magnify" size={20} color="#999" />
          <TextInput
            placeholder="Search for symptom or condition..."
            placeholderTextColor="#999"
            style={styles.searchInput}
          />
        </View>

        {/* Filter Buttons */}
        <View style={styles.filters}>
          <TouchableOpacity style={styles.filterButton}>
            <Icon name="view-list" size={18} color="#4A4A4A" style={styles.filterIcon} />
            <Text style={styles.filterText}>Categories</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.filterButton}>
            <Icon name="stethoscope" size={18} color="#4A4A4A" style={styles.filterIcon} />
            <Text style={styles.filterText}>Symptoms</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.filterButton}>
            <Icon name="clock-outline" size={18} color="#4A4A4A" style={styles.filterIcon} />
            <Text style={styles.filterText}>Duration</Text>
          </TouchableOpacity>
        </View>

        {/* Card 1 */}
        <View style={styles.card}>
          <View style={[styles.iconWrapper, { backgroundColor: "#E6F3FF" }]}>
            <Icon name="lungs" size={40} color="#007AFF" />
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Body Systems</Text>
            <Text style={styles.cardInfo}>12 Episodes • Updated 3 Jun</Text>
            <Text style={styles.cardItem}>💓 How your heart works</Text>
            <Text style={styles.cardItem}>💨 Breathing and the lungs</Text>
            <Text style={styles.moreText}>+ 10 more</Text>
          </View>
        </View>

        {/* Card 2 */}
        <View style={styles.card}>
          <View style={[styles.iconWrapper, { backgroundColor: "#FFF4E6" }]}>
            <Icon name="medical-bag" size={40} color="#FF8C00" />
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Medical Conditions</Text>
            <Text style={styles.cardInfo}>27 Episodes • Updated 1 Jun</Text>
            <Text style={styles.cardItem}>❤️ Managing high blood pressure</Text>
            <Text style={styles.cardItem}>🧠 Understanding depression</Text>
            <Text style={styles.moreText}>+ 25 more</Text>
          </View>
        </View>

        {/* Card 3 */}
        <View style={styles.card}>
          <View style={[styles.iconWrapper, { backgroundColor: "#F0EDFF" }]}>
            <Icon name="magnify-scan" size={40} color="#6A5ACD" />
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Diagnostics</Text>
            <Text style={styles.cardInfo}>12 Episodes • Updated 29 May</Text>
            <Text style={styles.cardItem}>🫀 Understanding your ECG results</Text>
            <Text style={styles.cardItem}>🧬 What an MRI can tell you</Text>
            <Text style={styles.moreText}>+ 10 more</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Library;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E9F2FA",
    paddingHorizontal: 24,
    paddingTop: 16,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },

  logoRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  logoText: {
    fontSize: 19,
    fontWeight: "600",
    color: "#000",
    marginLeft: 6,
  },

  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#000",
    marginTop: 10,
  },

  subtitle: {
    color: "#666",
    fontSize: 14,
    marginBottom: 20,
  },

  searchBar: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 30,
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 3,
  },

  searchInput: {
    flex: 1,
    fontSize: 15,
    color: "#000",
    marginLeft: 8,
  },

  filters: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 22,
  },

  filterButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2F5F9",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 18,
  },

  filterIcon: {
    marginRight: 6,
  },

  filterText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#4A4A4A",
  },

  card: {
    flexDirection: "row",
    borderRadius: 20,
    padding: 20,
    marginBottom: 24,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 3,
  },

  iconWrapper: {
    width: 70,
    height: 70,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  cardContent: {
    flex: 1,
  },

  cardTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#000",
    marginBottom: 3,
  },

  cardInfo: {
    fontSize: 13,
    color: "#666",
    marginBottom: 8,
  },

  cardItem: {
    fontSize: 14,
    color: "#000",
    marginBottom: 2,
  },

  moreText: {
    fontSize: 14,
    color: "#007AFF",
    marginTop: 4,
  },
});
