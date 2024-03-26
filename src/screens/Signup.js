import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button,
  Pressable,
} from "react-native";
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";

export default function Signup() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.subContainer}>
        <Text style={styles.heading}>Chatify</Text>
        <TextInput style={styles.input} value="First Name" />
        <TextInput style={styles.input} value="Last Name" />
        <TextInput style={styles.input} value="Email ID" />
        <TextInput style={styles.input} value="Password" />
        <TextInput style={styles.input} value="Retype Password" />
        <View style={styles.rowLeft}>
          <RadioButtonGroup
            containerStyle={{ marginBottom: 10 }}
            radioBackground="green"
          >
            <RadioButtonItem
              value="test"
              label={
                <Text style={{ color: "#f2f2f2", marginLeft: 10 }}>Male</Text>
              }
            />
          </RadioButtonGroup>
          <RadioButtonGroup
            containerStyle={{ marginBottom: 10 }}
            radioBackground="green"
          >
            <RadioButtonItem
              value="test"
              label={
                <Text style={{ color: "#f2f2f2", marginLeft: 10 }}>Female</Text>
              }
            />
          </RadioButtonGroup>
        </View>
        <Pressable style={styles.button}>
          <Text style={{ color: "#f2f2f2" }}>SIGNUP</Text>
        </Pressable>
        <View style={styles.row}>
          <Text style={{ color: "#f2f2f2" }}>Already have an account?</Text>
          <Text style={{ color: "blue" }}>Login now</Text>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#232b2b",
  },
  input: {
    borderBottomColor: "#f2f2f2",
    borderBottomWidth: 1,
    padding: 10,
    color: "#f2f2f2",
    marginBottom: 25,
  },
  heading: {
    color: "#fff",
    fontWeight: 900,
    fontSize: 30,
    alignSelf: "center",
    marginBottom: 50,
    marginTop: 20
  },
  subContainer: {
    flex: 1,
    marginHorizontal: 30,
  },
  button: {
    backgroundColor: "orange",
    height: 50,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  rowLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 50,
    marginBottom: 25,
  },
};
