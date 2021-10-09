import { FunctionalComponent, h } from 'preact';
import { useState } from 'preact/hooks';

const Dashboard: FunctionalComponent = () => {
  const [delicacies, setDelicacies] = useState([1, 2, 3, 4]);

  return (
    <div>
      <h1>User dashboard</h1>
      {delicacies.map((delicacy) => {
        return (
          <div>
            <div>This represents the image </div>
            <div>Name</div>
            <div>Type</div>
            <div>Description</div>
            <div>Price</div>
            <div>Avail start time</div>
            <div>Avail end time</div>
            <div>Waiting time</div>
            <div>Order now</div>
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;
