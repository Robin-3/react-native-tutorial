import { Platform } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { type Location } from "../../../infrastructure/interfaces/location";
import { FAB } from "../ui/FAB";
import { useRef } from "react";
import { useLocationStore } from "../../store/location/useLocationStore";

interface Props {
  showUserLocation?: boolean;
  initialLocation: Location;
}

export const Map = ({ showUserLocation = true, initialLocation }: Props) => {
  const { getLocation } = useLocationStore();
  const mapRef = useRef<MapView>();
  const cameraLocation = useRef<Location>(initialLocation);

  const moveCameraToLocation = (location: Location) => {
    if (!mapRef.current) return;
    mapRef.current.animateCamera({ center: location });
  };

  const moveToCurrentLocation = async () => {
    const location = await getLocation();
    if (!location) return;
    moveCameraToLocation(location);
  };

  return (
    <>
      <MapView
        ref={(map) => mapRef.current = map!}
        showsUserLocation={showUserLocation}
        provider={Platform.OS === "ios" ? undefined : PROVIDER_GOOGLE}
        style={{ flex: 1 }}
        region={{
          ...cameraLocation.current,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121
        }}
      />
      <FAB
        iconName="compass-outline"
        onPress={moveToCurrentLocation}
        style={{ bottom: 20, right: 20 }}
      />
    </>
  );
};