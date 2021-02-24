import { Icon } from "@iconify/react";
import alertCircleOutline from "@iconify-icons/mdi/alert-circle-outline";

const Header = () => {
  return (
    <header className="header">
      <h1>
        <Icon icon={alertCircleOutline} /> World Wide Disaster Tracker (Powered
        By NASA)
      </h1>
    </header>
  );
};

export default Header;
