import 'dotenv/config';
import express from 'express';
const app = express();
const port = process.env.PORT || 2000;
const pack = [
    { id: 1, name: "Molecule Man", age: 29, secretIdentity: "Dan Jukes", powers: ["Radiation resistance", "Turning tiny", "Radiation blast"] },
    { id: 2, name: "Madame Uppercut", age: 39, secretIdentity: "Jane Wilson", powers: ["Million tonne punch", "Damage resistance", "Superhuman reflexes"] },
    { id: 3, name: "Eternal Flame", age: 1000000, secretIdentity: "Unknown", powers: ["Immortality", "Heat Immunity", "Inferno", "Teleportation", "Interdimensional travel"] }
];
// app.get('/', (req, res) => {
//   res.send('JavaScript Server is running!'); 
// })
app.get('/', (req, res) => {
    res.send('<img src="https://images.unsplash.com/photo-1744712839524-2f2e689aeff9?q=80&w=737&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Pink blossoms and green leaves" style="width: 300px; height: auto; border: 2px solid black; background-color: red; padding: 5px;"/>');
});
app.get('/data', (req, res) => {
    res.json(pack);
});

// app.get('/data/:id', (req: Request, res: Response) => {
//   const id = parseInt(req.params.id, 10);
//   if (isNaN(id) || id < 0 || id >= pack.length) {
//     return res.status(404).send('Hero not found');
//   }
//   res.json(pack[id]);
// });

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
//# sourceMappingURL=server.js.map
//# sourceMappingURL=server.js.map