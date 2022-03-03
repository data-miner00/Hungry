import { FunctionalComponent, h } from 'preact';
import { useState } from 'preact/hooks';
import { BackIcon, BellIcon, MailIcon, GlobeIcon } from '../icons';
import { useSelector } from 'react-redux';

const AppBar: FunctionalComponent = () => {
  const [showBack, setShowBack] = useState<boolean>(true);
  //@ts-ignore
  const title = useSelector((state) => state.title);

  return (
    <div class="h-20 bg-white border-b border-gray-50 border-solid flex justify-between items-center shadow-sm px-8">
      <div class="flex items-center">
        {showBack && (
          <button
            class="block p-3 rounded-full hover:bg-gray-100 transition-colors duration-200"
            title="Go back"
          >
            <BackIcon class="w-5 h-5" />
          </button>
        )}
        <div>
          <span class="ml-5 text-2xl font-semibold">{title}</span>
        </div>
      </div>
      <div class="flex items-center pr-5">
        <a href="" class="block">
          <BellIcon class="w-6 h-6" />
        </a>
        <a href="" class="block ml-7">
          <MailIcon class="w-6 h-6" />
        </a>
        <button
          class="flex rounded-full bg-gray-100 items-center px-3 py-2 ml-7"
          title="language"
        >
          <GlobeIcon class="w-6 h-6" />
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
