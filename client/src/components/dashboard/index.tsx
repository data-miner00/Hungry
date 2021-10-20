import { ComponentChildren, FunctionalComponent, h } from 'preact';
import Sidebar from './sidebar';

type Props = {
  children: ComponentChildren;
};

const Dashboard: FunctionalComponent<Props> = ({ children }: Props) => (
  <div class="flex h-screen w-screen">
    <Sidebar />
    {children}
  </div>
);

export default Dashboard;
