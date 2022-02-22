import { ComponentChildren, FunctionalComponent, h } from 'preact';
import Sidebar from './sidebar';
import AppBar from './appbar';

type Props = {
  children: ComponentChildren;
};

const Dashboard: FunctionalComponent<Props> = ({ children }: Props) => (
  <div class="flex h-screen w-full">
    <Sidebar />
    <div class="flex-1 flex flex-col">
      <AppBar />
      <div class="overflow-auto w-full ">
        <div class="w-full md:w-3/4 mx-auto pt-8">{children}</div>
      </div>
    </div>
  </div>
);

export default Dashboard;
