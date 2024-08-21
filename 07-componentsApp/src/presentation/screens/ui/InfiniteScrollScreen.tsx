import { useState } from "react";
import { CustomView } from "../../components/ui/CustomView";
import { Title } from "../../components/ui/Title";
import { FlatList, Text } from "react-native";
import { colors } from "../../../config/theme/theme";

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    const newArray = Array.from({ length: 6 }, (_, i) => numbers.length + i);

    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 3000);
  };

  return (
    <CustomView margin>
      <Title safe text="Infinite Scroll" />
      <FlatList
        data={numbers}
        keyExtractor={(item) => `${item}`}
        renderItem={({ item }) => (
          <Text style={{ height: 300, backgroundColor: colors.primary }}>{item}</Text>
        )}
        onEndReached={loadMore}
        onEndReachedThreshold={0.6}
      />
    </CustomView>
  );
};