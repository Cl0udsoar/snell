var body = $response.body.replace(/\u0075\u0079\u0065\u0064\u0022\u003A\u0066\u0061\u006C\u0073\u0065/g, '\u0075\u0079\u0065\u0064\u0022\u003A\u0074\u0072\u0075\u0065').replace(/\u0066\u0072\u0065\u0065\u0022\u003A\u0066\u0061\u006C\u0073\u0065/g, '\u0066\u0072\u0065\u0065\u0022\u003A\u0074\u0072\u0075\u0065').replace(/\u0074\u0072\u0069\u0061\u006C\u0022\u003A\u0066\u0061\u006C\u0073\u0065/g, '\u0074\u0072\u0069\u0061\u006C\u0022\u003A\u0074\u0072\u0075\u0065')
$done({ body });