import React, { useEffect, useState } from "react";

const LocationInfoBox = ({ info }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true);
    const t = setTimeout(() => {
      setVisible(false);
    }, 5000);
    return () => {
      clearTimeout(t);
    };
  }, [info]);

  return (
    <div
      className="location-info"
      style={{ display: visible ? undefined : "none" }}
    >
      <h2>Disaster Info</h2>
      <ul>
        <li>
          DISASTER: <strong>{info.disaster}</strong>
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