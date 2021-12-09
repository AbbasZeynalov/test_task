const { delay } = require("connect-api-mocker/helpers");
const userList = require("../users.json");

module.exports = [
    delay(0),
    (req, res) => {
        const id = req.params.id;

        const index = userList.findIndex((user) => user?.id == id);

        if (index === undefined) {
            return res.sendStatus(404);
        }

        delete userList[index];

        return res.json(id);
    },
];
