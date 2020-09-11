const PORT = 8888;
const FILE_SH = 'deploy.sh';

const http = require('http');
const { exec } = require('child_process');

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/') {
    exec(`sh ${FILE_SH}`, (error, stdout, stderr) => {
      if (error) {
        //TODO: Send email ERROR:
        console.log('Stderr: ', stderr);
      }
      console.log('Stdout: ', stdout);
      //TODO: Send email SUCCESS:
    });

    res.statusCode = 200;
    return res.end();
  }

  res.statusCode = 404;
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server connect: ${PORT}`);
});
