const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
    try{
    const r = await axios.put(
        "https://api.chatengine.io/users/",
        { username: username, secret: username, first_name: username },
        { headers: { "private-key": "0ab2843e-53fc-4c66-95a2-13113fc373f2" } }
    );
    return res.status(r.status).json(r.data);
} catch (e) {
  return res.status(e.response.status).json(e.response.data);
}
});

app.listen(3001);