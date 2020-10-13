const Mock = require("mockjs");

let data = Mock.mock({
    "list|5": [{
        title: "@ctitle"
    }],
    "search|5": [{
        "title": "@ctitle",
        url: "@image(200x100)"
    }]
})

console.log(data)
module.exports = data;