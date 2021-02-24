import IconMapper from "./IconMapper";

export const LocationMarker = ({ lat, lng, onClick, disaster }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      <IconMapper disaster={disaster} />
    </div>
  );
};

export default LocationMarker;
