import { FunctionalComponent, h } from 'preact';

type Props = {
  label: string;
  name: string;
  set: Function;
  type?: string;
};

const Input: FunctionalComponent<Props> = (props: Props) => {
  const { label, name, set, type } = props;

  return (
    <div>
      <label class="block text-lg font-semibold mb-1" htmlFor={name}>
        {label}
      </label>
      <input
        type={type ?? 'text'}
        name={name}
        class="
          border block
          border-gray-200
          border-solid
          rounded-sm
          px-3
          py-2 mb-5
          w-full
          focus:outline-none focus:ring focus:border-blue-300
        "
        autoComplete="false"
        onInput={(e) => set((e.target as HTMLInputElement).value)}
      />
    </div>
  );
};

export default Input;
