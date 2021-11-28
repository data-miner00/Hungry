import { FunctionalComponent, h } from 'preact';
import { Link } from 'preact-router/match';
import logo from '../../assets/hungry_white.svg';

import sample_icon from '../../assets/icons/sample_icon.svg';
import orders_icon from '../../assets/icons/orders_icon.svg';
import dashboard_icon from '../../assets/icons/dashboard_icon.svg';
import explore_icon from '../../assets/icons/explore_icon.svg';

import '../../style/sidebar.css';

type SidebarLink = {
  title: string;
  href: string;
  icon: string;
};

const Sidebar: FunctionalComponent = () => {
  const links: Array<SidebarLink> = [
    {
      title: 'Dashboard',
      href: '',
      icon: dashboard_icon,
    },
    {
      title: 'Explore',
      href: 'explore',
      icon: explore_icon,
    },
    {
      title: 'Coupons',
      href: 'coupons',
      icon: sample_icon,
    },
    {
      title: 'Orders',
      href: 'orders',
      icon: orders_icon,
    },
  ];

  return (
    <nav class="sidebar">
      <div class="logo">
        <img src={logo} alt="logo" />
      </div>
      <div class="nav-container">
        {links.map((link: SidebarLink) => (
          <Link href={link.href} class="nav-link">
            <div class="nav-link-inner">
              <div>
                <img src={link.icon} alt="sample" width="20" class="mr-3" />
              </div>
              <div>
                <span class="font-bold">{link.title}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Sidebar;
