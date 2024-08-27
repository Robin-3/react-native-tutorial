import { Platform } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { type Location } from "../../../infrastructure/interfaces/location";

interface Props {
  showUserLocation?: boolean;
  initialLocation: Location;
}

export const Map = ({ showUserLocation = true, initialLocation }: Props) => {
  return (
    <>
      <MapView
        showsUserLocation={showUserLocation}
        provider={Platform.OS === "ios" ? undefined : PROVIDER_GOOGLE}
        style={{ flex: 1 }}
        region={{
          ...initialLocation,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121
        }}
      />
    </>
  );
};