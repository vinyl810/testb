import store from 'store';

export default function MainButton({
  dispatch,
  highlighted,
  text,
  type = 'light',
}: {
  dispatch: { type: string };
  highlighted: boolean;
  text: string;
  type: string;
}) {
  return (
    <div className="flex w-full items-center justify-center rounded-md p-5 pb-0">
      <button
        onClick={() => store.dispatch(dispatch)}
        type="button"
        className={`${
          highlighted
            ? 'outline outline-4 outline-offset-1 outline-slate-300 '
            : ''
        }${
          type === 'dark'
            ? 'bg-slate-500 text-white hover:bg-slate-600 active:bg-slate-700 '
            : 'bg-white text-slate-600 '
        }w-24 select-none rounded-md p-1 shadow-lg hover:bg-slate-200 active:bg-slate-300`}
      >
        {text}
      </button>
    </div>
  );
}
