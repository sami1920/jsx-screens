import { Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Ionicons } from "@expo/vector-icons";

const Tab = createMaterialTopTabNavigator();

export default function Tabs() {
  function One() {
    return (
      <View style={styles.centerContainer}>
        <Text>Component 01</Text>
      </View>
    );
  }

  function Two() {
    return (
      <View style={styles.centerContainer}>
        <Text>Component 02</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.subContainer}>
        <View style={styles.row}>
          <Ionicons name="arrow-back-outline" size={30} />
          <Text style={{ fontWeight: 800, fontSize: 20 }}>Tabs View</Text>
        </View>
        <NavigationContainer independent={true}>
          <Tab.Navigator
            screenOptions={{
              tabBarIndicatorStyle: { backgroundColor: "#000" },
            }}
          >
            <Tab.Screen name="One" component={One} />
            <Tab.Screen name="Two" component={Two} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
  },
  centerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#fff",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginHorizontal: 16,
  },
};
