fetch('/api/players')
  .then(x => x.json())
  .then(x => JSON.stringify(x))
  .then(x => document.write(x));