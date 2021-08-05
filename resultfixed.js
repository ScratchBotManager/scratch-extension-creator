var TestExtension = function () {}; TestExtension.prototype.getInfo = function () { return { id:"TestExtension", name:"TestExtension" blocks:[ { opcode: "alert", blocktype: Scratch.BlockType.COMMAND, text:"Alert [alertname]", arguments: { alertname: { type: Scratch.ArgumentType.STRING, defaultValue: Hello World}}] }
ExampleExtension.prototype.alert = function (args) {
alert(args.alertname);
};} Scratch.extensions.register(new TestExtension());
