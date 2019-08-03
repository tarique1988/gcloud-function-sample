const router = require("express").Router();

const snapShot = [
  { id: 1, name: "Tarique", age: 20 },
  { id: 2, name: "Akbar", age: 24 },
  { id: 3, name: "Ali", age: 31 },
  { id: 4, name: "Mirza", age: 17 }
];
router.get("/", (req, res) => {
  const noteSnapshot = snapShot;
  res.json(noteSnapshot);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  if (id >= snapShot.length) {
    res
      .status(400)
      .json({
        Error: `Incorrect ID: ${id}\nPlease use values from 0 to ${snapShot.length -
          1}`
      });
  } else {
    const note = snapShot[id];
    res.json(note);
  }
});

module.exports = router;
