import { FunctionalComponent, h } from 'preact';
import back_icon from '../../assets/icons/back_icon.svg';

const AppBar: FunctionalComponent = () => {
  return (
    <div class="h-20 bg-white border-b border-gray-50 border-solid flex justify-between items-center shadow-sm px-8">
      <div class="flex items-center">
        <button
          class="block p-2 rounded-full hover:bg-gray-200"
          title="Go back"
        >
          <img height="20" width="20" src={back_icon} alt="back icon svg" />
        </button>
        <div>
          <span class="ml-5 text-2xl font-semibold">Dashboard</span>
        </div>
      </div>
      <div class="flex">Guska</div>
    </div>
  );
};

export default AppBar;
