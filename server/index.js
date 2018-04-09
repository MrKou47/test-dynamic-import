import React from 'react';
import csshook from 'css-modules-require-hook/preset'
import { renderToString } from 'react-dom/server';
import http from 'http';

import App from '../src/App';

http.createServer((req, res) => {
  if (req.url === '/home') {
    let html = renderToString(<App />);
    res.end(html)
  }
}).listen(8388);
