import { useEffect, type PropsWithChildren } from "react";
import { AppState } from "react-native";
import { usePermissionStore } from "../store/permissions/usePermissionStore";
import { type NavigationProp, useNavigation } from "@react-navigation/native";
import { type RootStackParams } from "../navigation/StackNavigator";

export const PermissionsCheker = ({ children }: PropsWithChildren) => {
  const { locationStatus, checkLocationPermission } = usePermissionStore();
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  useEffect(() => {
    if (locationStatus === "granted") navigation.navigate("Maps");
    else if (locationStatus === "undetermined") navigation.navigate("Permissions");
  }, [locationStatus]);

  useEffect(() => { checkLocationPermission(); }, []);

  useEffect(() => {
    const suscription = AppState.addEventListener("change", (nextAppState) => {
      if (nextAppState === "active") checkLocationPermission();
    });

    return () => {
      suscription.remove();
    };
  }, []);

  return children;
};