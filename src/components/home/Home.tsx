import { useSelector } from 'react-redux';
import Bird from 'components/bird/BirdComponent';
import MainButton from 'components/home/Button';
import Header from 'components/home/Header';
import githubImg from 'assets/img/github.png';

function Main() {
  const movements = useSelector(
    (state: { movements: { isNodding: boolean } }) => state.movements,
  );
  const cameraMoves = useSelector(
    (state: { cameraMoves: { zoomIn: boolean } }) => state.cameraMoves,
  );
  return (
    <div className="text sm:text-md grid-rows-7 grid h-screen font-kopub text-xs font-bold">
      <Header />
      <div className="row-span-6 flex h-full items-center justify-center self-center">
        <Bird />
        <div className="z-10 -ml-32 mr-5 h-full w-32 self-stretch">
          <MainButton
            dispatch={{ type: 'toggleNod' }}
            highlighted={movements.isNodding}
            text="끄덕끄덕"
            type="light"
          />
          <MainButton
            dispatch={{ type: 'toggleZoom' }}
            highlighted={cameraMoves.zoomIn}
            text="가까이"
            type="dark"
          />
        </div>
      </div>
      <div className="mt-5 flex h-8 w-full items-center justify-center self-end bg-slate-300 font-thin">
        <img className="mr-1" src={githubImg} width="15px" alt="Github" />
        vinyl810
      </div>
    </div>
  );
}

export default Main;
