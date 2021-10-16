import { FunctionComponent, h } from 'preact';

type Props = {
  text: string;
};

const SubmitBtn: FunctionComponent<Props> = (props: Props) => {
  const { text } = props;

  return (
    <button type="submit" class="block bg-gray-50 px-4 py-2">
      {text}
    </button>
  );
};

export default SubmitBtn;
