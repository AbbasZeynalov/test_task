const { delay } = require("connect-api-mocker/helpers");
const users = require("../users.json");

module.exports = [
  delay(0),
  (req, res) => {
    const { first_name, last_name } = req.body;
    const id = req.params.id;

    const user = users.find((item) => item?.id == id);

    if (!user) {
      return res.sendStatus(404);
    }

    user.last_name = last_name;
    user.first_name = first_name;

    return res.json(user);
  },
];
