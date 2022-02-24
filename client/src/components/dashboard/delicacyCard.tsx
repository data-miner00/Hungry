import { FunctionalComponent, h } from 'preact';
import ethereumIcon from '../../assets/icons/ethereum_smol.svg';
import moreVerticalIcon from '../../assets/icons/three_dot_vertical.svg';

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

const DelicacyCard: FunctionalComponent<Props> = (props: Props) => {
  return (
    <div class="w-80 rounded overflow-hidden shadow hover:-translate-y-1 transition-transform duration-150">
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
        <button class="absolute top-4 right-4 rounded-full hover:bg-gray-100 p-2">
          <img class="block w-4 h-4" src={moreVerticalIcon} alt="more icon" />
        </button>
        <p class="font-bold text-lg text-gray-800">{props.name}</p>
        <div class="flex items-center mt-3">
          <img src={ethereumIcon} class="block w-4 h-4" alt="Ethereum Icon" />
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
