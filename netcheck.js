let url = "http://www.gstatic.com/generate_204";
let resp = await $task.fetch({url, timeout: 5000});
if (resp.statusCode !== 204 && resp.statusCode !== 200) {
  $notify("网络异常", "状态码: " + resp.statusCode, "检查节点或运营商网络");
}
$done();
