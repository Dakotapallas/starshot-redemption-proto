console.log("Loading Starshot Redemption WebGL build...");
  function createUnityInstance(canvas, config) {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              console.log("Unity WebGL instance created successfully");
              resolve({ /* Mock Unity instance */ });
          }, 1000);
      });
  }
