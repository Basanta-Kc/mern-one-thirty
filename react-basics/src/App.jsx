import { useRef } from "react";

function App() {
  const inputNameRef = useRef();
  return (
    <>
      <label htmlFor="name">Name</label>
      <input id="name" ref={inputNameRef} name="name" placeholder="name" />
      <button
        onClick={() => {
          inputNameRef.current.focus();
          alert(inputNameRef.current.value);
        }}
      >
        Focus on input
      </button>
    </>
  );
}

export default App;

onclick = () => {
  document.getElementById("name").focus();
};
