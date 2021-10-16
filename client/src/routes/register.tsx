import { FunctionalComponent, h } from 'preact';
import { useState } from 'preact/hooks';
import { SERVER_BASE_URL } from '../env';
import Input from '../components/forms/input';
import SubmitBtn from '../components/forms/submit';
import logo from '../assets/hungry_black.svg';
import { Link } from 'preact-router/match';
import Footer from '../components/forms/footer';

const Register: FunctionalComponent = () => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [handle, setHandle] = useState('');
  const [email, setEmail] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirm] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

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
    event.preventDefault();
    fetch(SERVER_BASE_URL + '/register', {
      method: 'post',
      body: JSON.stringify(parseBody()),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(async (res: Response) => {
        console.log(res);

        const data = await res.json();
        console.log(data);

        if (!res.ok) {
          throw new Error(res.statusText);
        }

        return data;
      })
      .then((jsonRes) => {
        console.log(jsonRes);
      })
      .catch((error: Error) => {
        setError(error.message);
      });
  };

  return (
    <div class="flex justify-center items-center min-h-screen">
      <div class="flex flex-col w-96">
        <div class="mx-auto p-6">
          <img src={logo} alt="logo" />
        </div>
        <form onSubmit={register} class="bg-gray-100 flex flex-col p-5 rounded">
          <div class="flex gap-2">
            <Input label="First name" name="fname" set={setFname} />
            <Input label="Last name" name="lname" set={setLname} />
          </div>
          <Input label="Username" name="handle" set={setHandle} />
          <Input label="Email" name="email" set={setEmail} />
          <Input label="Phone Number" name="phone" set={setPhoneNumber} />
          <Input
            label="Password"
            name="password"
            set={setPassword}
            type="password"
          />
          <Input
            label="Confirm password"
            name="confirm"
            set={setPasswordConfirm}
            type="password"
          />

          {error && <p class="text-red-500">Error Occurred: {error}</p>}

          <SubmitBtn text="Sign up" />
        </form>
        <Link href="/">
          <p class="text-center mt-4 text-gray-400 hover:text-gray-700">
            Already have an account? Sign in
          </p>
        </Link>

        <Footer />
      </div>
    </div>
  );
};

export default Register;
