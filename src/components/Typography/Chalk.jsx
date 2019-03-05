import React from "react";
import ReactFontFace from "react-font-face";
import tafelschrift from "../../assets/fonts/Tafelschrift.ttf";

const fontConfig = {
  file: [
    {
      fontFamily: "Tafelschrift",
      fontStyle: "normal",
      fontWeight: 300,
      unicodeRange:
        "U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215",
      file: tafelschrift,
      fontType: "truetype"
    }
  ]
};

const styles = {
  blackboardFont: {
    fontFamily: "Tafelschrift",
    fontWeight: "300",
    lineHeight: "1.5em"
  }
};

function Chalk({ ...props }) {
  const { children } = props;
  return <div style={styles.blackboardFont}>{children}</div>;
}

export default ReactFontFace(Chalk, fontConfig);
