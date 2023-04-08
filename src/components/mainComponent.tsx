import 'style/button.css';
import { useSelector } from 'react-redux';
import Bird from 'components/bird/BirdComponent';
import Header from 'components/header';
import store from 'store';

function Main() {
  const movements = useSelector(
    (state: { movements: { isNodding: boolean } }) => state.movements,
  );
  return (
    <div className="Main block h-screen font-kopub font-bold">
      <Header />
      <div className="flex h-5/6 items-center justify-center">
        <Bird />
        <div className="ml-5 mr-5 h-full w-1/4 self-stretch">
          <button
            onClick={() => store.dispatch({ type: 'toggleNod' })}
            type="button"
            className={`${
              movements.isNodding
                ? 'outline outline-4 outline-offset-1 outline-red-300 '
                : ''
            }flex w-full cursor-pointer items-center justify-center rounded-md bg-slate-100 p-5 shadow-md hover:bg-slate-200 active:bg-slate-300`}
          >
            <div className="rounded-md bg-white p-1 text-slate-600 shadow-sm">
              끄덕이기 (nod)
            </div>
          </button>
          <div className="mt-5 flex cursor-pointer items-center justify-center rounded-md bg-slate-100 p-5 shadow-md">
            <div className="rounded-md bg-slate-50 p-1 text-slate-600 shadow-sm">
              걷기 (walk)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
