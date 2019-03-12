const execa = require('execa');

const argv = process.argv
// const node_fullPath = argv[0]
// const thisFileName = argv[1]
const argv1 = argv[2]

;(async () => {
  try {
    const proc = execa('node_modules/.bin/webpack-dev-server', ['--entry-file', argv1])
    proc.stdout.pipe(process.stdout)
    proc.stderr.pipe(process.stderr)

    const {stdout, stderr} = await proc
    console.log('stdout: ', stdout)
    console.log('stderr: ', stderr)

  } catch (er) {
    console.log('Error: ', er)
  }
})();
