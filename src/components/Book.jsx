import { useState } from "react";
import { useReadingList } from "../hooks/useReadingList";

export const Book = ({ title, cover, synopsis, book }) => {
  const [isInList, setIsInList] = useState(false);
  const { addToReadingList } = useReadingList();

  const handleInList = (book) => {
    setIsInList(true);
    addToReadingList(book);
  };

  return (
    <div className="card mx-2 my-4" style={{ width: "18rem" }}>
      <img className="card-img-top" src={cover} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{synopsis}</p>
        <button
          disabled={isInList ? true : false}
          onClick={() => handleInList(book)}
          className="btn btn-primary"
        >
          Añadir a lista de lectura
        </button>
      </div>
    </div>
  );
};
