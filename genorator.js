// Source Code For The Extension Creator
//visuals
Blockly.Blocks['argument'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("Argument")
        .appendField(new Blockly.FieldTextInput("Name"), "name");
    this.appendDummyInput()
        .appendField("Type")
        .appendField(new Blockly.FieldDropdown([["NUMBER","NUMBER"], ["STRING","STRING"], ["BOOLEAN","BOOLEAN"]]), "type");
    this.appendDummyInput()
        .appendField("Value")
        .appendField(new Blockly.FieldTextInput("1"), "value");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['javascript'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Javascript")
        .appendField(new Blockly.FieldTextInput("alert(\"Hello World\")"), "js");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['javascript'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Javascript")
        .appendField(new Blockly.FieldTextInput("alert(\"Hello World\")"), "js");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['extensionsetup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Extension")
        .appendField(new Blockly.FieldTextInput("Name"), "extensionname");
        this.appendDummyInput()
        .appentField("Color")
        .appendField(new Blockly.FieldColour("#009900"), "color");
    this.setColour(230);
    this.appendStatementInput("blocks")
        .setCheck("Define")
        .appendField("Define");
    this.appendStatementInput("details")
        .setCheck(null)
        .appendField("Details");
    this.appendStatementInput("menus")
        .setCheck(null)
        .appendField("Menus");
    this.appendDummyInput()
        .appendField("Help Text:")
        .appendField(new Blockly.FieldTextInput("Hello!"), "helptext");
    this.setInputsInline(false);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['blockdefinition'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("block")
        .appendField(new Blockly.FieldTextInput("name"), "blockname");
    this.appendStatementInput("definition")
        .setCheck(null);
    this.setPreviousStatement(true, "Define");
    this.setNextStatement(true, "Define");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['blockdescription'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Name")
        .appendField(new Blockly.FieldTextInput("name"), "blockname");
    this.appendDummyInput()
        .appendField("Type")
        .appendField(new Blockly.FieldDropdown([["COMMAND","COMMAND"], ["REPORTER","REPORTER"], ["BOOLEAN","BOOLEAN"], ["HAT","HAT"]]), "type");
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("Content:");
    this.appendValueInput("arguments")
        .setCheck(null)
        .appendField("Arguments");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['boolean'] = {
  init: function() {
    this.appendValueInput("boolean")
        .setCheck(null)
        .appendField("Boolean")
        .appendField(new Blockly.FieldTextInput("name"), "BooleanName");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['string'] = {
  init: function() {
    this.appendValueInput("string")
        .setCheck(null)
        .appendField("String")
        .appendField(new Blockly.FieldTextInput("name"), "StringName");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['valueofinput'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Value Of")
        .appendField(new Blockly.FieldTextInput("value name"), "valuename");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['textcontent'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("Text")
        .appendField(new Blockly.FieldTextInput("text"), "text");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
//define
Blockly.JavaScript['extensionsetup'] = function(block) {
  var text_extensionname = block.getFieldValue('extensionname');
  var colour_name = block.getFieldValue('color');
  var statements_blocks = Blockly.JavaScript.statementToCode(block, 'blocks');
  var statements_details = Blockly.JavaScript.statementToCode(block, 'details');
  var statements_menus = Blockly.JavaScript.statementToCode(block, 'menus');
  var text_helptext = block.getFieldValue('helptext');
  // TODO: Assemble JavaScript into code variable.
  var code = "class "+ text_extensionname +" {  constructor() {}  getInfo() { return { id: '"+ text_extensionname +"', name: '"+ text_extensionname +"',  color1: '"+  +"' }}}";
  return code;
};

Blockly.JavaScript['blockdefinition'] = function(block) {
  var text_blockname = block.getFieldValue('blockname');
  var statements_definition = Blockly.JavaScript.statementToCode(block, 'definition');
  // TODO: Assemble JavaScript into code variable.
  var code = null;
  return code;
};

Blockly.JavaScript['blockdescription'] = function(block) {
  var text_blockname = block.getFieldValue('blockname');
  var dropdown_type = block.getFieldValue('type');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var value_arguments = Blockly.JavaScript.valueToCode(block, 'arguments', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '{ opcode: "' + text_blockname + '", blocktype: Scratch.BlockType.' + dropdown_type + ', text:"' + value_name + '", arguments: { ' + value_arguments +' }},';
  return code;
};

Blockly.JavaScript['boolean'] = function(block) {
  var text_booleanname = block.getFieldValue('BooleanName');
  var value_boolean = Blockly.JavaScript.valueToCode(block, 'boolean', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '<' + text_booleanname + '> ' + value_boolean;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['string'] = function(block) {
  var text_stringname = block.getFieldValue('StringName');
  var value_string = Blockly.JavaScript.valueToCode(block, 'string');
  // TODO: Assemble JavaScript into code variable.
  var code = '[' + text_stringname + '] ' + value_string;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['valueofinput'] = function(block) {
  var text_valuename = block.getFieldValue('valuename');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.JavaScript['textcontent'] = function(block) {
  var text_text = block.getFieldValue('text');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = text_text + ' ' + value_name;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['argument'] = function(block) {
  var text_name = block.getFieldValue('name')
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME')
  var dropdown_type = block.getFieldValue('type');
  var text_value = block.getFieldValue('value');
  // TODO: Assemble JavaScript into code variable.
  var code = '' + text_name + ': { type: Scratch.ArgumentType.' + dropdown_type + ', defaultValue: ' + text_value + '},' + value_name;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['javascript'] = function(block) {
  var text_js = block.getFieldValue('js');
  // TODO: Assemble JavaScript into code variable.
  var code = text_js;
  return code;
};
