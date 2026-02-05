const fs = require("fs");
console.log(fs)
const readtodo = function() {
const data = fs.readFileSync("todo.json", "utf-8");
return data;
};
readtodo();