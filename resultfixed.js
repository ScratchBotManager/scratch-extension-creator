class test implements ScratchExtension { getInfo(): ExtensionMetadata { return { id: 'test', name: 'test', color1: '33cc33', blocks: { opcode: 'test', blocktype: Scratch.BlockType.REPORTER, text:'test', arguments: { }},}}

	test({}: {}): {
		return `Hello World`
	}

} Scratch.extensions.register(new test());
