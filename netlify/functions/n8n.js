const { spawn } = require("child_process");

let started = false;

exports.handler = async function () {

  if (!started) {

    spawn("npx", ["n8n", "start"], {
      shell: true,
      stdio: "inherit",
      env: {
        ...process.env,
        N8N_HOST: "0.0.0.0",
        N8N_PORT: "5678",
        N8N_SECURE_COOKIE: "false"
      }
    });

    started = true;
  }

  return {
    statusCode: 200,
    body: "n8n iniciado"
  };

};