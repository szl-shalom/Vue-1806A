const Mock = require("mockjs");
const data = Mock.mock({
    "list|10": [{
        "title": "@ctitle",
        "url": "@image(200x200,@color)"
    }]
})


module.exports = {
    devServer: {
        before(app) {
            app.get("/api/list", (req, res) => res.json(data.list))
        }
    }
}