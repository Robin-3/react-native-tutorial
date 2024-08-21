import { useState } from "react";
import { ActivityIndicator, FlatList, Image, View } from "react-native";
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
    <View style={{ backgroundColor: "black" }}>
      <FlatList
        data={numbers}
        keyExtractor={(item) => `${item}`}
        renderItem={({ item }) => <ListItem number={item} />}
        ListFooterComponent={() => (
          <View>
            <ActivityIndicator size={40} color={colors.primary} />
          </View>
        )}
        onEndReached={loadMore}
        onEndReachedThreshold={0.6}
      />
    </View>
  );
};

interface ListItemProps {
  number: number;
}

const ListItem = ({ number }: ListItemProps) => {
  return (
    <Image
      source={{ uri: `https://picsum.photos/id/${number}/500/400` }}
      style={{
        width: 500,
        height: 400
      }}
    />
  );
};