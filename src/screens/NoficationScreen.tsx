import NotificationContent from "../components/Doctor/Notification";
import { StackNavigationType } from "../types";

const NotificationScreen = ({ navigation }: StackNavigationType) => {
  return (
    <>
      <NotificationContent navigation={navigation} />
    </>
  );
};

export default NotificationScreen;
