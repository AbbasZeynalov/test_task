const { delay } = require("connect-api-mocker/helpers");
const userList = require("./users.json");

module.exports = [
  delay(0),
  (req, res) => {
    const page = req.query.page;
    const userCount = userList.filter(s => s).length;
    const users = userList.slice(Number(page) * 20, Number(page + 1) * 20).filter(s => s);

    return res.json({ userCount, users });
  },
];
