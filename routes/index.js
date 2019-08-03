const router = require("express").Router();

const snapShot = [
  { id: 1, name: "John Doe", age: 10 },
  { id: 2, name: "Jane Doe", age: 9 },
  { id: 3, name: "Steve Smith", age: 29 },
  { id: 4, name: "David Warner", age: 32 },
  { id: 5, name: "Virat Kohli", age: 27 },
  { id: 6, name: "MS Dhoni", age: 32 },
  { id: 7, name: "Rohit Hitman Sharma", age: 29 },
  { id: 8, name: "Salman Khan", age: 50 }
];
router.get("/", (req, res) => {
  const noteSnapshot = snapShot;
  res.json(noteSnapshot);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  if (id < snapShot.length) {
    const note = snapShot[id];
    res.json(note);
  } else {
    res.status(400).json({
      Error: `Incorrect ID: ${id}`,
      Suggestion: `Please use values from 0 to ${snapShot.length - 1}`
    });
  }
});

router.get("*", (req, res) => {
  res.status(404).json({ Error404: "Page Not Found!" });
});

module.exports = router;
