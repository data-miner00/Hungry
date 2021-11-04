import { ComponentChildren, FunctionalComponent, h } from 'preact';
import Sidebar from './sidebar';
import AppBar from './appbar';

type Props = {
  children: ComponentChildren;
};

const Dashboard: FunctionalComponent<Props> = ({ children }: Props) => (
  <div class="flex h-screen w-screen">
    <Sidebar />
    <div class="flex-1">
      <AppBar />
      {children}
    </div>
  </div>
);

export default Dashboard;
