    var response = JSON.parse($response.body);
    if (response && response.subscriptions) {
        for (var key in response.subscriptions) {
            if (response.subscriptions.hasOwnProperty(key)) {
                response.subscriptions[key].is_active = true;
            }
        }
    }
    $done({body: JSON.stringify(response)});
