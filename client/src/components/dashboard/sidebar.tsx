import { FunctionalComponent, h } from 'preact';
import { Link } from 'preact-router/match';
import logo from '../../assets/hungry_white.svg';

import sample_icon from '../../assets/icons/sample_icon.svg';
import orders_icon from '../../assets/icons/orders_icon.svg';
import dashboard_icon from '../../assets/icons/dashboard_icon.svg';
import explore_icon from '../../assets/icons/explore_icon.svg';

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
    <div
      class="w-80 flex flex-col justify-start items-center shadow-xl"
      style="background: #4a4e69;"
    >
      <div class="px-4 py-2">
        <img src={logo} alt="logo" />
      </div>
      <div class="w-full mt-10">
        {links.map((link: SidebarLink) => (
          <Link
            href={link.href}
            class="flex p-6 text-white items-center justify-center transition-all duration-200 hover:bg-indigo-500"
          >
            <div class="flex w-32 items-center">
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
    </div>
  );
};

export default Sidebar;
