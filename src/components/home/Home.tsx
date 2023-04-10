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
    <div className="text sm:text-md grid-rows-7 grid h-4/6 w-screen font-kopub text-xs font-bold sm:h-screen">
      <Header />
      <div className="row-span-6 flex h-full items-center justify-center self-center">
        <Bird />
        <div
          className="absolute z-10 h-full w-32 self-stretch"
          style={{ right: '5vw' }}
        >
          <MainButton
            dispatch={{ type: 'toggleNod' }}
            highlighted={movements.isNodding}
            text="끄덕끄덕"
            isFirst
            type="light"
          />
          <MainButton
            dispatch={{ type: 'toggleZoom' }}
            highlighted={cameraMoves.zoomIn}
            text="가까이"
            isFirst={false}
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
