import { Image, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { StackNavigationType } from "../types";

const staticImage = require("../../assets/images/checked.png");

const BannerScreen = ({ route, navigation }: StackNavigationType) => {
  const { type } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Image source={staticImage} />
        <Text style={styles.text}>
          {type === "appointment"
            ? "You have successfully booked an appointment"
            : "You have successfully scheduled a video consultation."}{" "}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Main")}
      >
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BannerScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    height: "100%",
    backgroundColor: "#2192FF",
  },
  banner: {
    marginTop: 50,
    flex: 1,
    alignItems: "center",
  },
  text: {
    fontFamily: "Inter_500Medium",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 29,
    textAlign: "center",
    color: "#FFFFFF",
  },
  button: {
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "rgba(253, 255, 0, 0.85)",
    padding: 12,
    borderRadius: 16,
    marginBottom: 40,
  },
  buttonText: {
    fontFamily: "Inter_500Medium",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 18,
    lineHeight: 24,
    textAlign: "center",
    color: "#FFFFFF",
    textTransform: "uppercase"
  },
});
