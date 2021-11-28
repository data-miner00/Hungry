import { FunctionalComponent, h } from 'preact';
import { Link } from 'preact-router/match';
import logo from '../../assets/icons/logo_only_white.svg';

import sample_icon from '../../assets/icons/sample_icon.svg';
import orders_icon from '../../assets/icons/orders_icon.svg';
import dashboard_icon from '../../assets/icons/dashboard_icon.svg';
import explore_icon from '../../assets/icons/explore_icon.svg';
import search_icon from '../../assets/icons/search_icon.svg';
import collapse_icon from '../../assets/icons/collapse_icon.svg';

import '../../style/sidebar.css';
import { useState } from 'preact/hooks';

type SidebarLink = {
  title: string;
  href: string;
  icon: string;
};

const Sidebar: FunctionalComponent = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const sectionOneLinks: Array<SidebarLink> = [
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
  ];

  const sectionTwoLinks: Array<SidebarLink> = [
    {
      title: 'Orders',
      href: 'orders',
      icon: sample_icon,
    },
    {
      title: 'History',
      href: 'history',
      icon: sample_icon,
    },
    {
      title: 'Tray',
      href: 'tray',
      icon: orders_icon,
    },
  ];

  const sectionThreeLinks: Array<SidebarLink> = [
    {
      title: 'Wishlist',
      href: 'wishlist',
      icon: sample_icon,
    },
    {
      title: 'Favourite',
      href: 'favourite',
      icon: sample_icon,
    },
    {
      title: 'Coupons',
      href: 'coupons',
      icon: sample_icon,
    },
  ];

  return (
    <nav class={`sidebar ${isCollapsed ? 'collapse' : ''}`}>
      <div class="logo">
        <img class="logo--img" src={logo} alt="logo" width="45" />
        <span class="logo--text">Hungry</span>
      </div>
      <div class="search nav-item-base">
        <img
          class="search--icon"
          src={search_icon}
          alt="search icon"
          width="24"
        ></img>
        <input class="search--input" placeholder="Search..." />
      </div>
      <div class="seperator"></div>
      <div class="nav-container">
        {sectionOneLinks.map((link: SidebarLink) => (
          <Link
            href={link.href}
            class="nav-link nav-item-base"
            activeClassName="active"
          >
            <div class="flex items-center">
              <img src={link.icon} alt="sample" width="24" class="icon" />
              <span class="font-bold inline-block">{link.title}</span>
            </div>
          </Link>
        ))}
      </div>
      <div class="seperator"></div>
      <div class="nav-container">
        {sectionTwoLinks.map((link: SidebarLink) => (
          <Link
            href={link.href}
            class="nav-link nav-item-base"
            activeClassName="active"
          >
            <div class="flex items-center">
              <img src={link.icon} alt="sample" width="24" class="icon" />
              <span class="font-bold inline-block">{link.title}</span>
            </div>
          </Link>
        ))}
      </div>
      <div class="seperator"></div>
      <div class="nav-container">
        {sectionThreeLinks.map((link: SidebarLink) => (
          <Link
            href={link.href}
            class="nav-link nav-item-base"
            activeClassName="active"
          >
            <div class="flex items-center">
              <img src={link.icon} alt="sample" width="24" class="icon" />
              <span class="font-bold inline-block">{link.title}</span>
            </div>
          </Link>
        ))}
      </div>
      <div class="seperator"></div>
      <button
        class="collapse-button nav-item-base"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <img class="icon" src={collapse_icon} alt="collapse icon" />
        <span class="collapse-button--text font-bold inline-block">
          Collapse
        </span>
      </button>
    </nav>
  );
};

export default Sidebar;
