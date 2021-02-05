const badFileOpen = (a) => {
  let str = a
  fs.open(str, "r", function (err, file) {
    if (err) throw err;
  });
};

exports.badFileOpen = badFileOpen;
