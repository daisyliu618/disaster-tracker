import { Icon, InlineIcon } from "@iconify/react";
import fire from "@iconify/icons-mdi/fire-alert";
import weatherWindy from "@iconify-icons/mdi/weather-windy";
import snowflakeMelt from "@iconify-icons/mdi/snowflake-melt";
import thermometerHigh from "@iconify-icons/mdi/thermometer-high";

export const IconMapper = ({ disaster }) => {
  const disasters = {
    wildfires: fire,
    volcanoes: thermometerHigh,
    seaLakeIce: snowflakeMelt,
    severeStorms: weatherWindy,
  };

  return <Icon icon={disasters[disaster]} className="location-icon" />;
};

export default IconMapper;
