import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  StatusBar,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import globalStyles from "../global.styles";
import RestaurantCard from "../components/RestaurantCard/RestaurantCard";

const tabs = [
  {
    title: "Home",
    image: require("../assets/icons/rescounts_logo.jpg"),
  },
  {
    title: "Search",
    image: require("../assets/icons/search.png"),
  },
  {
    title: "Orders",
    image: require("../assets/icons/orders.png"),
  },
  {
    title: "Rewards",
    image: require("../assets/icons/ribbon.png"),
  },
];

const restaurants = [
  {
    title: `McDonald's`,
    cuisine: `Middle Eastern`,
    cuisineId: 0,
    halal: true,
    delivery: 12,
    stars: 5,
    open: true,
    average: 20,
    distance: 9220.1,
    discount: `Discount 20% on all menu`,
    featured: true,
    logo: require("../assets/logos/mcdonalds.png"),
    banner: require("../assets/banners/mcdonalds.jpg"),
    location: 0,
  },
  {
    title: `KFC`,
    cuisine: `Fried Chicken`,
    cuisineId: 1,
    halal: true,
    delivery: 15,
    stars: 4,
    open: true,
    average: 10,
    distance: 100.3,
    discount: `Up to 35%`,
    featured: true,
    logo: require("../assets/logos/kfc.png"),
    banner: require("../assets/banners/kfc.jpg"),
    location: 0,
  },
  {
    title: `Panera Bread`,
    cuisine: `Middle Eastern`,
    cuisineId: 0,
    delivery: 10,
    stars: 2,
    open: true,
    average: 30,
    distance: 200.1,
    discount: `Discount 30% on all menu`,
    logo: require("../assets/logos/panera.jpeg"),
    banner: require("../assets/banners/panera.jpeg"),
    location: 1,
  },
  {
    title: `Hardee's`,
    cuisine: `Burgers`,
    cuisineId: 2,
    delivery: 100,
    stars: 4,
    average: 20,
    distance: 1200.1,
    discount: `Discount 90% on all menu`,
    logo: require("../assets/logos/hardees.jpeg"),
    banner: require("../assets/banners/hardees.jpg"),
    location: 1,
  },
];

const Home = ({ setState, locations, cuisines }) => {
  const filteredRestaurants = restaurants.filter(
    (rest) =>
      (!locations.length || locations.includes(rest.location)) &&
      (!cuisines.length || cuisines.includes(rest.cuisineId))
  );
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setState(1)}>
          <Image
            style={styles.filterIcon}
            source={require("../assets/icons/filter.png")}
          />
        </TouchableOpacity>
      </View>
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContentContainer}
      >
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.title} restaurant={restaurant} />
        ))}
      </ScrollView>
      <View style={styles.tabs}>
        {tabs.map((tab) => (
          <View key={tab.title} style={styles.tabItem}>
            <Image style={styles.tabIcon} source={tab.image} />
            <Text
              style={{
                fontSize: 12,
                fontFamily: "Poppins_700Bold",
                color: globalStyles.secondary,
              }}
            >
              {tab.title}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
  },
  header: {
    width: "100%",
    alignItems: "flex-end",
    paddingHorizontal: "4%",
    paddingVertical: 20,
  },
  scrollContainer: {
    width: "100%",
  },
  filterIcon: {
    width: 30,
    height: 30,
  },
  scrollContentContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  tabs: {
    width: "100%",
    paddingVertical: 7,
    backgroundColor: globalStyles.primary,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  tabItem: {
    justifyContent: "center",
    alignItems: "center",
    width: "25%",
  },
  tabIcon: {
    height: 30,
    aspectRatio: 1,
    marginBottom: 3,
    resizeMode: "contain",
  },
});

export default Home;
