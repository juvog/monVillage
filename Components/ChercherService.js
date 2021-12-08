import React, { useState, TouchableOpacity, Text, Button } from "react";

import MapView, { PROVIDER_GOOGLE, Callout, View, Marker } from "react-native-maps";


const ChercherService = () => {
  const [region, setRegion] = useState({
    latitude: 45.55770414164521,
    longitude: -73.58228999478268,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  });

  /*const [markers, setMarkers] = useState([
    {
      //Nord
      coordinate: {   
        latitude: 45.55854851776608 ,
        longitude: -73.5868084262174 ,
      },
    },
    {
      coordinate: {
        latitude: LATITUDE ,
        longitude: LONGITUDE,
      },
    },
    {
      coordinate: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
      },
    },
    {
      coordinate: {
        latitude: LATITUDE,
        longitude: LONGITUDE - SPACE / 2,
      },
    },
  ]);*/


  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={{ flex: 1 }}
      region={region}
      onRegionChangeComplete={region => setRegion(region)}

    >



      <Marker
        coordinate={{ latitude: 45.563246481296574, longitude: -73.58789807317419 }}
      // title="Outil : tondeuse à gazon "
      //  description="Prêt du 01-10-2021 au 05-10-2021. Michel Désaultel : 514-111-1111"
      >
        {/* <Callout>
          <View>
            <Text>Essai</Text>
          </View>
        </Callout>  */}

      </Marker>


      <Marker
        coordinate={{ latitude: 45.55941854067166, longitude: -73.57239450003202 }}
        title="Service : Garde d'enfant "
        description="Disponible les mercredis soir. Alberte Trouillon : 514-111-1111">
      </Marker>


      <Marker
        coordinate={{ latitude: 45.53786564311706, longitude: -73.5726924956529 }}
        title="Service : Faire les courses "
        description="Disponible les samedis. Jason Together : 514-111-1111"
      />


      <Marker
        coordinate={{ latitude: 45.54306393470689, longitude: -73.60454449351273 }}
        title="Prêt : mijoteuse "
        description="Disponible les lundis. René Char: 514-111-1111"
      />


    </MapView>


  );

}


export default ChercherService;