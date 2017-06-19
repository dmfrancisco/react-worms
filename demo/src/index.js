import React from "react";
import ReactDOM from "react-dom";
import Worm from "../../src/";
import "../../css/index.scss";

const Demo = () => (
  <div>
    <h1>React Component for Worm Charts</h1>

    <Worm scores={[4, 8, 15, 16, 23, 42]}
      labels={["Lorem", "Ipsum", "Dolor", "Sit", "Amet", "Consectetur"]}
      min={0} max={50} />
    <code>{`<Worm scores={[4, 8, 15, 16, 23, 42]}
      labels={["Lorem", "Ipsum", "Dolor", "Sit", "Amet", "Consectetur"]}
      min={0} max={50} />`}</code>

    <Worm min={1} max={100} scores={[1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]}
      bgdColor="#253b6b" colors={["#4b67a5"]} styles={{ color: "white" }} />
    <code>{`<Worm min={1} max={100} scores={[1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]}
      bgdColor="#253b6b" colors={["#4b67a5"]} styles={{ color: "white" }} />`}</code>

    <Worm scores={[0, 40, 60, 100, 50, 20, 10, 80]} min={0} max={100}
      colors={["#fff", "#c6e48b", "#7bc96f", "#239a3b", "#196127"]} styles={{ color: "transparent" }} />
    <code>{`<Worm scores={[0, 40, 60, 100, 50, 20, 10, 80]} min={0} max={100}
      colors={["#fff", "#c6e48b", "#7bc96f", "#239a3b", "#196127"]} styles={{ color: "transparent" }} />`}</code>

    <Worm scores={[6, 8, 5, 8, 5]} min={5} max={10}
      colors={["#f1c40f", "#e67e22", "#e74c3c", "#d0021b"]} />
    <code>{`<Worm scores={[6, 8, 5, 8, 5]} min={5} max={10}
      colors={["#f1c40f", "#e67e22", "#e74c3c", "#d0021b"]} />`}</code>

    <Worm scores={[-5, -2, 0, 2, 5]} min={-5} max={5}
      colors={["#ccc", "#d6e685", "#8cc665", "#44a340", "#1e6823"]} />
    <code>{`<Worm scores={[-5, -2, 0, 2, 5]} min={-5} max={5}
      colors={["#ccc", "#d6e685", "#8cc665", "#44a340", "#1e6823"]} />`}</code>

    <Worm min={1} max={7} scores={[1, 7, 7, 6]} sizes={[30]}
      labels={["Charts", "created", "for", "Union"]} className="Worm--custom"
      colors={["#bf2636", "#2683bf"]} styles={{ color: "white", fontSize: "1.4em" }} />
    <code>{`<Worm min={1} max={7} scores={[1, 7, 7, 6]} sizes={[30]}
      labels={["Charts", "created", "for", "Union"]} className="Worm--custom"
      colors={["#bf2636", "#2683bf"]} styles={{ color: "white", fontSize: "1.4em" }} />`}</code>
  </div>
);

ReactDOM.render(<Demo />, document.getElementById("demo"));
