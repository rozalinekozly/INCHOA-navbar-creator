function generateNavbar() {
  const transparent = document.getElementById("transparent").value;
  const blurry = document.getElementById("blurry").value;
  const colored = document.getElementById("colored").value;

  const colorHexInput = document.getElementById("colorHex").value.trim();
  const colorPicker = document.getElementById("colorPicker").value;
  const colorHex = colorHexInput || colorPicker;

  const bgGradient = document.getElementById("bgGradient").value;
  const fontColor = document.getElementById("fontColor").value;
  const fontFamily = document.getElementById("fontFamily").value;
  const fontSize = document.getElementById("fontSize").value || "16px";
  const itemGap = document.getElementById("itemGap").value || "2rem";

  const titles = document.getElementById("titles").value.split(",").map(t => t.trim());
  const shape = document.getElementById("shape").value;
  const sticky = document.getElementById("sticky").value;
  const width = document.getElementById("width").value || "100%";
  const padding = document.getElementById("padding").value || "0px";

  // Generate HTML
  let html = `<div id="navbar">\n  <nav>\n    <ul>\n`;
  for (const title of titles) {
    html += `      <li><a href="#">${title}</a></li>\n`;
  }
  html += `    </ul>\n  </nav>\n</div>`;

  // Generate CSS
  let css = `#navbar {\n`;
  css += `  width: ${width};\n`;
  css += `  padding: 0 ${padding};\n`;

  if (transparent === "yes") {
    css += `  background-color: transparent;\n`;
  } else if (colored === "yes") {
    if (bgGradient === "left") {
      css += `  background: linear-gradient(to left, ${colorHex}, transparent);\n`;
    } else if (bgGradient === "right") {
      css += `  background: linear-gradient(to right, ${colorHex}, transparent);\n`;
    } else if (bgGradient === "aura") {
      css += `  background: radial-gradient(circle, ${colorHex}, transparent);\n`;
    } else {
      css += `  background-color: ${colorHex};\n`;
    }
  } else {
    css += `  background-color: #eeeeee;\n`;
  }

  if (blurry === "yes") css += `  backdrop-filter: blur(10px);\n`;
  if (sticky === "yes") css += `  position: sticky;\n  top: 0;\n`;

  switch (shape) {
    case "rounded":
      css += `  border-radius: 12px;\n`;
      break;
    case "cylinder":
      css += `  border-radius: 50px;\n`;
      break;
    default:
      css += `  border-radius: 0px;\n`;
  }

  css += `}\n\n`;

  css += `#navbar nav ul {\n`;
  css += `  list-style: none;\n`;
  css += `  display: flex;\n`;
  css += `  justify-content: center;\n`;
  css += `  gap: ${itemGap};\n`;
  css += `}\n\n`;

  css += `#navbar nav ul li a {\n`;
  css += `  text-decoration: none;\n`;
  css += `  color: ${fontColor};\n`;
  css += `  font-weight: bold;\n`;
  css += `  font-family: ${fontFamily};\n`;
  css += `  font-size: ${fontSize};\n`;
  css += `}`;

  // Output code
  document.getElementById("htmlOutput").innerText = html;
  document.getElementById("cssOutput").innerText = css;

  // Live preview
  const previewContainer = document.getElementById("navbarPreview");
  previewContainer.innerHTML = html;

  // Clear old styles
  const existingStyles = previewContainer.querySelectorAll("style");
  existingStyles.forEach(tag => tag.remove());

  const styleTag = document.createElement("style");
  styleTag.innerHTML = css;
  previewContainer.appendChild(styleTag);
}
