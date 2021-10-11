import { FunctionalComponent, h } from 'preact';

interface Props {
  id: string;
}

const DelicacyDetail: FunctionalComponent<Props> = (props: Props) => {
  const { id } = props;

  return (
    <div>
      <div>{id}</div>
      <div>This represents the image </div>
      <div>Name</div>
      <div>Type</div>
      <div>Description</div>
      <div>Price</div>
      <div>Avail start time</div>
      <div>Avail end time</div>
      <div>Waiting time</div>
      <div>Order now</div>
      <input type="number" name="quantity" id="" />
    </div>
  );
};

export default DelicacyDetail;
