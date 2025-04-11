let body = $response.body;
let json = JSON.parse(body);

const NON_CONSUMABLE_ID = "nonconsumable";

// 遍历所有订阅项目，将特定订阅标记为已激活
if (json.subscriptions) {
  for (let key in json.subscriptions) {
    if (json.subscriptions[key].product_id === NON_CONSUMABLE_ID) {
      json.subscriptions[key].is_active = true;
    }
  }
}

$done({ body: JSON.stringify(json) });
