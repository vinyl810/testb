import { useSelector } from 'react-redux';
import Bird from 'components/bird/BirdComponent';
import Header from 'components/Header';
import store from 'store';

function Main() {
  const movements = useSelector(
    (state: { movements: { isNodding: boolean } }) => state.movements,
  );
  return (
    <div className="text sm:text-md block h-screen font-kopub text-xs font-bold">
      <Header />
      <div className="flex h-5/6 items-center justify-center">
        <Bird />
        <div className="z-10 -ml-32 mr-5 h-full w-32 self-stretch">
          <div className="flex w-full items-center justify-center rounded-md p-5">
            <button
              onClick={() => store.dispatch({ type: 'toggleNod' })}
              type="button"
              className={`${
                movements.isNodding
                  ? 'outline outline-4 outline-offset-1 outline-slate-300 '
                  : ''
              }w-24 select-none rounded-md bg-white p-1 text-slate-600 shadow-lg hover:bg-slate-200 active:bg-slate-300`}
            >
              끄덕끄덕
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
