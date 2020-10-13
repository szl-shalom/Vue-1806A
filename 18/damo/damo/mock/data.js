const Mock = require("mockjs");


let data = Mock.mock({
    "banner|4": ["@image(200x100,@color,@name)"],
    "list|5-10": [{
        "id": "@id",
        "title": "@ctitle",
        "url": "@image(100x100,@color)",
    }]
})

module.exports = data; 