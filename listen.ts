import app from './app';
const { PORT = 3001 } = process.env;

app.listen(PORT, () => {
  //if (err) throw err;
  console.log(`Listening on port ${PORT}`);
});
