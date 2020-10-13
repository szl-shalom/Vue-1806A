const Mock = require("mockjs");


let data = Mock.mock({
    "tab|4": [{
        "title": "@ctitle(2,4)",
        "children|3-4": [{
            "id": "@id",
            "img": "@image(50x50,@color,@cname(2))",
            "name": "@cname",
            "desc": "@cword(80,160)",
            "zan|0-100": 1,
            "mess|0-2": [{
                "name": "@cname",
                "content": "@cword(10,30)",
                "img": "@image(50x50,@color)"
            }]
        }]
    }]
})



module.exports = data;