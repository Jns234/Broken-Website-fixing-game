function readFile(filename) {
    return fetch(filename)
      .then(response => response.text())
      .then(data => {
        // assign the file contents to the variable
        const fileContents = data;
        return fileContents;
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }
    