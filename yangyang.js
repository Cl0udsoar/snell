var body = $response.body;
var a=JSON.parse(body);
var obj = JSON.parse(`{"err_code":0,"err_msg":"","data":{"map_md5":["046ef1bab26e5b9bfe2473ded237b572","046ef1bab26e5b9bfe2473ded237b572"],"map_seed":${a.data.map_seed}}}`);

body = JSON.stringify(obj);

$done({body});
