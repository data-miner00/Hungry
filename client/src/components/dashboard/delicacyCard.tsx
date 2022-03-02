import { FunctionalComponent, h } from 'preact';
import { TrayIcon, EthereumIcon, MoreIconVertical } from '../icons';
import { Props as IconProps } from '../icons';
import { useState, useRef, useEffect } from 'preact/hooks';

type Props = {
  imageSrc: string;
  name: string;
  type: string;
  description: string;
  price: number;
  availStartTime: Date;
  availEndTime: Date;
  waitingTime: number;
  servedBy: string;
  rating: number;
};

type OptionButton = {
  title: string;
  onClick: (event: Event) => Event;
  icon: FunctionalComponent<IconProps>;
};

type OptionLink = {
  title: string;
  href: string;
  icon: FunctionalComponent<IconProps>;
};

const DelicacyCard: FunctionalComponent<Props> = (props: Props) => {
  const [isOptionsMenuOpen, setIsOptionsMenuOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const toggleOptionMenu = () => setIsOptionsMenuOpen(!isOptionsMenuOpen);
  const handleClickOutside = (event: Event) => {
    //@ts-ignore
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOptionsMenuOpen(false);
    }
  };
  const optionButtons: Array<OptionButton> = [
    {
      title: 'Add to Tray',
      onClick: (event: Event) => event,
      icon: TrayIcon,
    },
    {
      title: 'Add to Wishlist',
      onClick: (event: Event) => event,
      icon: TrayIcon,
    },
    {
      title: 'Add to Favourites',
      onClick: (event: Event) => event,
      icon: TrayIcon,
    },
  ];

  const optionLinks: Array<OptionLink> = [
    {
      title: 'Review',
      href: '',
      icon: TrayIcon,
    },
    {
      title: 'Report Abuse',
      href: '',
      icon: TrayIcon,
    },
  ];

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <div class="w-80 rounded shadow">
      <div class="h-48 bg-white">
        <img
          class="h-full block mx-auto"
          src={props.imageSrc}
          alt={props.name}
        />
      </div>
      <div class="bg-gray-50 px-4 py-3 relative">
        <div class="flex items-center">
          <div class=" w-3 h-3 bg-gray-300 rounded-full overflow-hidden"></div>
          <div class="text-xs text-gray-500 ml-2">
            <span>{props.servedBy}</span>
          </div>
        </div>
        <button
          class="absolute top-4 right-4 rounded-full hover:bg-gray-100 p-2"
          onClick={toggleOptionMenu}
        >
          <MoreIconVertical class="block w-4 h-4" />
          <div class="relative">
            <div
              ref={ref}
              class={`absolute top-2 -left-2 w-48 bg-white rounded shadow py-2 z-10 ${
                isOptionsMenuOpen ? 'block' : 'hidden'
              }`}
              onClick={(event: Event) => event.stopPropagation()}
            >
              {optionButtons.map((optionButton) => (
                <button
                  class="py-2 flex items-center w-full hover:bg-gray-100 transition-colors duration-100 focus:bg-gray-100 px-3"
                  onClick={optionButton.onClick}
                >
                  <optionButton.icon class="w-5 h-5" />
                  <span class="block ml-2">{optionButton.title}</span>
                </button>
              ))}

              <hr class="my-1" />

              {optionLinks.map((optionLink) => (
                <a
                  class="py-2 flex items-center w-full hover:bg-gray-100 transition-colors duration-100 focus:bg-gray-100 px-3"
                  href={optionLink.href}
                >
                  <optionLink.icon class="w-5 h-5" />
                  <span className="block ml-2">{optionLink.title}</span>
                </a>
              ))}
            </div>
          </div>
        </button>

        <p class="font-bold text-lg text-gray-800">{props.name}</p>
        <div class="flex items-center mt-3">
          <EthereumIcon class="block w-4 h-4" />
          <span class="block ml-2 font-bold text-sm">{props.price}</span>
        </div>
      </div>
      <div class="h-1 w-full bg-gray-200">
        <div class="h-full bg-green-500"></div>
      </div>
    </div>
  );
};

export default DelicacyCard;
