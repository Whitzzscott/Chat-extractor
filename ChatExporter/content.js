const button = document.createElement('button');
button.textContent = 'Extract Div to HTML';
button.style.position = 'fixed';
button.style.bottom = '20px';
button.style.right = '20px';
button.style.padding = '15px 30px';
button.style.backgroundColor = '#4CAF50';
button.style.color = 'white';
button.style.border = 'none';
button.style.borderRadius = '8px';
button.style.cursor = 'pointer';
button.style.zIndex = '9999';
button.style.fontSize = '16px';
button.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
button.style.transition = 'all 0.3s ease';

button.addEventListener('mouseenter', () => {
  button.style.transform = 'scale(1.1)';  // Scale up button when hovered
});

button.addEventListener('mouseleave', () => {
  button.style.transform = 'scale(1)';  // Reset scale
});

document.body.appendChild(button);

function extractDivContent() {
  const div = document.querySelector('div.max-w-page.px-page.md\\:px-page-md.mx-auto.w-full.pb-6.pt-8.max-md\\:pt-6.flex.flex-col');
  if (div) {
    const divContent = div.innerHTML;  // Use innerHTML to include everything inside the div
    createHTMLFile(divContent);
  } else {
    console.log("Div not found!");
  }
}

function createHTMLFile(divContent) {
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Extracted Div Content</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f0f4f8;
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
        }
        h1 {
          color: #4CAF50;
          font-size: 2.5em;
          text-align: center;
          margin-bottom: 20px;
          animation: fadeIn 1s ease-in-out;
        }
        .content {
          background-color: white;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          max-width: 900px;
          width: 100%;
          animation: slideUp 0.5s ease-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      </style>
    </head>
    <body>
      <div>
        <h1>Extracted Div Content</h1>
        <div class="content">
          ${divContent}
        </div>
      </div>
    </body>
    </html>
  `;

  const blob = new Blob([htmlContent], { type: 'text/html' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'extracted-content.html';
  link.click();
}

button.addEventListener('click', extractDivContent);
