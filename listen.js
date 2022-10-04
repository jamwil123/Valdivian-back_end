const app = require('./app');
const { PORT = 3001 } = process.env;

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Listening on port ${PORT}`);
});
