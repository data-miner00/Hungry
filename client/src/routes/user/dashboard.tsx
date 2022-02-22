import { FunctionalComponent, h } from 'preact';
import { useState } from 'preact/hooks';
import DashboardLayout from '../../components/dashboard';
import DelicacyCard from '../../components/dashboard/delicacyCard';
import DelicacyCardDataModel from '../../data/DelicacyCardDataModel';

const Dashboard: FunctionalComponent = () => {
  const [delicacies, setDelicacies] = useState([
    new DelicacyCardDataModel(),
    new DelicacyCardDataModel(),
    new DelicacyCardDataModel(),
    new DelicacyCardDataModel(),
  ]);

  return (
    <DashboardLayout>
      <p class="text-gray-500 text-xs">Last updated on 24 March 2020, 9.45PM</p>
      <div class="mt-5 flex flex-wrap gap-4">
        {delicacies.map((delicacy) => (
          <DelicacyCard
            imageSrc={delicacy.imageSrc}
            name={delicacy.name}
            type={delicacy.type}
            description={delicacy.description}
            price={delicacy.price}
            availEndTime={delicacy.availEndTime}
            availStartTime={delicacy.availStartTime}
            waitingTime={delicacy.waitingTime}
            servedBy={delicacy.servedBy}
          />
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
