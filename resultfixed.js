/* global Scratch */
/// <reference types="scratch-env"/>

class test implements ScratchExtension {
	getInfo(): ExtensionMetadata { 
		return { 
			id: 'test', 
			name: 'test',  
			blocks: [{ 
				opcode: 'test', 
				blocktype: Scratch.BlockType.REPORTER, 
				text:'test [name]',
				arguments: {
					name: {
						type: Scratch.ArgumentType.STRING,
						defaultValue: "Test"
					}
				}
			}]
				}
			}

	test({}: {}): {
		return `Hello World`
	}

}

Scratch.extensions.register(new test())
