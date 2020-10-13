const Mock = require("mockjs");




module.exports = Mock.mock({
    "list|10": [{
        "title": "@ctitle",
        "price|100-10000": 1,
        "desc": "@cword(20,80)",
        "url": "@image(200x100,@color,@city)",
        "id": "@id"
    }]
}).list;