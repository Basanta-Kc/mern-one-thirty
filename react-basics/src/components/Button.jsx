export function Button({ color, text, onClick }) {
  return (
    <button style={{ background: color, color: "white" }} onClick={onClick}>
      {text}
    </button>
  );
}
