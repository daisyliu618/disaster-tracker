import { Icon } from '@iconify/react';
import fire from '@iconify/icons-mdi/fire-alert';


export const LocationMarker = ({ lat, lng, onClick }) => {
  return (
    <div className='location-marker' onClick={onClick}>
      <Icon icon={fire} className='location-icon' />
    </div>
  );
};

export default LocationMarker;
