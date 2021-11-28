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
      <div class="overflow-auto">{children}</div>
    </div>
  </div>
);

export default Dashboard;
