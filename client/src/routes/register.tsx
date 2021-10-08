import { FunctionalComponent, h } from 'preact';
import { useState } from 'preact/hooks';
import { SERVER_BASE_URL } from '../env';

const Register: FunctionalComponent = () => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [handle, setHandle] = useState('');
  const [email, setEmail] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirm] = useState('');
  const [error, setError] = useState();

  const parseBody = () => ({
    fname,
    lname,
    handle,
    email,
    phone_number,
    password,
    password_confirmation,
  });

  const register = (event: Event) => {
    console.log(JSON.stringify(parseBody()));
    event.preventDefault();
    fetch(SERVER_BASE_URL + '/register', {
      method: 'post',
      body: JSON.stringify(parseBody()),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((res: Response) => {
        console.log(res);
      })
      .catch((err) => {
        setError(err);
        console.error(err);
      });
  };

  return (
    <div>
      <form onSubmit={register}>
        <input
          name="fname"
          type="text"
          placeholder="First name"
          onInput={(e) => setFname((e.target as HTMLInputElement).value)}
        />
        <input
          name="lname"
          type="text"
          placeholder="Last name"
          onInput={(e) => setLname((e.target as HTMLInputElement).value)}
        />
        <input
          name="handle"
          type="text"
          placeholder="Username"
          onInput={(e) => setHandle((e.target as HTMLInputElement).value)}
        />
        <input
          name="email"
          type="text"
          placeholder="Email"
          onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
        />
        <input
          name="phone_number"
          type="text"
          placeholder="Phone number"
          onInput={(e) => setPhoneNumber((e.target as HTMLInputElement).value)}
        />
        <input
          name="password"
          type="password"
          id=""
          placeholder="Password"
          onInput={(e) => setPassword((e.target as HTMLInputElement).value)}
        />
        <input
          name="password_confirmation"
          type="password"
          id=""
          placeholder="Confirm Password"
          onInput={(e) =>
            setPasswordConfirm((e.target as HTMLInputElement).value)
          }
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
