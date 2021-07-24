class ThemeColors {
  constructor(hexColor, invert) {
    const rgb = hexTorgb(hexColor);
    this.colors = {
      theme: hexColor,
      highlight1: adjustLuminosity(rgb, 0.75),
      highlight2: invert
        ? adjustLuminosity(rgb, 0, invert)
        : adjustLuminosity(rgb, 0.75), //invert
      shadow1: adjustLuminosity(rgb, -0.25),
      shadow2: adjustLuminosity(rgb, -0.75),
      faded: adjustSaturation(rgb, 0.5, invert),
      textColor: rgb[0] + rgb[1] + rgb[2] < 400 ? "white" : "black",
    };
    this.highlight1 = adjustLuminosity(rgb, 0.75);
    this.highlight2 = invert
      ? adjustLuminosity(rgb, 0, invert)
      : adjustLuminosity(rgb, 0.75); //invert
    this.theme = hexColor;
    this.shadow1 = adjustLuminosity(rgb, -0.25);
    this.shadow2 = adjustLuminosity(rgb, -0.75);
    this.faded = adjustSaturation(rgb, 0.5, invert); //invert
  }
}

function hexTorgb(hexColor) {
  let r = parseInt(hexColor.slice(1, 3), 16);
  let g = parseInt(hexColor.slice(3, 5), 16);
  let b = parseInt(hexColor.slice(5), 16);
  return [r, g, b];
}

function adjustLuminosity(rgb, scale, invert = false) {
  let c;
  if (invert) {
    rgb = rgb.map((colorVal) => 255 - colorVal);
  }
  const newColor = rgb.map((colorVal) => {
    c = Math.round(
      Math.min(Math.max(0, colorVal + colorVal * scale), 255)
    ).toString(16);
    if (c.length < 2) {
      return "0" + c;
    } else {
      return c;
    }
  });
  return "#" + newColor.join("");
}

function adjustSaturation(rgb, scale, invert = false) {
  let hex;
  if (invert) {
    rgb = rgb.map((colorVal) => 255 - colorVal);
  }
  const max = Math.max(...rgb);
  const newColor = rgb.map((colorVal) => {
    if (max === colorVal) {
      hex = colorVal.toString(16);
    } else {
      hex = Math.round(colorVal + (max - colorVal) * scale).toString(16);
    }
    return hex.length < 2 ? "0" + hex : hex;
  });
  return "#" + newColor.join("");
}

let red = "#FF0000";
let green = "#00FF00";
let blue = "#0000FF";

let sampleRed = new ThemeColors(red, false);
let invertedRed = new ThemeColors(red, true);

sampleRed;
invertedRed;
