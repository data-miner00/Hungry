import { FunctionalComponent, h } from 'preact';

const Home: FunctionalComponent = () => {
  return (
    <div>
      <h1 class="text-gray-400 text-lg font-bold">Home</h1>
      <p>This is the Home component.</p>

      <form action="" method="POST" encType="multipart/form-data">
        <input type="file" name="" id="" />
        <button type="submit" name="submit">
          Upload images
        </button>
      </form>
    </div>
  );
};

export default Home;
