const Mock = require("mockjs")
module.exports = {
    //  关闭ESLint警告 
    lintOnSave: false,
    // 拦截
    devServer: {
        before(app) {
            app.get("/api/list", (req, res) => res.json(Mock.mock({
                "list|2-3": [{
                    "title": "@ctitle",
                    "children|2-3": [{
                        "title": "@ctitle",
                        "children|2-3": [{
                            "title": "@ctitle",
                            "children|2-3": [{
                                "title": "@ctitle",
                                "children|2-3": [{
                                    "title": "@ctitle"
                                }]
                            }]
                        }]
                    }]
                }]
            })))
        }
    }
}