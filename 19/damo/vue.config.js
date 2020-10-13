const data = require("./mock/data.js");

module.exports = {
    lintOnSave: false,
    devServer: {
        before(app) {
            app.get("/api/list", (req, res) => res.json(data.list))
            app.get("/api/search", (req, res) => {
                let {
                    val
                } = req.query;
                res.send(data.search.filter(item => item.title.includes(val)))
            })
        }
    }
}