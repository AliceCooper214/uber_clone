import { useEffect, useRef, useState } from 'react';
import { NativeSyntheticEvent, Dimensions } from 'react-native'
import { MapView } from 'react-native-amap3d';

const { width } = Dimensions.get('window');

export interface Coord {
  accuracy: number;
  heading: number;
  latitude: number;
  longitude: number;
  speed: number;
}

export interface GeolocationPosition {
  coords: Coord;
  timestamp: number;
}

export const useMapScreen = () => {
  const mapRef = useRef<MapView>(null);
  const [zoom, setZoom] = useState(25);
  const [userLocation, setUserLocation] = useState<GeolocationPosition['coords']>();

  useEffect(() => {
    mapRef?.current?.moveCamera({
      target: {
        latitude: userLocation?.latitude!,
        longitude: userLocation?.longitude!,
      },
      zoom
    }, 500)
  }, [userLocation]);

  const handleUserLocationChange = ({ nativeEvent: { coords } }: NativeSyntheticEvent<GeolocationPosition>) => {
    setUserLocation(coords);
  }

  return {
    models: {
      mapRef
    },
    operations: {
      handleUserLocationChange
    }
  }
}