var os = require("os");

module.exports  = function(type) {
  return (os.type() == "Windows_NT" ? "C:\\ProgramData\\shepard\\" : "/usr/local/etc/shepard/") + type
}