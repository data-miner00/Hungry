import { FunctionalComponent, h } from 'preact';
import { Link } from 'preact-router/match';

const Header: FunctionalComponent = () => {
  return (
    <div
      className="
      flex
      py-4
      px-6
      justify-between
      border-b-2
      border-gray-100
      border-solid
      items-center"
    >
      <div className="text-3xl font-bold">Hungry</div>
      <div className="">
        <Link href="/register">Register</Link>
      </div>
    </div>
  );
};

export default Header;
