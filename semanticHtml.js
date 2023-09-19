const fs = require('fs')
const semanticHtml = (css, js) => {
  let html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Your Page Title</title>
  `;

  if (css) {
    html += `<link rel="stylesheet" href="${css}.css">`;
    try {
      fs.writeFileSync(`${css}.css`, '')
    } catch (err) {
      console.log('Error while creating CSS file', err);
    }
  }

  html += `
    </head>
    <body>
      <header>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="intro">
          <h1>Welcome to Your Website</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam urna at libero faucibus, a interdum est vulputate.</p>
        </section>

        <section id="services">
          <h2>Our Services</h2>
          <ul>
            <li>
              <h3>Service 1</h3>
              <p>Details about Service 1.</p>
            </li>
            <li>
              <h3>Service 2</h3>
              <p>Details about Service 2.</p>
            </li>
            <li>
              <h3>Service 3</h3>
              <p>Details about Service 3.</p>
            </li>
          </ul>
        </section>
      </main>

      <footer>
        <p>&copy; 2023 Your Website</p>
      </footer>
  `;

  if (js) {
    html += `<script src="${js}.js"></script>`;
    try {
      fs.writeFileSync(`${js}.js`, '')
    } catch (err) {
      console.log('Error while creating JavaScript file', err);
    }
  }

  html += `
    </body>
    </html>
  `;

  return html;
}

module.exports = semanticHtml;
