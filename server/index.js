import React from 'react';
import csshook from 'css-modules-require-hook/preset'
import { renderToString } from 'react-dom/server';
import path from 'path';
import Express from 'express';
import App from '../src/App';

const app = Express();

app.use(Express.static('/dist', path.join(__dirname, '../dist')));

const composeHtml = ({ title = '', js = '', css = '', html = ''}) => {
  let basicHtml = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
    <title>${title}</title>
    ${css}
  </head>
  <body>
    ${html}
    ${js}
  </body>
  </html>`
}

app.get('*', (req, res) => {
  let html = renderToString(<App />);
  res.send(composeHtml({ html }));
});

app.listen(8388, () => {
  console.log('server start on port 8388');
});
