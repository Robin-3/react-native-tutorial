import { create } from "zustand";
import { type Location } from "../../../infrastructure/interfaces/location";
import { clearWatchLocation, getCurrentLocation, watchCurrentLocation } from "../../../actions/location/location";

interface LocationState {
  lastKnownLocation: Location | null;
  userLocations: Location[];
  watchId: number | null;
  getLocation: () => Promise<Location | null>;
  watchLocation: () => void;
  clearWatchLocation: () => void;
}

export const useLocationStore = create<LocationState>()((set, get) => ({
  lastKnownLocation: null,
  userLocations: [],
  watchId: null,
  getLocation: async () => {
    const location = await getCurrentLocation();
    set({ lastKnownLocation: location });
    return location;
  },
  watchLocation: () => {
    const watchId = get().watchId;
    if (watchId) {
      get().clearWatchLocation();
    }
    const id = watchCurrentLocation((location) => {
      set({
        lastKnownLocation: location,
        userLocations: [...get().userLocations, location]
      });
    });
  },
  clearWatchLocation: () => {
    const watchId = get().watchId;
    if (watchId) {
      clearWatchLocation(watchId);
    }
  }
}));