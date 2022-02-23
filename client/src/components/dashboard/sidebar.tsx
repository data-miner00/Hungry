import { FunctionalComponent, h } from 'preact';
import { Link } from 'preact-router/match';
import logo from '../../assets/icons/logo_only_white.svg';

import sampleIcon from '../../assets/icons/sample_icon.svg';
import ordersIcon from '../../assets/icons/orders_icon.svg';
import dashboardIcon from '../../assets/icons/dashboard_icon.svg';
import exploreIcon from '../../assets/icons/explore_icon.svg';
import searchIcon from '../../assets/icons/search_icon.svg';
import collapseIcon from '../../assets/icons/collapse_icon.svg';

import '../../style/sidebar.css';
import { useState, useRef } from 'preact/hooks';

type SidebarLink = {
  title: string;
  href: string;
  icon: string;
};

const Sidebar: FunctionalComponent = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const searchInputEl = useRef<HTMLInputElement>(null);

  const sectionOneLinks: Array<SidebarLink> = [
    {
      title: 'Dashboard',
      href: '',
      icon: dashboardIcon,
    },
    {
      title: 'Explore',
      href: 'explore',
      icon: exploreIcon,
    },
  ];

  const sectionTwoLinks: Array<SidebarLink> = [
    {
      title: 'Orders',
      href: 'orders',
      icon: sampleIcon,
    },
    {
      title: 'History',
      href: 'history',
      icon: sampleIcon,
    },
    {
      title: 'Tray',
      href: 'tray',
      icon: ordersIcon,
    },
  ];

  const sectionThreeLinks: Array<SidebarLink> = [
    {
      title: 'Wishlist',
      href: 'wishlist',
      icon: sampleIcon,
    },
    {
      title: 'Favourite',
      href: 'favourite',
      icon: sampleIcon,
    },
    {
      title: 'Coupons',
      href: 'coupons',
      icon: sampleIcon,
    },
  ];

  return (
    <nav class={`sidebar ${isCollapsed ? 'collapse' : ''}`}>
      <div class="logo">
        <img class="logo--img" src={logo} alt="logo" width="45" />
        <span class="logo--text">Hungry</span>
      </div>
      <div
        class="search nav-item-base"
        onClick={() => {
          if (isCollapsed) {
            setIsCollapsed(false);
          }
          searchInputEl.current?.focus();
        }}
      >
        <img
          class="search--icon"
          src={searchIcon}
          alt="search icon"
          width="24"
        ></img>
        <input
          ref={searchInputEl}
          class="search--input"
          placeholder="Search..."
        />
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
        <img
          class={`icon transition-transform duration-500 ${
            isCollapsed ? 'transform rotate-180' : ''
          }`}
          src={collapseIcon}
          alt="collapse icon"
        />
        <span class="collapse-button--text font-bold inline-block">
          Collapse
        </span>
      </button>
    </nav>
  );
};

export default Sidebar;
