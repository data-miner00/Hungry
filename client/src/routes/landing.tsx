import { FunctionalComponent, h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { SERVER_BASE_URL } from '../env';

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
        console.log(res);
      })
      .catch((error) => {
        setError(error);
        console.error(error);
      });
  };

  const onError = () => !!error && <p>Error Occurred: {error}</p>;

  return (
    <div className="">
      <form onSubmit={login} class="bg-gray-100 flex flex-column">
        <input
          type="text"
          name="username"
          class="border border-gray-200 border-solid rounded-sm px-2 py-1"
          onInput={(e) => setHandle((e.target as HTMLInputElement).value)}
        />

        <input
          type="password"
          name="password"
          class="border border-gray-200 border-solid rounded-sm px-2 py-1"
          onInput={(e) => setPassword((e.target as HTMLInputElement).value)}
        />

        <button type="submit" class="bg-gray-50 px-4 py-2">
          Login
        </button>
      </form>
    </div>
  );
};

export default Landing;
