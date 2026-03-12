const { spawn } = require("child_process");

let started = false;
let processRef = null;

exports.handler = async function () {

  if (!started) {

    processRef = spawn("npx", ["n8n"], {
      shell: true,
      env: {
        ...process.env,
        N8N_PORT: "8888",
        N8N_HOST: "0.0.0.0",
        N8N_SECURE_COOKIE: "false"
      }
    });

    processRef.stdout.on("data", data => {
      console.log(data.toString());
    });

    processRef.stderr.on("data", data => {
      console.log(data.toString());
    });

    started = true;
  }

  return {
    statusCode: 200,
    body: "n8n iniciado"
  };

};
