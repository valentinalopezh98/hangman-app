function Result({ win, loose, restartGame, word }) {
  return (
    <div className="flex flex-col items-center gap-2 py-1.5">
      <div>{win && <span className="text-green-500 text-lg">Ganaste!</span>}</div>
      <div>
        {loose && (
          <span className="text-pink-700 text-lg" >
            Perdiste😞 la palabra era {word}
          </span>
        )}
      </div>
      <div>
        {(win || loose) && (
          <button
            onClick={restartGame}
            className="nunito-bold p-2 border-1 border-white rounded-full w-3xs  hover:bg-neutral-800 cursor-pointer hover:scale-105 transition-transform "
          >
            Volver a jugar
          </button>
        )}
      </div>
    </div>
  );
}

export default Result;
