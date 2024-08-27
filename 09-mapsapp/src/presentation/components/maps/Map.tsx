import { Platform } from "react-native";
import MapView, { PROVIDER_GOOGLE, Polyline } from "react-native-maps";
import { type Location } from "../../../infrastructure/interfaces/location";
import { FAB } from "../ui/FAB";
import { useEffect, useRef, useState } from "react";
import { useLocationStore } from "../../store/location/useLocationStore";

interface Props {
  showUserLocation?: boolean;
  initialLocation: Location;
}

export const Map = ({ showUserLocation = true, initialLocation }: Props) => {
  const {
    getLocation,
    lastKnownLocation,
    userLocations,
    watchLocation,
    clearWatchLocation
  } = useLocationStore();
  const mapRef = useRef<MapView>();
  const cameraLocation = useRef<Location>(initialLocation);
  const [isFollowingUser, setIsFollowingUser] = useState(true);
  const [isShowingPolyline, setIsShowingPolyline] = useState(true);

  const moveCameraToLocation = (location: Location) => {
    if (!mapRef.current) return;
    mapRef.current.animateCamera({ center: location });
  };

  const moveToCurrentLocation = async () => {
    if (!lastKnownLocation) moveCameraToLocation(initialLocation);
    const location = await getLocation();
    if (!location) return;
    moveCameraToLocation(location);
  };

  useEffect(() => {
    watchLocation();
    return () => { clearWatchLocation(); };
  }, []);

  useEffect(() => {
    if (lastKnownLocation && isFollowingUser) {
      moveCameraToLocation(lastKnownLocation);
    }
  }, [lastKnownLocation, isFollowingUser]);

  return (
    <>
      <MapView
        ref={(map) => mapRef.current = map!}
        showsUserLocation={showUserLocation}
        provider={Platform.OS === "ios" ? undefined : PROVIDER_GOOGLE}
        onTouchStart={() => setIsFollowingUser(false)}
        style={{ flex: 1 }}
        region={{
          ...cameraLocation.current,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121
        }}
      >
        {isShowingPolyline && <Polyline coordinates={userLocations} strokeWidth={5} />}
      </MapView>
      <FAB
        iconName={isFollowingUser ? "eye-outline" : "eye-off-outline"}
        onPress={() => setIsShowingPolyline(!isShowingPolyline)}
        style={{ bottom: 1400, right: 20 }}
      />
      <FAB
        iconName={isFollowingUser ? "walk-outline" : "accessibility-outline"}
        onPress={() => setIsFollowingUser(!isFollowingUser)}
        style={{ bottom: 80, right: 20 }}
      />
      <FAB
        iconName="compass-outline"
        onPress={moveToCurrentLocation}
        style={{ bottom: 20, right: 20 }}
      />
    </>
  );
};