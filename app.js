const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>Jenkins CI/CD Project</title></head>
      <body style="font-family:Arial;text-align:center;margin-top:100px;">
        <h1>Express Frontend Running Successfully!</h1>
        <h2>Jenkins CI/CD Assignment</h2>
        <p>Deployed on AWS EC2</p>
      </body>
    </html>
  `);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Express running on port ${PORT}`);
});
