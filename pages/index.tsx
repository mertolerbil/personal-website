import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <svg className="w-2/12" viewBox="0 0 512 512">
        <circle fill="#cad8dd" cx="256" cy="256" r="217.6" />
        <path
          fill="#bdcdd1"
          d="M374.48,73.52A216.51,216.51,0,0,1,409.6,192c0,120.18-97.42,217.6-217.6,217.6A216.5,216.5,0,0,1,73.52,374.48,217.36,217.36,0,0,0,256,473.6c120.18,0,217.6-97.42,217.6-217.6A217.36,217.36,0,0,0,374.48,73.52Z"
        />
        <circle fill="#a1b9bf" cx="377.6" cy="275.2" r="44.8" />
        <circle fill="#a1b9bf" cx="281.6" cy="140.8" r="38.4" />
        <circle fill="#a1b9bf" cx="179.2" cy="332.8" r="38.4" />
        <circle fill="#a1b9bf" cx="147.2" cy="249.6" r="19.2" />
        <circle fill="#a1b9bf" cx="262.4" cy="339.2" r="19.2" />
      </svg>
      <div className="text-4xl text-gray-600 my-5">Coming soon</div>
    </div>
  );
};

export default Home;
