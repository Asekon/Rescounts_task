import React, { useState } from "react";
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CheckBox from "@react-native-community/checkbox";
import globalStyles from "../global.styles";

const locationsArray = [
  {
    title: "Toronto",
    id: 0,
  },
  {
    title: "Vancouver",
    id: 1,
  },
];

const cuisinesArray = [
  {
    title: "Middle Eastern",
    id: 0,
  },
  {
    title: "Fried Chicken",
    id: 1,
  },
  {
    title: "Burgers",
    id: 2,
  },
];

const Filter = ({
  setState,
  locations,
  setLocations,
  cuisines,
  setCuisines,
}) => {
  const inArray = (array, item) => array.includes(item);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setState(0)}>
          <Image
            style={styles.icon}
            source={require("../assets/icons/back.png")}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 15, fontFamily: "Poppins_500Medium" }}>
          Filter
        </Text>
        <TouchableOpacity
          onPress={() => {
            setLocations([]);
            setCuisines([]);
          }}
        >
          <Text
            style={{
              fontSize: 13,
              fontFamily: "Poppins_500Medium",
              color: globalStyles.primary,
            }}
          >
            Reset
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          borderColor: "#BEBEBE",
          paddingBottom: 20,
        }}
      >
        <View style={styles.titles}>
          <Image
            style={styles.titlesIcon}
            source={require("../assets/icons/location.png")}
          />
          <Text style={{ fontSize: 15, fontFamily: "Poppins_700Bold" }}>
            Location
          </Text>
        </View>
        {locationsArray.map((loc) => (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <CheckBox
              onFillColor={"yellow"}
              onCheckColor={"yellow"}
              tintColors={{
                true: globalStyles.primary,
                false: globalStyles.primary,
              }}
              value={inArray(locations, loc.id)}
              onValueChange={() =>
                setLocations((locations) =>
                  !inArray(locations, loc.id)
                    ? locations.concat(loc.id)
                    : locations.filter((_loc) => _loc !== loc.id)
                )
              }
              style={styles.checkbox}
            />
            <Text style={{ fontFamily: "Cairo_400Regular", fontSize: 15 }}>
              {loc.title}
            </Text>
          </View>
        ))}
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          borderColor: "#BEBEBE",
          paddingBottom: 20,
        }}
      >
        <View style={styles.titles}>
          <Image
            style={styles.titlesIcon}
            source={require("../assets/icons/cuisine.png")}
          />
          <Text style={{ fontSize: 15, fontFamily: "Poppins_700Bold" }}>
            Cuisine
          </Text>
        </View>
        {cuisinesArray.map((cuisine) => (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <CheckBox
              onFillColor={"yellow"}
              onCheckColor={"yellow"}
              tintColors={{
                true: globalStyles.primary,
                false: globalStyles.primary,
              }}
              value={inArray(cuisines, cuisine.id)}
              onValueChange={() =>
                setCuisines((cuisines) =>
                  !inArray(cuisines, cuisine.id)
                    ? cuisines.concat(cuisine.id)
                    : cuisines.filter((_cuisine) => _cuisine !== cuisine.id)
                )
              }
              style={styles.checkbox}
            />
            <Text style={{ fontFamily: "Cairo_400Regular", fontSize: 15 }}>
              {cuisine.title}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    borderColor: "#BEBEBE",
    justifyContent: "space-between",
  },
  container: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    flex: 1,
    paddingTop: StatusBar.currentHeight + 30,
  },
  icon: {
    width: 20,
    height: 20,
  },
  titles: {
    flexDirection: "row",
    paddingVertical: 20,
    alignItems: "center",
  },
  titlesIcon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    marginRight: 10,
  },
  checkbox: {
    tintColor: globalStyles.primary,
  },
});

export default Filter;
