//visuals
Blockly.Blocks['extensionsetup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Extension")
        .appendField(new Blockly.FieldTextInput("Name"), "extensionname");
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
        .appendField(new Blockly.FieldDropdown([["stack","stack"], ["reporter","reporter"], ["boolean","boolean"], ["hat","hat"]]), "type");
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("Content:");
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
  var statements_blocks = Blockly.JavaScript.statementToCode(block, 'blocks');
  var statements_details = Blockly.JavaScript.statementToCode(block, 'details');
  var statements_menus = Blockly.JavaScript.statementToCode(block, 'menus');
  var text_helptext = block.getFieldValue('helptext');
  // TODO: Assemble JavaScript into code variable.
  var code = 'class ' + text_extensionname + ' {      getInfo() {       return {
            "id": text_extensionname,' ' + ' } Scratch.extensions.register(new CustomJSBlocks());';
  return code;
};

Blockly.JavaScript['blockdefinition'] = function(block) {
  var text_blockname = block.getFieldValue('blockname');
  var statements_definition = Blockly.JavaScript.statementToCode(block, 'definition');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['blockdescription'] = function(block) {
  var text_blockname = block.getFieldValue('blockname');
  var dropdown_type = block.getFieldValue('type');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['boolean'] = function(block) {
  var text_booleanname = block.getFieldValue('BooleanName');
  var value_boolean = Blockly.JavaScript.valueToCode(block, 'boolean', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['string'] = function(block) {
  var text_stringname = block.getFieldValue('StringName');
  var value_string = Blockly.JavaScript.valueToCode(block, 'string', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['valueofinput'] = function(block) {
  var text_valuename = block.getFieldValue('valuename');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['textcontent'] = function(block) {
  var text_text = block.getFieldValue('text');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
