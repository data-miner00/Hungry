import { FunctionalComponent, h } from 'preact';
import { useState } from 'preact/hooks';
import back_icon from '../../assets/icons/back_icon.svg';
import bell_icon from '../../assets/icons/bell_icon.svg';
import mail_icon from '../../assets/icons/mail_icon.svg';
import globe_icon from '../../assets/icons/globe_icon.svg';

const AppBar: FunctionalComponent = () => {
  const [showBack, setShowBack] = useState<boolean>(true);

  return (
    <div class="h-20 bg-white border-b border-gray-50 border-solid flex justify-between items-center shadow-sm px-8">
      <div class="flex items-center">
        {showBack && (
          <button
            class="block p-2 rounded-full hover:bg-gray-200"
            title="Go back"
          >
            <img height="20" width="20" src={back_icon} alt="back icon svg" />
          </button>
        )}
        <div>
          <span class="ml-5 text-2xl font-semibold">Dashboard</span>
        </div>
      </div>
      <div class="flex items-center pr-5">
        <a href="" class="block">
          <img
            src={bell_icon}
            alt="bell icon"
            title="notification"
            height="24"
            width="24"
          />
        </a>
        <a href="" class="block ml-7">
          <img
            src={mail_icon}
            alt="mail icon"
            title="mailbox"
            height="24"
            width="24"
          />
        </a>
        <button
          class="flex rounded-full bg-gray-100 items-center px-3 py-2 ml-7"
          title="language"
        >
          <img
            class="block"
            src={globe_icon}
            alt="globe icon"
            height="24"
            width="24"
          />
          <span class="block ml-3">English</span>
        </button>
        <button class="flex items-center ml-7">
          <div class="rounded-full w-8 h-8 bg-purple-200"></div>
          <div class="ml-3">
            <span>Guska Meryn</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default AppBar;
