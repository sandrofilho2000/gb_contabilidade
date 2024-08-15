'use client';
import React, { useEffect, useState } from 'react';
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  InfoWindow,
} from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: -22.90885888052877,
  lng: -42.83392262883421,
};

function GoogleMaps() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDHPTwx_uGAZGovhnrQa5wXC95oEdk5sOA',
  });

  const [isInfoWindowOpen, setIsInfoWindowOpen] = useState(true);

  return (
    <section
      className="google-maps"
      id="google-maps"
    >
      <div className="container">
        <h2 className="google-maps_title title">FAÇA UMA VISITA</h2>
        <div className="map_wrapper  shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex items-center justify-center">
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={15}
            >
              <Marker
                onClick={() => {
                  setIsInfoWindowOpen(!isInfoWindowOpen);
                }}
                position={center}
              >
                {isInfoWindowOpen && (
                  <InfoWindow position={center}>
                    <p className="font-medium text-[#585858]">
                      Rua Manoel da Costa Marins, 24 - Loja 2 Itapeba, Maricá -
                      RJ
                    </p>
                  </InfoWindow>
                )}
              </Marker>
            </GoogleMap>
          ) : (
            <></>
          )}
        </div>
      </div>
    </section>
  );
}

export default GoogleMaps;
