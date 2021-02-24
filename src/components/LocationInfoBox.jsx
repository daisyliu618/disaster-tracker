const LocationInfoBox = ({ info }) => {

  return (
    <div className='location-info'>
      <h2>Disaster Info</h2>
      <ul>
      <li>
          DISASTER: <strong>{info.disaster.toUpperCase()}</strong>
        </li>
        <li>
          ID: <strong>{info.id}</strong>
        </li>
        <li>
          TITLE: <strong>{info.title}</strong>
        </li>
      </ul>
    </div>
  );
};

export default LocationInfoBox;
