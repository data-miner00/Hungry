import { FunctionalComponent, h } from 'preact';

type Props = {
  label: string;
  name: string;
  set: Function;
};

const Input: FunctionalComponent<Props> = (props: Props) => {
  const { label, name, set } = props;

  return (
    <div>
      <label class="block" htmlFor={name}>
        {label}
      </label>
      <input
        type="text"
        name={name}
        class="border block border-gray-200 border-solid rounded-sm px-2 py-1"
        onInput={(e) => set((e.target as HTMLInputElement).value)}
      />
    </div>
  );
};

export default Input;
