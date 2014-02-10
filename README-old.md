### Example

Client:

```javascript

//load shepard as the main entry point, and point to the application index file.
var shepard = require("shepard").client(__dirname + "/index.js").listen();
```

Server:

```javascript
var shepard = require("shepard").server().listen();

shepard.insert({
  name: "my server",
  address: "127.0.0.1",
  tags: {
    type: "app-name"
  }
});


//invoke a soft-restart against the application. 
shepard.findOne({ tags: { type: "app-name" }}).sync().restart();
```

### Working with node-ectwo

```javascript
var ectwo = require("ectwo")(config),
shepard = require("shepard").server();

//synchronize all ec2 instances to shepard
ectwo.instances.syncTo(shepard);

//you can also synchronize very specific instances
ectwo.instances.syncTo({ "tags": { key: "type", value: "red5" } }, shepard);


shepard.findAll(function(err, clients) {
  client.restart();
});

```

### Server API


#### server shepard.server(options)

Returns a new server instance

- `options`
  - `clientPort` - the client
  
### server.listen(port)

Listens on the particular port

#### server.find(query, callback)

finds multiple clients

#### server.findAll(callback)

finds all clients

#### server.findOne(query, callback)

finds one client

#### client.restart(callback)

restarts a client

#### client.stop(callback)

stops a client

#### client.start(callback)

starts a client

#### client.send(message)

sends a client message

#### client.onMessage(callback)

receives a message from a client


### Client API


### client.restart()

Default is restarting the cluster, but this can be overridden like so:

```javascript
var client = require("shepard").client();
client.restart = function(message, callback) {
  //do something
}
```







