// Wallcraft Pro Unlock for Surge

let obj = JSON.parse($response.body);

// 遍历所有 items 项，强制设置 is_active = true
for (let key in obj.items) {
  if (obj.items.hasOwnProperty(key)) {
    obj.items[key].is_active = true;

    // 如果存在 introductory_price 标志，也设置为已使用
    if (obj.items[key].hasOwnProperty("already_used_introductory_price")) {
      obj.items[key].already_used_introductory_price = true;
    }
  }
}

$done({ body: JSON.stringify(obj) });
