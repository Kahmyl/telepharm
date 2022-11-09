import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import FeatherIcon from "../../shared/Icons/FeatherIcon";
import { horizontalScale, verticalScale } from "../../shared/responsive";

const { width, height } = Dimensions.get("window");

const Header = ({ title, handleBack }: { title: string; handleBack: any }) => {
  return (
    <View style={styles.titleWrap}>
      <TouchableOpacity onPress={handleBack}>
        <FeatherIcon color="#ffffff" name="arrow-left" size={24} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  title: {
    fontWeight: "700",
    fontFamily: "Inter_500Medium",
    marginLeft: horizontalScale(77, width),
    fontSize: horizontalScale(24, width),
    fontStyle: "normal",
    lineHeight: verticalScale(29, height),
    color: "#ffffff",
  },
  titleWrap: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: verticalScale(84, height),
    marginBottom: verticalScale(25, height),
  },
  container: {
    paddingVertical: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});
