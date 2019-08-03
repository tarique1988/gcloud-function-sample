const router = require("express").Router();

const sampleData = [
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
  const data = SampleData;
  res.json(data);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  if (id < sampleData.length) {
    const data = sampleData[id];
    res.json(data);
  } else {
    res.status(400).json({
      Error: `Incorrect ID: ${id}`,
      Suggestion: `Please use values from 0 to ${sampleData.length - 1}`
    });
  }
});

router.get("*", (req, res) => {
  res.status(404).json({ Error404: "Page Not Found!" });
});

module.exports = router;
