let data = [
  {
    name: "listJobLog",
    arg: "query",
    url: "'/monitor/jobLog/list'",
    method: "get",
    param: "query",
    comment: "查询调度日志列表",
  },
  {
    name: "delJobLog",
    arg: "jobLogId",
    url: "'/monitor/jobLog/'+jobLog",
    method: "delete",
    comment: "删除调度日志",
  },
  {
    name: "cleanJobLog",
    url: "'/monitor/jobLog/clean'",
    method: "delete",
    comment: "删除调度日志",
  },
];

const ejs = require("ejs");
const fs = require("fs");
const path = require("path");
ejs.renderFile("./temp.ejs", { data }, (err, str) => {
  fs.writeFile(path.join(__dirname, "funs.js"), str, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("success");
    }
  });
});
