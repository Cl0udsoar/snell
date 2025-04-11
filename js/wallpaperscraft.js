// unlock-wallpaperscraft.js

let body = $response.body;
let obj = JSON.parse(body);

// 打印原始数据（可选）
$console.log("原始数据:");
$console.log(JSON.stringify(obj, null, 2));

if (obj?.items) {
  for (let key in obj.items) {
    obj.items[key].is_active = true;
    if (obj.items[key].hasOwnProperty("already_used_introductory_price")) {
      obj.items[key].already_used_introductory_price = true;
    }
  }
}

// 打印修改后的数据
$console.log("修改后的数据:");
$console.log(JSON.stringify(obj, null, 2));

$done({ body: JSON.stringify(obj) });
