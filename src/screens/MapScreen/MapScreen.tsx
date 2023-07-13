import React from 'react';
import {StyledMapView, Container} from './MapScreen.styles';
import {useMapScreen} from './useMapScreen';

export const MapScreen = () => {
  const {models, operations} = useMapScreen();

  return (
    <Container>
      <StyledMapView
        ref={models.mapRef}
        onLocation={operations.handleUserLocationChange}
        myLocationEnabled
        initialCameraPosition={{
          zoom: 8,
        }}
      />
    </Container>
  );
};
