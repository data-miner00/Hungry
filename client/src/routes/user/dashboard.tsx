import { FunctionalComponent, h } from 'preact';
import { useState } from 'preact/hooks';
import DashboardLayout from '../../components/dashboard';
import DelicacyCard from '../../components/dashboard/delicacyCard';
import DelicacyCardDataModel from '../../data/DelicacyCardDataModel';
import { Grid2by2, Grid3by3 } from '../../components/icons';

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
      <div class="flex gap-2 mt-2">
        <div class="rounded border border-gray-200 px-3 py-2 flex-grow">
          Search
        </div>
        <div class="rounded border border-gray-200 px-3 py-2 basis-72">
          Category
        </div>
        <div class="rounded border border-gray-200 px-3 py-2 basis-60">
          Sorting
        </div>
        <div class="rounded border border-gray-200 flex">
          <button class="block p-2 border-r border-gray-200 border-solid hover:bg-gray-100">
            <Grid2by2 class="w-7 h-7 text-gray-700" />
          </button>
          <button class="block p-2 hover:bg-gray-100">
            <Grid3by3 class="w-7 h-7 text-gray-700" />
          </button>
        </div>
      </div>
      <div class="mt-5 flex flex-wrap gap-5 pb-5">
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
            rating={5}
          />
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
