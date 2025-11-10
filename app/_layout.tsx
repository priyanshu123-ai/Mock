import { StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import Index from "./(tabs)/index";
import Library from "@/Screen/Library";
import Playlists from "@/Screen/Playlists";
import Profile from "@/Screen/Profile";

const Tab = createBottomTabNavigator();

const _layout = () => {
  const icons = {
    HomeStack: "home-outline",
    Library: "folder-outline",
    PlayLists: "mic-outline",
    Profile: "person-outline",
  };

  const activeIcons = {
    HomeStack: "home",
    Library: "folder",
    PlayLists: "mic",
    Profile: "person",
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#fff",
          height: 80,
        },
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons
            name={focused ? activeIcons[route.name] : icons[route.name]}
            size={22}
            color={color}
          />
        ),
      })}
    >
      <Tab.Screen name="HomeStack" component={Index} options={{ title: "Home" }} />
      <Tab.Screen name="Library" component={Library} />
      <Tab.Screen name="PlayLists" component={Playlists} options={{ title: "Playlists" }} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default _layout;

const styles = StyleSheet.create({});
