import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native";
import { StackNavigationType } from "../../../types";
import Card from "../../Card";
import Header from "../../header";
import { Seperator, SpecialistContainer } from "./styles";

const doctors = [
  {
    id: "1",
    name: "DR JAY KEVIN",
    specialty: "Cardiology",
  },
  {
    id: "2",
    name: "DR JAY KEVIN",
    specialty: "Cardiology",
  },
  {
    id: "3",
    name: "DR JAY KEVIN",
    specialty: "Cardiology",
  },
  {
    id: "4",
    name: "DR JAY KEVIN",
    specialty: "Cardiology",
  },
  {
    id: "5",
    name: "DR JAY KEVIN",
    specialty: "Cardiology",
  },
  {
    id: "6",
    name: "DR JAY KEVIN",
    specialty: "Cardiology",
  },
];

const SpecialistContent = ({ route, navigation }: StackNavigationType) => {
  const nav = useNavigation();
  const handleBack = () => {
    nav.goBack();
  };
  return (
    <SpecialistContainer>
      <Header title="Select Specialist" handleBack={handleBack} />
      {doctors && (
        <FlatList
          //   onRefresh={handlePosts}
          //   refreshing={isRefreshing}
          showsVerticalScrollIndicator={false}
          data={doctors}
          keyExtractor={(item: any) => item.id}
          ItemSeparatorComponent={() => {
            return <Seperator />;
          }}
          renderItem={({ item }: any) => {
            return <Card data={item} navigation={navigation} route={route} />;
          }}
        />
      )}
    </SpecialistContainer>
  );
};

export default SpecialistContent;
