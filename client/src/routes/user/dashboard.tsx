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
        <input
          class="rounded border border-gray-200 px-3 py-2 flex-grow"
          placeholder="Search"
        />
        <div class="rounded border border-gray-200 px-3 py-2 basis-72">
          Category
        </div>
        <div class="rounded border border-gray-200 px-3 py-2 basis-60">
          Sorting
        </div>
        <div class="rounded border border-gray-200 flex">
          <button class="block py-2 px-3 border-r border-gray-200 border-solid hover:bg-gray-100">
            <Grid2by2 class="w-5 h-5 text-gray-500" />
          </button>
          <button class="block py-2 px-3 hover:bg-gray-100">
            <Grid3by3 class="w-5 h-5 text-gray-500" />
          </button>
        </div>
      </div>
      <div class="mt-5 flex flex-wrap gap-5 pb-5">
        {delicacies.map((delicacy) => (
          <DelicacyCard
            id={delicacy.id}
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
