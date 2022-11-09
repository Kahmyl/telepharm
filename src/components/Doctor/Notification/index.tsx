import { NotificationContainer, Seperator } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native";
import { StackNavigationType } from "../../../types";
import Header from "../../header";
import NotificationCard from "../../Card/NotificationCard";

const NotificationContent = ({ navigation }: StackNavigationType) => {
  const nav = useNavigation();
  const handleBack = () => {
    nav.goBack();
  };
  const notifications = [
    { id: "1", name: "", type: "" },
    { id: "2", name: "", type: "" },
  ];
  return (
    <NotificationContainer>
      <Header title="Notifications" handleBack={handleBack} />
      {notifications && (
        <FlatList
          //   onRefresh={handlePosts}
          //   refreshing={isRefreshing}
          showsVerticalScrollIndicator={false}
          data={notifications}
          keyExtractor={(item: any, index: any) => index}
          ItemSeparatorComponent={() => {
            return <Seperator />;
          }}
          renderItem={({ item }: any) => {
            return <NotificationCard data={item} navigation={navigation} />;
          }}
        />
      )}
    </NotificationContainer>
  );
};

export default NotificationContent;
