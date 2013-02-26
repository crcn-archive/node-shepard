### Example

Client:

```javascript

//load shepard as the main entry point, and point to the application index file.
var shepard = require("shepard").client(__dirname + "/index.js").listen();
```

Server:

```javascript
var shepard = require("shepard").server().listen();

shepard.add({
  name: "my server",
  address: "127.0.0.1",
  tags: {
    type: "app-name"
  }
});


//invoke a soft-restart against the application. 
shepard.findOne({ tags: { type: "app-name" }}).sync().restart();
```








