import { MaterialIcons } from "@expo/vector-icons";

type iconTypes = {
  name: React.ComponentProps<typeof MaterialIcons>["name"];
  size: number;
  color: string;
  style?: any;
};

export const MaterialIcon = (props: iconTypes) => {
  return <MaterialIcons {...props} />;
};

export default MaterialIcon;
