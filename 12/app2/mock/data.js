const Mock = require("mockjs");



let data = Mock.mock({
    "list|5": [{
        "title": "@cword(2,3)",
        "id": "@id",
        "children|5-10": [{
            "title": "@ctitle",
            "flag": false,
            "id": "@id",
            "url": "@image(100x100,@color)"
        }]
    }]
}).list;
data.unshift({
    title: "我的订阅",
    id: "1q23423453453",
    children: []
})

module.exports = data