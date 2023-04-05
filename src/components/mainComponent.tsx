import { useState } from 'react';
import '../style/button.css';
import Box from './boxComponent';
import Header from './header';

function Main() {
  const [count, setCount] = useState(0);
  return (
    <div className="Main block h-screen font-kopub font-bold">
      <Header />
      <div className="flex items-center justify-center">
        <Box />
        <div className="grid justify-center self-stretch p-5">
          <h1 className="m-2 flex h-80 w-96 items-center justify-center rounded-md bg-slate-200 p-5 text-4xl text-slate-700 shadow-lg">
            TESTB
          </h1>
          <button
            className="btn bg-slate-200"
            type="submit"
            onClick={() => setCount((x) => x + 1)}
          >
            click me!
            <div className="m-5 rounded-md bg-slate-50 p-1 shadow-sm">
              {count}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
