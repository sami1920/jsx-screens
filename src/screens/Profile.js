import { Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
const profile = require("../../assets/profile.jpeg");

export default function Profile() {
  const gridItems = Array.from({ length: 9 });

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.subContainer}>
        <View style={styles.row}>
          <Text style={{ fontWeight: 800, fontSize: 20 }}>Username</Text>
          <Ionicons name="cog-outline" size={30} />
        </View>
        <View style={styles.topContainer}>
          <View style={styles.leftContainer}>
            <Image
              source={profile}
              style={styles.profilePhoto}
              contentFit="cover"
            />
          </View>
          <View style={styles.rightContainer}>
            <View style={styles.column}>
              <View style={{ alignItems: "center" }}>
                <Text style={{ fontWeight: "900" }}>1229</Text>
                <Text style={{ fontSize: 12 }}>Posts</Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <Text style={{ fontWeight: "900" }}>129</Text>
                <Text style={{ fontSize: 12 }}>Followers</Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <Text style={{ fontWeight: "900" }}>67</Text>
                <Text style={{ fontSize: 12 }}>Following</Text>
              </View>
            </View>
            <View style={styles.button}>
              <Text>Edit Profile</Text>
            </View>
          </View>
        </View>
        <View style={{ marginHorizontal: 20 }}>
          <Text style={{ fontWeight: 700 }}>Your Name</Text>
          <Text>Your description goes here and here also</Text>
          <Text>yoursite.com</Text>
        </View>
        <View style={styles.iconsTab}>
          <Ionicons name="image-outline" size={30} />
          <Ionicons name="camera-outline" size={30} />
          <Ionicons name="videocam-outline" size={30} />
          <Ionicons name="location-outline" size={30} />
        </View>
        <View style={styles.grid}>
          {gridItems.map((item, index) => (
            <View key={index} style={styles.gridItem}>
              <Image source={profile} style={styles.photo} resizeMode="cover" />
            </View>
          ))}
        </View>
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
    gap: 120,
    paddingHorizontal: 20,
    paddingBottom: 10,
    justifyContent: "flex-end",
    borderBottomColor: "#454545",
    borderBottomWidth: 1,
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
  },
  leftContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  rightContainer: {
    flex: 3,
    flexDirection: "column",
  },
  column: {
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  profilePhoto: {
    width: 75,
    height: 75,
    borderRadius: 75,
  },
  button: {
    backgroundColor: "skyblue",
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 5,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  iconsTab: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    justifyContent: "space-around",
    borderTopColor: "#454545",
    borderBottomColor: "#454545",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  gridItem: {
    width: "33.33%",
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#fff",
  },
  photo: {
    width: "100%",
    height: "100%",
  },
};
