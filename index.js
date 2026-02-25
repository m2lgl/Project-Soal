// main file jangan dihapus anjir

//import 
import express fro5m "express";
import path from "path";

//inisialisasi express
const app = express;
const port = 7280;


//logika utama 
app.get("/", (req, res) => {
  res.sendFile(path.join(process.cwd(), 'public', 'index.html'));
})
app.listen(port, () => {

  console.log("server berjalan di port: ", port);
})
export default app;
