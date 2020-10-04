const color = {
  getGradient(color) {
    const { r, g, b } = color;

    return `linear-gradient(
      167deg,
      rgba(${r + 89}, ${g + 89}, ${b + 89}, 1.236) 0%,
      rgba(${r + 21}, ${g + 21}, ${b + 21}, 1.236) 23.6%,
      rgba(${r - 21}, ${g - 21}, ${b - 21}, 1.236) 76.4%,
      rgba(${r - 89}, ${g - 89}, ${b - 89}, 1.236) 100%
    )`;
  },

  getColor(i, data) {
    if (data.color) {
      return data.color;
    } else return COLORS[i % COLORS.length];
  },

  getRandomColor() {
    let i = Math.floor(Math.random() * Math.floor(COLORS.length));
    const response = this.hexToRgb(COLORS[i % COLORS.length]);
    return response;
  },

  componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  },

  rgbToHex(rgb) {
    return (
      "#" +
      this.componentToHex(rgb.r) +
      this.componentToHex(rgb.g) +
      this.componentToHex(rgb.b)
    );
  },

  hexToRgb(hex) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
      return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  },
};

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#006900",
  "#ff0000",
  "#065535",
  "#407294",
  "#ff7373",
  "#ffa500",
  "#FF8042",
  "#8b0000",
  "#7fe5f0",
  "#133337",
  "#bada55",
  "#666666",
  "#cbcba9",
  "#ffffff",
  "#420420",
  "#c0c0c0",
  "#5ac18e",
  "#696969",
  "#000000",
  "#ff80ed",
  "#dcedc1",
  "#008080",
  "#f7347a",
  "#576675",
  "#ffc0cb",
  "#ffe4e1",
  "#696966",
  "#008080",
  "#ffd700",
  "#e6e6fa",
  "#ffa500",
  "#ff7373",
  "#00ffff",
  "#40e0d0",
  "#d3ffce",
  "#0000ff",
  "#f0f8ff",
  "#b0e0e6",
  "#c6e2ff",
  "#003366",
  "#faebd7",
  "#ffff00",
  "#fa8072",
  "#7fffd4",
  "#800000",
  "#ffb6c1",
  "#eeeeee",
  "#800080",
  "#00ff00",
  "#f08080",
  "#fff68f",
  "#c39797",
  "#cccccc",
  "#ffc3a0",
  "#333333",
  "#20b2aa",
  "#66cdaa",
  "#ff6666",
  "#4ca3dd",
  "#ff00ff",
  "#ffdab9",
  "#ff7f50",
  "#468499",
  "#f6546a",
  "#afeeee",
  "#008000",
  "#c0d6e4",
  "#00ced1",
  "#660066",
  "#0e2f44",
  "#cbbeb5",
  "#990000",
  "#088da5",
  "#b4eeb4",
  "#daa520",
  "#b6fcd5",
  "#101010",
  "#8b0000",
  "#808080",
  "#f5f5f5",
  "#6897bb",
  "#ffff66",
  "#000080",
  "#f5f5dc",
  "#81d8d0",
  "#dddddd",
  "#ff4040",
  "#8a2be2",
  "#66cccc",
  "#794044",
  "#007777",
  "#006666",
  "#005555",
  "#004444",
  "#003333",
  "#00aedb",
  "#a200ff",
  "#f47835",
  "#d41243",
  "#8ec127",
  "#ee4035",
  "#f37736",
  "#fdf498",
  "#7bc043",
  "#0392cf",
  "#ffc100",
  "#ff9a00",
  "#ff7400",
  "#ff4d00",
  "#ff0000",
  "#4deeea",
  "#74ee15",
  "#ffe700",
  "#f000ff",
  "#001eff",
  "#373854",
  "#493267",
  "#9e379f",
  "#e86af0",
  "#7bb3ff",
  "#dc6900",
  "#eb8c00",
  "#e0301e",
  "#a32020",
  "#602320",
  "#0e1a40",
  "#222f5b",
  "#5d5d5d",
  "#946b2d",
  "#000000",
  "#d11141",
  "#00b159",
  "#00aedb",
  "#f37735",
  "#ffc425",
  "#ff0000",
  "#bf0000",
  "#800000",
  "#400000",
  "#000000",
];

export default color;
