import app from './app';

const port = 3001;
app.listen(port, (err) => {
  if (err) throw err;
  console.log(`>>>> Ready on http://localhost:${port}`);
});
