// Firmware version database
// Generated from 发货固件确认.xlsx, mapped to all 35 products
var fwDB = {};

function addFW(products, versions) {
  products.forEach(function(p) {
    if (!fwDB[p]) fwDB[p] = [];
    versions.forEach(function(v) {
      if (fwDB[p].indexOf(v) === -1) fwDB[p].push(v);
    });
  });
}

// X1 / X1 lite / E1 group
addFW(["X1", "X1 lite", "E1"], [
  "1.0.A19S91"
]);

// X1 Pro / E1 Pro group
addFW(["X1 Pro", "E1 Pro"], [
  "1.0.A20K11",
  "1.0.A20K7-X1Pro-NOLOGO",
  "1.0.A20K9-V15-20260410",
  "1.0.A20K7U-UAE-AQ10Pro"
]);

// Z1
addFW(["Z1"], [
  "Z1_V4.3.0.5"
]);

// Z1 lite — same as Z1
addFW(["Z1 lite"], [
  "Z1_V4.3.0.5"
]);

// E1 lite — same as Z1
addFW(["E1 lite"], [
  "Z1_V0.4.2.6",
  "Z1_V4.2.0.5.S1",
  "Z1_V4.4.0.1",
  "Z1_V4.4.0.1.N1"
]);

// Horus
addFW(["Horus"], [
  "1.0.A035"
]);

// P2 / P2 Plus
addFW(["P2", "P2 Plus"], [
  "V2.4.0.8"
]);

// S20
addFW(["S20"], [
  "V2.1.0.6"
]);

// XBase
addFW(["XBase"], [
  "XBase-V15-B1A33"
]);

// Orion one series
addFW(["Orion one", "Orion one-AR", "Orion one-Laser"], [
  "1.0.A10E81RX",
  "1.0.A10E71-NOLOGO",
  "1.0.A10E87"
]);

// Y1 — static options in step config
addFW(["Y1"], []);

// H1
addFW(["H1"], []);

// Sfaira group
addFW(["Sfaira one", "Sfaira one plus", "Sfaira one lite"], []);

// SAgro group
addFW(["SAgro200", "SAgro150", "SAgro100", "SAgro10", "SAgro180"], []);

// SDL2, DL, SL100, SP100
addFW(["SDL2", "DL", "SL100", "SP100"], []);

// SC series
addFW(["SC260", "SC200", "SC300", "SC280", "SC60"], []);

// SV100 series — 待更新，稍后提供固件版本
addFW(["SV100", "SV100 Dual", "SV100 INS-D"], [
  "1.0.G18XQ-Russia",
  "1.0.G18XB-NL",
  "1.0.G18XJRX-0903"
]);

// SV100 INS — firmware is text input, no dropdown needed
addFW(["SV100 INS"], []);
