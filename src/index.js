import React from "react";
import { render } from "react-dom";
import { Parallax } from "react-parallax";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};

const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};

const imagem ="https://static.vecteezy.com/system/resources/previews/000/151/791/original/falling-numbers-matrix-background-vector.jpg";

const App = () => (
  <div style={styles}>
    <Parallax bgImage={imagem} strength={500}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}>Efeito Parallax</div>
      </div>
    </Parallax>

    <div style={{ height: 500 }} />
  </div>
);

render(<App />, document.getElementById("root"));
