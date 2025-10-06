export default function RegularBtn({ children, handleClick }) {
  return (
    <button className="btn btn--text" onClick={handleClick}>
      {children}
    </button>
  );
}
