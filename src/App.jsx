import { useEffect, useState } from "react";
import Letters from "./components/Letters";
import { letters as dataLetters } from "./data/letters";
import Header from "./components/Header";
import { words as dataWords } from "./data/words";
import Word from "./components/Word";
import Errors from "./components/Errors";
import Result from "./components/Result";
import Footer from "./components/Footer";
import img from './assets/juego-del-ahorcado.png'

function App() {
  const [started, setStarted] = useState(false);
  const [firstTry, setFirstTry] = useState(true);
  const [letters, setLetters] = useState([]);
  const [word, setWord] = useState(null);
  const [progress, setProgress] = useState([]);
  const [errors, setErrors] = useState(6);
  const [win, setWin] = useState(false);
  const [loose, setLoose] = useState(false);

  useEffect(() => {
    if (started) {
      setLetters(dataLetters.map((l) => ({ ...l, clicked: false })));
      const palabra = dataWords[Math.floor(Math.random() * dataWords.length)];
      setWord(palabra);
      setErrors(6);
      setWin(false);
      setLoose(false);
    }
    else {
      setLetters(dataLetters.map((l) => ({ ...l, clicked: true })));
    }
  }, [started]);


  useEffect(() => {
    if (word) {
      setProgress(Array(word.length).fill(""));
    }
  }, [word]);

  useEffect(() => {
    if (started) {
      checkWin();
    }
  }, [progress]);

  function startGame() {
    if (!started && firstTry) {
      setFirstTry(false);
      setStarted(true);
    } else {
      console.log("esperando");
    }
  }

  function restartGame() {
    setStarted(true);
  }

  function handleClickedLetter(id) {
    let letras = [...letters];
    letras[id].clicked = true;
    setLetters(letras);
  }

  function checkWin() {
    if (!word) return;
    const completo = progress.every((letra) => letra !== "");
    const wordArray = word.split("");
    const completed = progress.every((letra, i) => letra === wordArray[i]);

    if (!win && completo && completed) {
      setWin(true);
      setStarted(false);
    }
  }

  function validateLetter(id) {
    if (word.includes(letters[id].value)) {
      let progreso = [...progress];
      for (let i = 0; i < word.length; i++) {
        if (word[i] === letters[id].value) {
          progreso[i] = word[i];
          setProgress(progreso);
        }
      }
    } else {
      setErrors(errors - 1);
      if (errors - 1 === 0) {
        setLoose(true);
        setStarted(false);
      }
    }
    handleClickedLetter(id);
  }

  useEffect(() => {
    function handleKeyDown(e) {
      const pressed = e.key.toUpperCase(); // ej: 'a' → 'A'

      // buscá si esa letra existe en letters
      const letraEncontrada = letters.find(
        (l) => l.value === pressed && !l.clicked
      );

      if (letraEncontrada) {
        validateLetter(letraEncontrada.id);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [letters, validateLetter]);

  if (!started && firstTry)
    return (
      <>
        <Header />
          <img
            src={img}
            alt="Juego del ahorcado"
            className="size-80 self-center"
          />
          <button
            onClick={startGame}
            className="nunito-bold p-2 border-1 border-white rounded-full max-w-2xl  hover:bg-neutral-800 cursor-pointer hover:scale-105 transition-transform "
          >
            START
          </button>
          <Footer />
      </>
    );
  return (
    <>
      <Header />

      <main className="flex flex-col items-center gap-2">
        <Errors errors={errors} />
        <Word progress={progress} />
        <Result win={win} loose={loose} restartGame={restartGame} word={word} />
        <Letters letters={letters} validateLetter={validateLetter} />
      </main>
      <Footer />
    </>
  );
}

export default App;
