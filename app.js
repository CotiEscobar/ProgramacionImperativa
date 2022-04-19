const prompt = require("prompt-sync")({sigint: true});


function ceroYCien() {
    sumatoria = 0;
    for (let i = 0; i <= 100; i++) {
      sumatoria += i;
    }
    return sumatoria;
  }
  console.log(ceroYCien());
