import { FunctionalComponent, h } from 'preact';

const AppBar: FunctionalComponent = () => {
  return (
    <div class="h-16 bg-white border-b border-gray-50 border-solid flex justify-between items-center shadow-sm px-8">
      <div class="flex">Dashboard</div>
      <div class="flex">Guska</div>
    </div>
  );
};

export default AppBar;
