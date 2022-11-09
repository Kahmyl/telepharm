import { Feather } from "@expo/vector-icons";

type iconTypes = {
  name: React.ComponentProps<typeof Feather>["name"];
  size: number;
  color: string;
  style?: any;
};

export const FeatherIcon = (props: iconTypes) => {
  return <Feather {...props} />;
};

export default FeatherIcon;
