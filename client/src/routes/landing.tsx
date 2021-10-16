import { FunctionalComponent, h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { SERVER_BASE_URL } from '../env';
import logo from '../assets/hungry_black.svg';
import Input from '../components/forms/input';
import SubmitBtn from '../components/forms/submit';
import { Link } from 'preact-router/match';

const Landing: FunctionalComponent = () => {
  const [handle, setHandle] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const parseBody = () => ({
    handle,
    password,
  });

  const login = (event: Event) => {
    event.preventDefault();

    fetch(SERVER_BASE_URL + '/login', {
      method: 'post',
      body: JSON.stringify(parseBody()),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res: Response) => {
        if (!res.ok) {
          throw new Error('Username or password does not match.');
        }
        console.log('login successful');
      })
      .catch((error: Error) => {
        setError(error.message);
      });
  };

  return (
    <div class="flex justify-center items-center h-screen">
      <div class="flex flex-col w-96">
        <div class="mx-auto p-6">
          <img src={logo} alt="logo" />
        </div>
        <form onSubmit={login} class="bg-gray-100 flex flex-col p-5 rounded">
          <Input label="Username" name="username" set={setHandle} />
          <Input
            label="Password"
            name="password"
            set={setPassword}
            type="password"
          />

          {error && <p class="text-red-500">Error Occurred: {error}</p>}

          <SubmitBtn text="Login" />
        </form>
        <Link href="/register">
          <p class="text-center mt-4 text-gray-400 hover:text-gray-700">
            Not a member yet? Join now
          </p>
        </Link>
        <Link href="/">
          <p class="text-center mt-2 text-gray-400 hover:text-gray-700">
            Forgot passowrd?
          </p>
        </Link>

        <p class="text-sm text-center text-gray-400 mt-24">
          Hungry &copy; Brute Kyle Foundation 1999-2030
        </p>
      </div>
    </div>
  );
};

export default Landing;
