import Letter from "./Letter";
export default function Letters({ letters, validateLetter }) {
  if (!letters) return <h2>No hay letras</h2>;

  return (
    <div className="flex gap-2.5 flex-wrap items-center justify-center">
      {letters.map((letter) => (
        <Letter
          key={letter.id}
          id={letter.id}
          clicked={letter.clicked}
          validateLetter={validateLetter}
        >
          {letter.value}
        </Letter>
      ))}
    </div>
  );
}
