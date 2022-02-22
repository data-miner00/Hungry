import { FunctionalComponent, h } from 'preact';

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
};

const DelicacyCard: FunctionalComponent<Props> = (props: Props) => {
  return (
    <div class="bg-gray-300 w-80 h-48">
      <div class="w-full h-32 bg-black"></div>
      <p class=" font-bold text-lg">{props.name}</p>
    </div>
  );
};

export default DelicacyCard;
