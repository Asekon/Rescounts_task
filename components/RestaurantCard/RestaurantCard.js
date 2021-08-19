import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import globalStyles from "../../global.styles";

const RestaurantCard = ({ restaurant }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={restaurant.banner}
        style={styles.bannerStyle}
        imageStyle={{ borderRadius: 20 }}
      />
      {!!restaurant.discount && (
        <View style={styles.discount}>
          <Image
            source={require("../../assets/icons/discount.png")}
            style={styles.discountIcon}
          />
          <Text style={styles.discountText}>{restaurant.discount}</Text>
        </View>
      )}
      {!!restaurant.featured && (
        <View style={styles.featuredContainer}>
          <Text style={styles.featuredText}>Featured</Text>
        </View>
      )}
      <View style={styles.bottomContainer}>
        <Image source={restaurant.logo} style={styles.logo} />
        <View style={{ flexDirection: "row" }}>
          <View style={{ width: "50%" }}>
            <Text
              style={{
                fontFamily: "Poppins_700Bold",
                color: globalStyles.secondary,
              }}
            >
              {restaurant.title}
            </Text>
            <Text
              style={{
                fontFamily: "Cairo_600SemiBold",
                fontSize: 13,
                color: globalStyles.secondary,
              }}
            >
              {restaurant.cuisine}
              {restaurant.halal && ", Halal"}
            </Text>
            <Text
              style={{
                fontFamily: "Cairo_300Light",
                fontSize: 13,
                color: globalStyles.secondary,
              }}
            >
              Delivery: ${restaurant.delivery}
            </Text>
          </View>
          <View style={{ width: "50%", alignItems: "flex-end" }}>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Image
                source={require("../../assets/star.png")}
                style={{ width: 20, height: 20 }}
              ></Image>
              <Text
                style={{
                  color: globalStyles.primary,
                  fontFamily: "Poppins_700Bold",
                }}
              >
                ({restaurant.stars.toFixed(1)}){" "}
                {restaurant.open ? "Open" : "Closed"}
              </Text>
            </View>
            <Text
              style={{
                fontFamily: "Cairo_400Regular",
                fontSize: 13,
                color: globalStyles.secondary,
              }}
            >
              Avg ${restaurant.average} / person
            </Text>
            <Text
              style={{
                fontFamily: "Cairo_400Regular",
                fontSize: 13,
                color: globalStyles.secondary,
              }}
            >
              {restaurant.distance} km
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "92%",
    borderRadius: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
    backgroundColor: "white",
    marginBottom: 20,
  },
  bannerStyle: {
    width: "100%",
    height: 150,
  },
  discount: {
    position: "absolute",
    backgroundColor: "#D80073",
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  discountIcon: {
    height: 15,
    width: 15,
    aspectRatio: 1,
    marginRight: 7,
    tintColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  discountText: {
    color: "white",
    fontFamily: "Cairo_400Regular",
    fontSize: 14,
  },
  featuredContainer: {
    backgroundColor: globalStyles.primary,
    position: "absolute",
    right: 0,
    width: 200,
    transform: [{ rotate: "45deg" }, { translateX: 60 }, { translateY: -20 }],
  },
  featuredText: {
    fontFamily: "Cairo_600SemiBold",
    color: globalStyles.secondary,
    textAlign: "center",
    fontSize: 19,
  },
  bottomContainer: {
    paddingHorizontal: 30,
    transform: [{ translateY: -20 }],
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: "cover",
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 2,
  },
});

export default RestaurantCard;
