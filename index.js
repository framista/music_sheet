const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const fs = require('fs');
const app = express();

app.use(express.static('public'));
app.use(cors());
app.use(fileUpload());

app.get('/musicsheet', (req, res) => {
  const id = req.query.file;
  fs.readFile(`${__dirname}/public/${id}.pdf`, function (err, data) {
    res.contentType('application/pdf');
    res.send(data);
  });
});

app.post('/musicsheet', (req, res) => {
  const { id } = req.query;
  if (!req.files) {
    return res.status(500).send({ msg: 'File is not found' });
  }
  const myFile = req.files.file;
  myFile.mv(`${__dirname}/public/${id}.pdf`, function (err) {
    if (err) {
      return res.status(500).send({ msg: 'Error occured' });
    }
    return res.send({ name: `${id}.pdf`, path: `/${id}.pdf` });
  });
});

app.use(express.static(path.join(__dirname, './client/build')));
app.get('*', (req, res) =>
  res.sendFile(path.resolve('./client', 'build', 'index.html'))
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
