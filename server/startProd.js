/*
  To be used to start an clustered instance of your server
*/

require('dotenv').config();
const os = require('os');
const cluster = require('cluster');
const app = require('./server');

let activeWorkerCount = 0;

const numWorkers = (() => {
  if (process.env.MAX_WORKERS) return process.env.MAX_WORKERS;
  return os.cpus().length;
})();

function forkWorker() {
  cluster
    .fork()
    .on('listening', () => {
      activeWorkerCount += 1;
      console.log(`A new worker is listening. There are ${activeWorkerCount} workers now`);
    })
    .on('exit', () => {
      activeWorkerCount -= 1;
      console.log(`A worker has died. There are ${activeWorkerCount} workers now`);
      console.log('Trying to replace the dead worker...');
      forkWorker();
    });
}

if (cluster.isMaster) {
  for (let i = 0; i < numWorkers; i += 1) {
    forkWorker();
  }
} else {
  // Gets executed by the the workers
  app.listen(8000);
}
