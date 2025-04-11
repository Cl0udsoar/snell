// unlock-wallpaperscraft.js

let body = $response.body;
let obj = JSON.parse(body);

if (obj?.items) {
  for (let key in obj.items) {
    obj.items[key].is_active = true;
    if (obj.items[key].hasOwnProperty("already_used_introductory_price")) {
      obj.items[key].already_used_introductory_price = true;
    }
  }
}

$done({ body: JSON.stringify(obj) });
