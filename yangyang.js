var body = $response.body;
var a=JSON.parse(body);
var b=a.data.map_seed;

$notification.post("cloudsoartest","潘月月是傻子:",b);
var obj = JSON.parse(`{"err_code":0,"err_msg":"","data":{"map_md5":["046ef1bab26e5b9bfe2473ded237b572","046ef1bab26e5b9bfe2473ded237b573"],"map_seed":[${b}]}}`);

body = JSON.stringify(obj);

$done({body});
