import { useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);

  const markers = eventData.map((ev) => {
    //  console.log(ev.id)
    // console.log(typeof ev.geometry[0].coordinates[1]  === 'number');
    // console.log(ev);
    return (
      <LocationMarker
        lat={
          typeof ev.geometry[0].coordinates[1] === "number"
            ? ev.geometry[0].coordinates[1]
            : 10
        }
        lng={
          typeof ev.geometry[0].coordinates[0] === "number"
            ? ev.geometry[0].coordinates[0]
            : 10
        }
        disaster={ev.categories[0].id}
        onClick={() =>
          setLocationInfo({
            disaster: ev.categories[0].id,
            id: ev.id,
            title: ev.title,
          })
        }
      ></LocationMarker>
    );
  });

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCcNATbXP2DOmRBl_JS30AcjMiq1RTtaV0' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },
  zoom: 6,
};

export default Map;
