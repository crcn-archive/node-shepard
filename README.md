Shepard is a utility for communicating between instances.

## Features

- SSH for communicating between instances
- uses DNode for communication


## Server example

```javascript
var server = require("shepard").server({
  client: {
    port: 8091
  },
  clients: require("awsm")(awsConfig).ec2.instances
}),
aws = require("awsm")(awsConfig);

server.scope.on("helloServer", function () {
  console.log("hello server!");
});


```

## Client Example

```javascript
var client = require("shepard").client();

client.scope.on("helloClient", function () {
  client.server.emit("helloServer");
});

client.listen(8091);
```