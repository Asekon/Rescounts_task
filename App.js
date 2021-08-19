import { useFonts } from "expo-font";
import React, { useState } from "react";
import { View, Text } from "react-native";
import { Poppins_500Medium, Poppins_700Bold } from "@expo-google-fonts/poppins";

import {
  Cairo_300Light,
  Cairo_400Regular,
  Cairo_600SemiBold,
} from "@expo-google-fonts/cairo";
import Home from "./screens/Home";
import Filter from "./screens/Filter";

export default function App() {
  const [fontsLoaded] = useFonts({
    Cairo_300Light,
    Cairo_400Regular,
    Cairo_600SemiBold,
    Poppins_500Medium,
    Poppins_700Bold,
  });
  const [state, setState] = useState(0);
  const [locations, setLocations] = useState([]);
  const [cuisines, setCuisines] = useState([]);

  if (!fontsLoaded)
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );

  if (state === 0)
    return (
      <Home locations={locations} cuisines={cuisines} setState={setState} />
    );
  else
    return (
      <Filter
        locations={locations}
        setLocations={setLocations}
        cuisines={cuisines}
        setCuisines={setCuisines}
        setState={setState}
      />
    );
}
