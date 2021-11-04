import { FunctionalComponent, h } from 'preact';

const AppBar: FunctionalComponent = () => {
  return (
    <div class="h-16 bg-white border-b border-gray-50 border-solid flex justify-between items-center">
      <div class="">Dashboard</div>
      <div class="">Guska</div>
    </div>
  );
};

export default AppBar;
