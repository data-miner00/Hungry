import { FunctionalComponent, h } from 'preact';
import { Link } from 'preact-router/match';
import logo from '../../assets/icons/logo_only_white.svg';

import searchIcon from '../../assets/icons/search_icon.svg';
import collapseIcon from '../../assets/icons/collapse_icon.svg';

import { Props, TrayIcon } from '../icons';

import '../../style/sidebar.css';
import { useState, useRef } from 'preact/hooks';

type SidebarLink = {
  title: string;
  href: string;
  icon: FunctionalComponent<Props>;
};

const Sidebar: FunctionalComponent = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const searchInputEl = useRef<HTMLInputElement>(null);

  const sectionOneLinks: Array<SidebarLink> = [
    {
      title: 'Dashboard',
      href: '',
      icon: TrayIcon,
    },
    {
      title: 'Explore',
      href: 'explore',
      icon: TrayIcon,
    },
  ];

  const sectionTwoLinks: Array<SidebarLink> = [
    {
      title: 'Orders',
      href: 'orders',
      icon: TrayIcon,
    },
    {
      title: 'History',
      href: 'history',
      icon: TrayIcon,
    },
    {
      title: 'Tray',
      href: 'tray',
      icon: TrayIcon,
    },
  ];

  const sectionThreeLinks: Array<SidebarLink> = [
    {
      title: 'Wishlist',
      href: 'wishlist',
      icon: TrayIcon,
    },
    {
      title: 'Favourite',
      href: 'favourite',
      icon: TrayIcon,
    },
    {
      title: 'Coupons',
      href: 'coupons',
      icon: TrayIcon,
    },
  ];

  return (
    <nav class={`sidebar ${isCollapsed ? 'collapse' : ''}`}>
      <div class="logo">
        <img src={logo} alt="logo" width="45" />
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
            <div class="flex items-center ">
              <link.icon class="mr-3 w-6 h-6" />
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
              <link.icon class="mr-3 w-6 h-6" />
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
              <link.icon class="mr-3 w-6 h-6" />
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
