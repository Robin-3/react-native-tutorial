import { RefreshControl, ScrollView } from "react-native";
import { Title } from "../../components/ui/Title";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useContext, useState } from "react";
import { globalStyles } from "../../../config/theme/theme";
import { ThemeContext } from "../../context/ThemeContext";

export const PullToRefreshScreen = () => {
  const { colors } = useContext(ThemeContext);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const { top } = useSafeAreaInsets();
  const onRefresh = () => {
    setIsRefreshing(true);

    setTimeout(() => {
      setIsRefreshing(false);
    }, 2000);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          progressViewOffset={top}
          onRefresh={onRefresh}
          colors={[colors.primary, "red", "orange", "green"]}
          progressBackgroundColor={colors.cardBackground}
          tintColor={colors.primary}
        />
      }
      style={{ ...globalStyles.mainContainer, backgroundColor: colors.background, ...globalStyles.globalMargin }}
    >
      <Title safe text="Pull to refresh" />
    </ScrollView>
  );
};