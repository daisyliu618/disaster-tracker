import { Icon } from '@iconify/react';
import fire from '@iconify/icons-mdi/fire-alert';


const Header = () => {
    return (
        <header className="header">
            <h1><Icon icon={fire} /> Wild Fire Tracker (Powered By NASA)</h1>
        </header>
    )
}

export default Header
