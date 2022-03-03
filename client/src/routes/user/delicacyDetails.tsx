import { FunctionalComponent, h } from 'preact';
import DashboardLayout from '../../components/dashboard';

type Props = {
  id: string;
};

const DelicacyDetail: FunctionalComponent<Props> = (props: Props) => {
  const { id } = props;

  return (
    <DashboardLayout>
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
    </DashboardLayout>
  );
};

export default DelicacyDetail;
