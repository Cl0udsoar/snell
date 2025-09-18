let body = {};
try {
  body = $response.body ? JSON.parse($response.body) : {};
} catch (e) {
  body = {};
}
// 把 message 和 status_code 改成成功的值（只改 body）
body.message = "";
body.status_code = 200;

$done({body: JSON.stringify(body)});
