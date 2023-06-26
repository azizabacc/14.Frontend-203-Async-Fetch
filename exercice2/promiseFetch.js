

// REDÉCLARATION

const customFetch = (path) => {
    return new Promise((resolve, reject) => {
      let works = false;
      if (works === true) {
        resolve(json);
      } else {
        reject();
      }
    });
  };
  
  // UTILISATION
  
  customFetch(path)
    .then((json) => {
      console.log("Ça fonctionne ! Voici le JSON : " + json);
    })
    .catch(() => {
      console.log("Ça ne fonctionne pas.");
    });
  