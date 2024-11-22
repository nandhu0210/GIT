//Promise Concept :

function water() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const watfill = true;
        if (watfill) {
          resolve("watercan filled");
        } else {
          reject("water can not filled");
        }
      }, 3000);
    });
  }
  
  function room() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const rc = true;
        if (rc) {
          resolve("room cleaned");
        } else {
          reject("room not cleaned");
        }
      }, 2000);
    });
  }
  function trash() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const to = false;
        if (to) {
          resolve("trash is out");
        } else {
          reject("trash not kept outside");
        }
      }, 500);
    });
  }