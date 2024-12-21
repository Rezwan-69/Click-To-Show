import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import "./app.css"


function App() {
  let [show, setShow] = useState(false);
  let handelshow = () => {
    setShow(!show);
  };

  return (
    <>
      <h1 onClick={handelshow}>
        Click me {show == true ? <FaMinusCircle /> : <FaPlus />}
      </h1>

      {/* {show == true ? "ami tomake" : ""} */}
      {show && (
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores,
          tenetur aliquid aut qui consequuntur optio dolores corporis iste cum
          quis assumenda rerum mollitia quia tempora repellendus, numquam
          eligendi quo sequi explicabo. At nemo saepe quasi eos reiciendis,
          error quaerat explicabo ullam expedita quas provident molestias esse
          soluta iusto, doloremque culpa.
        </p>
      )}
    </>
  );
}

export default App;
