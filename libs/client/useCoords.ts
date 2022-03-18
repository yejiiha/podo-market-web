import { useEffect, useState } from "react";

interface UseCoordsState {
  latitude: null | number;
  longitude: null | number;
}

export default function useCoords() {
  const [coords, setCoords] = useState<UseCoordsState>({
    latitude: null,
    longitude: null,
  });

  const onSuccess = ({
    coords: { longitude, latitude },
  }: GeolocationPosition) => {
    setCoords({
      longitude,
      latitude,
    });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onSuccess);
  }, []);

  return coords;
}
