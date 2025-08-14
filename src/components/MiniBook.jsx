import { useReadingList } from "../hooks/useReadingList";

export const MiniBook = ({ title, cover, book }) => {
  const { readingList, removeFromReadingList } = useReadingList();

  return (
    <div className="card mx-2 my-4" style={{ width: "8rem" }}>
      <img className="card-img-top" src={cover} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <button
          onClick={() => removeFromReadingList(readingList, book)}
          className="btn btn-outline-primary"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};
