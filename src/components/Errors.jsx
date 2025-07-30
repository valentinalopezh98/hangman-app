import error6 from "../assets/hangman-6.png";
import error5 from "../assets/hangman-5.png";
import error4 from "../assets/hangman-4.png";
import error3 from "../assets/hangman-3.png";
import error2 from "../assets/hangman-2.png";
import error1 from "../assets/hangman-1.png";
import error0 from "../assets/hangman-0.png";

const images = [error0, error1, error2, error3, error4, error5, error6];

function Errors({ errors }) {
  return (
    <div className="size-32 p-1.5 mb-5">
      <img src={images[errors]} alt={`Errores: ${errors}`} />
    </div>
  );
}

export default Errors;
