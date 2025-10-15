export default function EmojiButton({
  content,
  handleClick,
  selectedCardEntry,
  matchedCardEntry,
}) {
  const btnContent = selectedCardEntry || matchedCardEntry ? content : "?";
  let btnStyle = "btn--emoji__front";
  if (selectedCardEntry) btnStyle = "btn--emoji__back--selected";
  else if (matchedCardEntry) btnStyle = "btn--emoji__back--matched";

  return (
    <button
      className={`btn btn--emoji ${btnStyle}`}
      onClick={selectedCardEntry ? null : handleClick}
      disabled={matchedCardEntry}
    >
      {btnContent}
    </button>
  );
}
