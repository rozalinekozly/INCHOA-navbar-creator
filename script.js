function generateNavbar() {
  const transparent = document.getElementById("transparent").value;
  const blurry = document.getElementById("blurry").value;
  const colored = document.getElementById("colored").value;
  const colorHex = document.getElementById("colorHex").value || "#ffffff";
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
  if (transparent === "yes") css += `  background-color: transparent;\n`;
  else if (colored === "yes") css += `  background-color: ${colorHex};\n`;
  else css += `  background-color: #eeeeee;\n`;

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

  css += `#navbar nav ul {\n  list-style: none;\n  display: flex;\n  gap: 2rem;\n  justify-content: center;\n}\n\n`;
  css += `#navbar nav ul li a {\n  text-decoration: none;\n  color: black;\n  font-weight: bold;\n}`;

  // Output code
  document.getElementById("htmlOutput").innerText = html;
  document.getElementById("cssOutput").innerText = css;

  // Set preview
  const previewContainer = document.getElementById("navbarPreview");

  // Clear previous preview
  previewContainer.innerHTML = html;

  // Remove any old styles
  const existingStyles = previewContainer.querySelectorAll("style");
  existingStyles.forEach(tag => tag.remove());

  // Add new style
  const styleTag = document.createElement("style");
  styleTag.innerHTML = css;
  previewContainer.appendChild(styleTag);
}
