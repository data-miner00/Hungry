import { FunctionComponent, h } from 'preact';

type Props = {
  text: string;
};

const SubmitBtn: FunctionComponent<Props> = (props: Props) => {
  const { text } = props;

  return (
    <button
      type="submit"
      class="
        block text-white font-bold px-4 py-2 mt-3
        hover:opacity-90
      "
      style="background-color: #22223B;"
    >
      {text}
    </button>
  );
};

export default SubmitBtn;
