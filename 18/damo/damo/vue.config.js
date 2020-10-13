const data = require("./mock/data.js");


module.exports = {
    lintOnSave: false,
    devServer: {
        before(app) {
            app.get("/api/banner", (req, res) => res.json(data.banner))
            app.get("/api/list", (req, res) => res.json(data.list))
            app.get("/api/detail", (req, res) => {
                let {
                    id
                } = req.query;
                res.send(data.list.find(item => item.id == id))
            })
        }
    }
}