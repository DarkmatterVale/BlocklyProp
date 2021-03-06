/**
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * http://blockly.googlecode.com/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview English strings.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

/**
 * Due to the frequency of long strings, the 80-column wrap rule need not apply
 * to message files.
 */

// Context menus.
Blockly.MSG_DUPLICATE_BLOCK = 'Duplicate';
Blockly.MSG_REMOVE_COMMENT = 'Remove Comment';
Blockly.MSG_ADD_COMMENT = 'Add Comment';
Blockly.MSG_EXTERNAL_INPUTS = 'External Inputs';
Blockly.MSG_INLINE_INPUTS = 'Inline Inputs';
Blockly.MSG_DELETE_BLOCK = 'Delete Block';
Blockly.MSG_DELETE_X_BLOCKS = 'Delete %1 Blocks';
Blockly.MSG_COLLAPSE_BLOCK = 'Collapse Block';
Blockly.MSG_EXPAND_BLOCK = 'Expand Block';
Blockly.MSG_DISABLE_BLOCK = 'Disable Block';
Blockly.MSG_ENABLE_BLOCK = 'Enable Block';
Blockly.MSG_HELP = 'Help';

// Variable renaming.
Blockly.MSG_CHANGE_VALUE_TITLE = 'Change value:';
Blockly.MSG_NEW_VARIABLE = 'New variable...';
Blockly.MSG_NEW_VARIABLE_TITLE = 'New variable name:';
Blockly.MSG_RENAME_VARIABLE = 'Rename variable...';
Blockly.MSG_RENAME_VARIABLE_TITLE = 'Rename all "%1" variables to:';

// Pointer renaming.
Blockly.MSG_NEW_POINTER = 'New pointer...';
Blockly.MSG_NEW_POINTER_TITLE = 'New pointer name:';
Blockly.MSG_RENAME_POINTER = 'Rename pointer...';
Blockly.MSG_RENAME_POINTER_TITLE = 'Rename all "%1" pointers to:';

// Toolbox.
Blockly.MSG_VARIABLE_CATEGORY = 'Variables';
Blockly.MSG_PROCEDURE_CATEGORY = 'Methods';
Blockly.MSG_POINTER_CATEGORY = 'Pointers';

// Colour Blocks.
Blockly.LANG_CATEGORY_COLOUR = 'Colour';
Blockly.LANG_COLOUR_PICKER_HELPURL = 'http://en.wikipedia.org/wiki/Color';
Blockly.LANG_COLOUR_PICKER_TOOLTIP = 'Choose a colour form the palette.';

Blockly.LANG_COLOUR_RGB_HELPURL = 'http://en.wikipedia.org/wiki/RGB_color_model';
Blockly.LANG_COLOUR_RGB_TITLE = 'colour with';
Blockly.LANG_COLOUR_RGB_RED = 'red';
Blockly.LANG_COLOUR_RGB_GREEN = 'green';
Blockly.LANG_COLOUR_RGB_BLUE = 'blue';
Blockly.LANG_COLOUR_RGB_TOOLTIP = 'Create a colour with the specified amount of red, green,\n' +
        'and blue.  All values must be between 0.0 and 1.0.';

Blockly.LANG_COLOUR_BLEND_TITLE = 'blend';
Blockly.LANG_COLOUR_BLEND_COLOUR1 = 'colour 1';
Blockly.LANG_COLOUR_BLEND_COLOUR2 = 'colour 2';
Blockly.LANG_COLOUR_BLEND_RATIO = 'ratio';
Blockly.LANG_COLOUR_BLEND_TOOLTIP = 'Blends two colours together with a given ratio (0.0 - 1.0).';

// Control Blocks.
Blockly.LANG_CATEGORY_CONTROLS = 'Control';
//Blockly.LANG_CONTROLS_IF_HELPURL = 'http://code.google.com/p/blockly/wiki/If_Then';
//Blockly.LANG_CONTROLS_IF_TOOLTIP_1 = 'If a value is true, then do some statements.';
//Blockly.LANG_CONTROLS_IF_TOOLTIP_2 = 'If a value is true, then do the first block of statements.\n' +
//        'Otherwise, do the second block of statements.';
//Blockly.LANG_CONTROLS_IF_TOOLTIP_3 = 'If the first value is true, then do the first block of statements.\n' +
//        'Otherwise, if the second value is true, do the second block of statements.';
//Blockly.LANG_CONTROLS_IF_TOOLTIP_4 = 'If the first value is true, then do the first block of statements.\n' +
//        'Otherwise, if the second value is true, do the second block of statements.\n' +
//        'If none of the values are true, do the last block of statements.';
Blockly.LANG_CONTROLS_IF_MSG_IF = 'if';
Blockly.LANG_CONTROLS_IF_MSG_ELSEIF = 'else if';
Blockly.LANG_CONTROLS_IF_MSG_ELSE = 'else';
Blockly.LANG_CONTROLS_IF_MSG_THEN = 'do';

Blockly.LANG_CONTROLS_IF_IF_TITLE_IF = 'if';
Blockly.LANG_CONTROLS_IF_IF_TOOLTIP = 'Add, remove, or reorder sections\n' +
        'to reconfigure this if block.';

Blockly.LANG_CONTROLS_IF_ELSEIF_TITLE_ELSEIF = 'else if';
Blockly.LANG_CONTROLS_IF_ELSEIF_TOOLTIP = 'Add a condition to the if block.';

Blockly.LANG_CONTROLS_IF_ELSE_TITLE_ELSE = 'else';
Blockly.LANG_CONTROLS_IF_ELSE_TOOLTIP = 'Add a final, catch-all condition to the if block.';

//Blockly.LANG_CONTROLS_REPEAT_HELPURL = 'http://en.wikipedia.org/wiki/For_loop';
Blockly.LANG_CONTROLS_REPEAT_TITLE_REPEAT = 'repeat';
Blockly.LANG_CONTROLS_REPEAT_TITLE_TIMES = 'times';
Blockly.LANG_CONTROLS_REPEAT_INPUT_DO = 'do';
//Blockly.LANG_CONTROLS_REPEAT_TOOLTIP = 'Do some statements several times.';

Blockly.LANG_CONTROLS_WHILEUNTIL_HELPURL = 'http://code.google.com/p/blockly/wiki/Repeat';
Blockly.LANG_CONTROLS_WHILEUNTIL_TITLE_REPEAT = 'repeat';
Blockly.LANG_CONTROLS_WHILEUNTIL_INPUT_DO = 'do';
Blockly.LANG_CONTROLS_WHILEUNTIL_OPERATOR_WHILE = 'while';
Blockly.LANG_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL = 'until';
Blockly.LANG_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE = 'While a value is true, then do some statements.';
Blockly.LANG_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL = 'While a value is false, then do some statements.';

Blockly.LANG_CONTROLS_FOR_HELPURL = 'http://en.wikipedia.org/wiki/For_loop';
Blockly.LANG_CONTROLS_FOR_INPUT_WITH = 'count with';
Blockly.LANG_CONTROLS_FOR_INPUT_VAR = 'x';
Blockly.LANG_CONTROLS_FOR_INPUT_FROM = 'from';
Blockly.LANG_CONTROLS_FOR_INPUT_TO = 'to';
Blockly.LANG_CONTROLS_FOR_INPUT_DO = 'do';
Blockly.LANG_CONTROLS_FOR_TOOLTIP = 'Count from a start number to an end number.\n' +
        'For each count, set the current count number to\n' +
        'variable "%1", and then do some statements.';

Blockly.LANG_CONTROLS_FOREACH_HELPURL = 'http://en.wikipedia.org/wiki/For_loop';
Blockly.LANG_CONTROLS_FOREACH_INPUT_ITEM = 'for each item';
Blockly.LANG_CONTROLS_FOREACH_INPUT_VAR = 'x';
Blockly.LANG_CONTROLS_FOREACH_INPUT_INLIST = 'in list';
Blockly.LANG_CONTROLS_FOREACH_INPUT_DO = 'do';
Blockly.LANG_CONTROLS_FOREACH_TOOLTIP = 'For each item in a list, set the item to\n' +
        'variable "%1", and then do some statements.';

Blockly.LANG_CONTROLS_FLOW_STATEMENTS_HELPURL = 'http://en.wikipedia.org/wiki/Control_flow';
Blockly.LANG_CONTROLS_FLOW_STATEMENTS_INPUT_OFLOOP = 'of loop';
Blockly.LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK = 'break out';
Blockly.LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE = 'continue with next iteration';
Blockly.LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK = 'Break out of the containing loop.';
Blockly.LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE = 'Skip the rest of this loop, and\n' +
        'continue with the next iteration.';
Blockly.LANG_CONTROLS_FLOW_STATEMENTS_WARNING = 'Warning:\n' +
        'This block may only\n' +
        'be used within a loop.';

// Logic Blocks.
Blockly.LANG_CATEGORY_LOGIC = 'Logic';
//Blockly.LANG_LOGIC_COMPARE_HELPURL = 'http://en.wikipedia.org/wiki/Inequality_(mathematics)';
//Blockly.LANG_LOGIC_COMPARE_TOOLTIP_EQ = 'Return true if both inputs equal each other.';
//Blockly.LANG_LOGIC_COMPARE_TOOLTIP_NEQ = 'Return true if both inputs are not equal to each other.';
//Blockly.LANG_LOGIC_COMPARE_TOOLTIP_LT = 'Return true if the first input is smaller\n' +
//        'than the second input.';
//Blockly.LANG_LOGIC_COMPARE_TOOLTIP_LTE = 'Return true if the first input is smaller\n' +
//        'than or equal to the second input.';
//Blockly.LANG_LOGIC_COMPARE_TOOLTIP_GT = 'Return true if the first input is greater\n' +
//        'than the second input.';
//Blockly.LANG_LOGIC_COMPARE_TOOLTIP_GTE = 'Return true if the first input is greater\n' +
//        'than or equal to the second input.';

//Blockly.LANG_LOGIC_OPERATION_HELPURL = 'http://code.google.com/p/blockly/wiki/And_Or';
Blockly.LANG_LOGIC_OPERATION_AND = 'and';
Blockly.LANG_LOGIC_OPERATION_OR = 'or';
//Blockly.LANG_LOGIC_OPERATION_TOOLTIP_AND = 'Return true if both inputs are true.';
//Blockly.LANG_LOGIC_OPERATION_TOOLTIP_OR = 'Return true if either inputs are true.';

//Blockly.LANG_LOGIC_NEGATE_HELPURL = 'http://code.google.com/p/blockly/wiki/Not';
Blockly.LANG_LOGIC_NEGATE_INPUT_NOT = 'not';
//Blockly.LANG_LOGIC_NEGATE_TOOLTIP = 'Returns true if the input is false.\n' +
//        'Returns false if the input is true.';

//Blockly.LANG_LOGIC_BOOLEAN_HELPURL = 'http://code.google.com/p/blockly/wiki/True_False';
Blockly.LANG_LOGIC_BOOLEAN_TRUE = 'true';
Blockly.LANG_LOGIC_BOOLEAN_FALSE = 'false';
//Blockly.LANG_LOGIC_BOOLEAN_TOOLTIP = 'Returns either true or false.';

Blockly.LANG_LOGIC_NULL_HELPURL = 'http://en.wikipedia.org/wiki/Nullable_type';
Blockly.LANG_LOGIC_NULL = 'null';
Blockly.LANG_LOGIC_NULL_TOOLTIP = 'Returns null.';

// Math Blocks.
Blockly.LANG_CATEGORY_MATH = 'Math';
//Blockly.LANG_MATH_NUMBER_HELPURL = 'http://en.wikipedia.org/wiki/Number';
//Blockly.LANG_MATH_NUMBER_TOOLTIP = 'A number.';

//Blockly.LANG_MATH_ARITHMETIC_HELPURL = 'http://en.wikipedia.org/wiki/Arithmetic';
//Blockly.LANG_MATH_ARITHMETIC_TOOLTIP_ADD = 'Return the sum of the two numbers.';
//Blockly.LANG_MATH_ARITHMETIC_TOOLTIP_MINUS = 'Return the difference of the two numbers.';
//Blockly.LANG_MATH_ARITHMETIC_TOOLTIP_MULTIPLY = 'Return the product of the two numbers.';
//Blockly.LANG_MATH_ARITHMETIC_TOOLTIP_DIVIDE = 'Return the quotient of the two numbers.';
//Blockly.LANG_MATH_ARITHMETIC_TOOLTIP_POWER = 'Return the first number raised to\n' +
//        'the power of the second number.';

Blockly.LANG_MATH_CHANGE_HELPURL = 'http://en.wikipedia.org/wiki/Negation';
Blockly.LANG_MATH_CHANGE_TITLE_CHANGE = 'change';
Blockly.LANG_MATH_CHANGE_TITLE_ITEM = 'item';
Blockly.LANG_MATH_CHANGE_INPUT_BY = 'by';
Blockly.LANG_MATH_CHANGE_TOOLTIP = 'Add a number to variable "%1".';

Blockly.LANG_MATH_SINGLE_HELPURL = 'http://en.wikipedia.org/wiki/Square_root';
Blockly.LANG_MATH_SINGLE_OP_ROOT = 'square root';
Blockly.LANG_MATH_SINGLE_OP_ABSOLUTE = 'absolute';
Blockly.LANG_MATH_SINGLE_TOOLTIP_ROOT = 'Return the square root of a number.';
Blockly.LANG_MATH_SINGLE_TOOLTIP_ABS = 'Return the absolute value of a number.';
Blockly.LANG_MATH_SINGLE_TOOLTIP_NEG = 'Return the negation of a number.';
Blockly.LANG_MATH_SINGLE_TOOLTIP_LN = 'Return the natural logarithm of a number.';
Blockly.LANG_MATH_SINGLE_TOOLTIP_LOG10 = 'Return the base 10 logarithm of a number.';
Blockly.LANG_MATH_SINGLE_TOOLTIP_EXP = 'Return e to the power of a number.';
Blockly.LANG_MATH_SINGLE_TOOLTIP_POW10 = 'Return 10 to the power of a number.';

Blockly.LANG_MATH_ROUND_HELPURL = 'http://en.wikipedia.org/wiki/Rounding';
Blockly.LANG_MATH_ROUND_TOOLTIP = 'Round a number up or down.';
Blockly.LANG_MATH_ROUND_OPERATOR_ROUND = 'round';
Blockly.LANG_MATH_ROUND_OPERATOR_ROUNDUP = 'round up';
Blockly.LANG_MATH_ROUND_OPERATOR_ROUNDDOWN = 'round down';

Blockly.LANG_MATH_TRIG_HELPURL = 'http://en.wikipedia.org/wiki/Trigonometric_functions';
Blockly.LANG_MATH_TRIG_TOOLTIP_SIN = 'Return the sine of a degree.';
Blockly.LANG_MATH_TRIG_TOOLTIP_COS = 'Return the cosine of a degree.';
Blockly.LANG_MATH_TRIG_TOOLTIP_TAN = 'Return the tangent of a degree.';
Blockly.LANG_MATH_TRIG_TOOLTIP_ASIN = 'Return the arcsine of a number.';
Blockly.LANG_MATH_TRIG_TOOLTIP_ACOS = 'Return the arccosine of a number.';
Blockly.LANG_MATH_TRIG_TOOLTIP_ATAN = 'Return the arctangent of a number.';

Blockly.LANG_MATH_ONLIST_HELPURL = '';
Blockly.LANG_MATH_ONLIST_INPUT_OFLIST = 'of list';
Blockly.LANG_MATH_ONLIST_OPERATOR_SUM = 'sum';
Blockly.LANG_MATH_ONLIST_OPERATOR_MIN = 'min';
Blockly.LANG_MATH_ONLIST_OPERATOR_MAX = 'max';
Blockly.LANG_MATH_ONLIST_OPERATOR_AVERAGE = 'average';
Blockly.LANG_MATH_ONLIST_OPERATOR_MEDIAN = 'median';
Blockly.LANG_MATH_ONLIST_OPERATOR_MODE = 'modes';
Blockly.LANG_MATH_ONLIST_OPERATOR_STD_DEV = 'standard deviation';
Blockly.LANG_MATH_ONLIST_OPERATOR_RANDOM = 'random item';
Blockly.LANG_MATH_ONLIST_TOOLTIP_SUM = 'Return the sum of all the numbers in the list.';
Blockly.LANG_MATH_ONLIST_TOOLTIP_MIN = 'Return the smallest number in the list.';
Blockly.LANG_MATH_ONLIST_TOOLTIP_MAX = 'Return the largest number in the list.';
Blockly.LANG_MATH_ONLIST_TOOLTIP_AVERAGE = 'Return the arithmetic mean of the list.';
Blockly.LANG_MATH_ONLIST_TOOLTIP_MEDIAN = 'Return the median number in the list.';
Blockly.LANG_MATH_ONLIST_TOOLTIP_MODE = 'Return a list of the most common item(s) in the list.';
Blockly.LANG_MATH_ONLIST_TOOLTIP_STD_DEV = 'Return the standard deviation of the list.';
Blockly.LANG_MATH_ONLIST_TOOLTIP_RANDOM = 'Return a random element from the list.';

Blockly.LANG_MATH_CONSTRAIN_HELPURL = 'http://en.wikipedia.org/wiki/Clamping_%28graphics%29';
Blockly.LANG_MATH_CONSTRAIN_INPUT_CONSTRAIN = 'constrain';
Blockly.LANG_MATH_CONSTRAIN_INPUT_LOW = 'between (low)';
Blockly.LANG_MATH_CONSTRAIN_INPUT_HIGH = 'and (high)';
Blockly.LANG_MATH_CONSTRAIN_TOOLTIP = 'Constrain a number to be between the specified limits (inclusive).';

Blockly.LANG_MATH_MODULO_HELPURL = 'http://en.wikipedia.org/wiki/Modulo_operation';
Blockly.LANG_MATH_MODULO_INPUT_DIVIDEND = 'remainder of';
Blockly.LANG_MATH_MODULO_TOOLTIP = 'Return the remainder of dividing both numbers.';

Blockly.LANG_MATH_RANDOM_INT_HELPURL = 'http://en.wikipedia.org/wiki/Random_number_generation';
Blockly.LANG_MATH_RANDOM_INT_INPUT_FROM = 'random integer from';
Blockly.LANG_MATH_RANDOM_INT_INPUT_TO = 'to';
Blockly.LANG_MATH_RANDOM_INT_TOOLTIP = 'Return a random integer between the two\n' +
        'specified limits, inclusive.';

Blockly.LANG_MATH_RANDOM_FLOAT_HELPURL = 'http://en.wikipedia.org/wiki/Random_number_generation';
Blockly.LANG_MATH_RANDOM_FLOAT_TITLE_RANDOM = 'random fraction';
Blockly.LANG_MATH_RANDOM_FLOAT_TOOLTIP = 'Return a random fraction between\n' +
        '0.0 (inclusive) and 1.0 (exclusive).';

// Text Blocks.
Blockly.LANG_CATEGORY_TEXT = 'Text';
Blockly.LANG_TEXT_TEXT_HELPURL = 'http://en.wikipedia.org/wiki/String_(computer_science)';
Blockly.LANG_TEXT_TEXT_TOOLTIP = 'A letter, word, or line of text.';

Blockly.LANG_TEXT_JOIN_HELPURL = '';
Blockly.LANG_TEXT_JOIN_TITLE_CREATEWITH = 'create text with';
Blockly.LANG_TEXT_JOIN_TOOLTIP = 'Create a piece of text by joining\n' +
        'together any number of items.';

Blockly.LANG_TEXT_CREATE_JOIN_TITLE_JOIN = 'join';
Blockly.LANG_TEXT_CREATE_JOIN_TOOLTIP = 'Add, remove, or reorder sections to reconfigure this text block.';

Blockly.LANG_TEXT_CREATE_JOIN_ITEM_TITLE_ITEM = 'item';
Blockly.LANG_TEXT_CREATE_JOIN_ITEM_TOOLTIP = 'Add an item to the text.';

Blockly.LANG_TEXT_APPEND_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode91.html';
Blockly.LANG_TEXT_APPEND_TO = 'to';
Blockly.LANG_TEXT_APPEND_APPENDTEXT = 'append text';
Blockly.LANG_TEXT_APPEND_VARIABLE = 'item';
Blockly.LANG_TEXT_APPEND_TOOLTIP = 'Append some text to variable "%1".';

Blockly.LANG_TEXT_LENGTH_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode91.html';
Blockly.LANG_TEXT_LENGTH_INPUT_LENGTH = 'length';
Blockly.LANG_TEXT_LENGTH_TOOLTIP = 'Returns number of letters (including spaces)\n' +
        'in the provided text.';

Blockly.LANG_TEXT_ISEMPTY_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode91.html';
Blockly.LANG_TEXT_ISEMPTY_INPUT_ISEMPTY = 'is empty';
Blockly.LANG_TEXT_ISEMPTY_TOOLTIP = 'Returns true if the provided text is empty.';

Blockly.LANG_TEXT_ENDSTRING_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
Blockly.LANG_TEXT_ENDSTRING_INPUT = 'letters in text';
Blockly.LANG_TEXT_ENDSTRING_TOOLTIP = 'Returns specified number of letters at the beginning or end of the text.';
Blockly.LANG_TEXT_ENDSTRING_OPERATOR_FIRST = 'first';
Blockly.LANG_TEXT_ENDSTRING_OPERATOR_LAST = 'last';

Blockly.LANG_TEXT_INDEXOF_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
Blockly.LANG_TEXT_INDEXOF_TITLE_FIND = 'find';
Blockly.LANG_TEXT_INDEXOF_INPUT_OCCURRENCE = 'occurrence of text';
Blockly.LANG_TEXT_INDEXOF_INPUT_INTEXT = 'in text';
Blockly.LANG_TEXT_INDEXOF_TOOLTIP = 'Returns the index of the first/last occurrence\n' +
        'of first text in the second text.\n' +
        'Returns 0 if text is not found.';
Blockly.LANG_TEXT_INDEXOF_OPERATOR_FIRST = 'first';
Blockly.LANG_TEXT_INDEXOF_OPERATOR_LAST = 'last';

Blockly.LANG_TEXT_CHARAT_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
Blockly.LANG_TEXT_CHARAT_INPUT_AT = 'letter at';
Blockly.LANG_TEXT_CHARAT_INPUT_INTEXT = 'in text';
Blockly.LANG_TEXT_CHARAT_TOOLTIP = 'Returns the letter at the specified position.';

Blockly.LANG_TEXT_CHANGECASE_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode91.html';
Blockly.LANG_TEXT_CHANGECASE_TITLE_TO = 'to';
Blockly.LANG_TEXT_CHANGECASE_TOOLTIP = 'Return a copy of the text in a different case.';
Blockly.LANG_TEXT_CHANGECASE_OPERATOR_UPPERCASE = 'UPPER CASE';
Blockly.LANG_TEXT_CHANGECASE_OPERATOR_LOWERCASE = 'lower case';
Blockly.LANG_TEXT_CHANGECASE_OPERATOR_TITLECASE = 'Title Case';

Blockly.LANG_TEXT_TRIM_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode91.html';
Blockly.LANG_TEXT_TRIM_TITLE_SPACE = 'trim spaces from';
Blockly.LANG_TEXT_TRIM_TITLE_SIDES = 'sides';
Blockly.LANG_TEXT_TRIM_TOOLTIP = 'Return a copy of the text with spaces\n' +
        'removed from one or both ends.';
Blockly.LANG_TEXT_TRIM_TITLE_SIDES = 'sides';
Blockly.LANG_TEXT_TRIM_TITLE_SIDE = 'side';
Blockly.LANG_TEXT_TRIM_OPERATOR_BOTH = 'both';
Blockly.LANG_TEXT_TRIM_OPERATOR_LEFT = 'left';
Blockly.LANG_TEXT_TRIM_OPERATOR_RIGHT = 'right';

Blockly.LANG_TEXT_PRINT_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode91.html';
Blockly.LANG_TEXT_PRINT_TITLE_PRINT = 'print';
Blockly.LANG_TEXT_PRINT_TOOLTIP = 'Print the specified text, number or other value.';

Blockly.LANG_TEXT_PROMPT_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode92.html';
Blockly.LANG_TEXT_PROMPT_TITLE_PROMPT_FOR = 'prompt for';
Blockly.LANG_TEXT_PROMPT_TITILE_WITH_MESSAGE = 'with message';
Blockly.LANG_TEXT_PROMPT_TOOLTIP = 'Prompt for user input with the specified text.';
Blockly.LANG_TEXT_PROMPT_TYPE_TEXT = 'text';
Blockly.LANG_TEXT_PROMPT_TYPE_NUMBER = 'number';

// Lists Blocks.
Blockly.LANG_CATEGORY_LISTS = 'Lists';
Blockly.LANG_LISTS_CREATE_EMPTY_HELPURL = 'http://en.wikipedia.org/wiki/Linked_list#Empty_lists';
Blockly.LANG_LISTS_CREATE_EMPTY_TITLE = 'create empty list';
Blockly.LANG_LISTS_CREATE_EMPTY_TOOLTIP = 'Returns a list, of length 0, containing no data records';

Blockly.LANG_LISTS_CREATE_WITH_INPUT_WITH = 'create list with';
Blockly.LANG_LISTS_CREATE_WITH_TOOLTIP = 'Create a list with any number of items.';

Blockly.LANG_LISTS_CREATE_WITH_CONTAINER_TITLE_ADD = 'list';
Blockly.LANG_LISTS_CREATE_WITH_CONTAINER_TOOLTIP = 'Add, remove, or reorder sections to reconfigure this list block.';

Blockly.LANG_LISTS_CREATE_WITH_ITEM_TITLE = 'item';
Blockly.LANG_LISTS_CREATE_WITH_ITEM_TOOLTIP = 'Add an item to the list.';

Blockly.LANG_LISTS_REPEAT_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
Blockly.LANG_LISTS_REPEAT_INPUT_WITH = 'create list with item';
Blockly.LANG_LISTS_REPEAT_INPUT_REPEATED = 'repeated';
Blockly.LANG_LISTS_REPEAT_INPUT_TIMES = 'times';
Blockly.LANG_LISTS_REPEAT_TOOLTIP = 'Creates a list consisting of the given value\n' +
        'repeated the specified number of times.';

Blockly.LANG_LISTS_LENGTH_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode91.html';
Blockly.LANG_LISTS_LENGTH_INPUT_LENGTH = 'length';
Blockly.LANG_LISTS_LENGTH_TOOLTIP = 'Returns the length of a list.';

Blockly.LANG_LISTS_IS_EMPTY_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode91.html';
Blockly.LANG_LISTS_INPUT_IS_EMPTY = 'is empty';
Blockly.LANG_LISTS_TOOLTIP = 'Returns true if the list is empty.';

Blockly.LANG_LISTS_INDEX_OF_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
Blockly.LANG_LISTS_INDEX_OF_TITLE_FIND = 'find';
Blockly.LANG_LISTS_INDEX_OF_INPUT_OCCURRENCE = 'occurrence of item';
Blockly.LANG_LISTS_INDEX_OF_INPUT_IN_LIST = 'in list';
Blockly.LANG_LISTS_INDEX_OF_TOOLTIP = 'Returns the index of the first/last occurrence\n' +
        'of the item in the list.\n' +
        'Returns 0 if text is not found.';
Blockly.LANG_LISTS_INDEX_OF_FIRST = 'first';
Blockly.LANG_LISTS_INDEX_OF_LAST = 'last';

Blockly.LANG_LISTS_GET_INDEX_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
Blockly.LANG_LISTS_GET_INDEX_INPUT_AT = 'get item at';
Blockly.LANG_LISTS_GET_INDEX_INPUT_IN_LIST = 'in list';
Blockly.LANG_LISTS_GET_INDEX_TOOLTIP = 'Returns the value at the specified position in a list.';

Blockly.LANG_LISTS_SET_INDEX_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
Blockly.LANG_LISTS_SET_INDEX_INPUT_AT = 'set item at';
Blockly.LANG_LISTS_SET_INDEX_INPUT_IN_LIST = 'in list';
Blockly.LANG_LISTS_SET_INDEX_INPUT_TO = 'to';
Blockly.LANG_LISTS_SET_INDEX_TOOLTIP = 'Sets the value at the specified position in a list.';

// Variables Blocks.
Blockly.LANG_VARIABLES_GET_HELPURL = 'http://en.wikipedia.org/wiki/Variable_(computer_science)';
Blockly.LANG_VARIABLES_GET_TITLE = 'get';
Blockly.LANG_VARIABLES_GET_ITEM = 'item';
Blockly.LANG_VARIABLES_GET_TOOLTIP = 'Returns the value of this variable.';

Blockly.LANG_VARIABLES_SET_HELPURL = 'http://en.wikipedia.org/wiki/Variable_(computer_science)';
Blockly.LANG_VARIABLES_SET_TITLE = 'set';
Blockly.LANG_VARIABLES_SET_ITEM = 'item';
Blockly.LANG_VARIABLES_SET_TOOLTIP = 'Sets this variable to be equal to the input.';

// Procedures Blocks.
Blockly.LANG_PROCEDURES_DEFNORETURN_HELPURL = 'http://en.wikipedia.org/wiki/Procedure_%28computer_science%29';
Blockly.LANG_PROCEDURES_DEFNORETURN_PROCEDURE = 'method';
Blockly.LANG_PROCEDURES_DEFNORETURN_DO = 'do';
Blockly.LANG_PROCEDURES_DEFNORETURN_TOOLTIP = 'A method with no return value.';

Blockly.LANG_PROCEDURES_DEFRETURN_HELPURL = 'http://en.wikipedia.org/wiki/Procedure_%28computer_science%29';
Blockly.LANG_PROCEDURES_DEFRETURN_PROCEDURE = Blockly.LANG_PROCEDURES_DEFNORETURN_PROCEDURE;
Blockly.LANG_PROCEDURES_DEFRETURN_DO = Blockly.LANG_PROCEDURES_DEFNORETURN_DO;
Blockly.LANG_PROCEDURES_DEFRETURN_RETURN = 'return';
Blockly.LANG_PROCEDURES_DEFRETURN_TOOLTIP = 'A method with a return value.';

Blockly.LANG_PROCEDURES_DEF_DUPLICATE_WARNING = 'Warning:\n' +
        'This method has\n' +
        'duplicate parameters.';

Blockly.LANG_PROCEDURES_CALLNORETURN_HELPURL = 'http://en.wikipedia.org/wiki/Procedure_%28computer_science%29';
Blockly.LANG_PROCEDURES_CALLNORETURN_CALL = 'do';
Blockly.LANG_PROCEDURES_CALLNORETURN_PROCEDURE = 'method';
Blockly.LANG_PROCEDURES_CALLNORETURN_TOOLTIP = 'Call a method with no return value.';

Blockly.LANG_PROCEDURES_CALLRETURN_HELPURL = 'http://en.wikipedia.org/wiki/Procedure_%28computer_science%29';
Blockly.LANG_PROCEDURES_CALLRETURN_CALL = Blockly.LANG_PROCEDURES_CALLNORETURN_CALL;
Blockly.LANG_PROCEDURES_CALLRETURN_PROCEDURE = Blockly.LANG_PROCEDURES_CALLNORETURN_PROCEDURE;
Blockly.LANG_PROCEDURES_CALLRETURN_TOOLTIP = 'Call a method with a return value.';

Blockly.LANG_PROCEDURES_MUTATORCONTAINER_TITLE = 'parameters';
Blockly.LANG_PROCEDURES_MUTATORARG_TITLE = 'variable:';

Blockly.LANG_PROCEDURES_HIGHLIGHT_DEF = 'Highlight Procedure';

Blockly.LANG_PROCEDURES_IFRETURN_TOOLTIP = 'If a value is true, then return a value.';
Blockly.LANG_PROCEDURES_IFRETURN_WARNING = 'Warning:\n' +
        'This block may only be\n' +
        'used within a method.';


// Bit Math Blocks.
Blockly.LANG_CATEGORY_BIT_MATH = 'Bit math';

Blockly.LANG_CATEGORY_COG = 'Cog';




Blockly.Msg.ADD_COMMENT = "Add Comment";
Blockly.Msg.AUTH = "Please authorize this app to enable your work to be saved and to allow it to be shared by you.";
Blockly.Msg.CHANGE_VALUE_TITLE = "Change value:";
Blockly.Msg.CHAT = "Chat with your collaborator by typing in this box!";
Blockly.Msg.CLEAN_UP = "Clean up Blocks";
Blockly.Msg.COLLAPSE_ALL = "Collapse Blocks";
Blockly.Msg.COLLAPSE_BLOCK = "Collapse Block";
Blockly.Msg.COLOUR_BLEND_COLOUR1 = "colour 1";
Blockly.Msg.COLOUR_BLEND_COLOUR2 = "colour 2";
Blockly.Msg.COLOUR_BLEND_HELPURL = "http://meyerweb.com/eric/tools/color-blend/";
Blockly.Msg.COLOUR_BLEND_RATIO = "ratio";
Blockly.Msg.COLOUR_BLEND_TITLE = "blend";
Blockly.Msg.COLOUR_BLEND_TOOLTIP = "Blends two colours together with a given ratio (0.0 - 1.0).";
Blockly.Msg.COLOUR_PICKER_HELPURL = "https://en.wikipedia.org/wiki/Color";
Blockly.Msg.COLOUR_PICKER_TOOLTIP = "Choose a colour from the palette.";
Blockly.Msg.COLOUR_RANDOM_HELPURL = "http://randomcolour.com";
Blockly.Msg.COLOUR_RANDOM_TITLE = "random colour";
Blockly.Msg.COLOUR_RANDOM_TOOLTIP = "Choose a colour at random.";
Blockly.Msg.COLOUR_RGB_BLUE = "blue";
Blockly.Msg.COLOUR_RGB_GREEN = "green";
Blockly.Msg.COLOUR_RGB_HELPURL = "http://www.december.com/html/spec/colorper.html";
Blockly.Msg.COLOUR_RGB_RED = "red";
Blockly.Msg.COLOUR_RGB_TITLE = "colour with";
Blockly.Msg.COLOUR_RGB_TOOLTIP = "Create a colour with the specified amount of red, green, and blue. All values must be between 0 and 100.";
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_HELPURL = "https://github.com/google/blockly/wiki/Loops#loop-termination-blocks";
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK = "break out of loop";
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE = "continue with next iteration of loop";
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK = "Break out of the containing loop.";
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE = "Skip the rest of this loop, and continue with the next iteration.";
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_WARNING = "Warning: This block may only be used within a loop.";
Blockly.Msg.CONTROLS_FOREACH_HELPURL = "https://github.com/google/blockly/wiki/Loops#for-each";
Blockly.Msg.CONTROLS_FOREACH_TITLE = "for each item %1 in list %2";
Blockly.Msg.CONTROLS_FOREACH_TOOLTIP = "For each item in a list, set the variable '%1' to the item, and then do some statements.";
Blockly.Msg.CONTROLS_FOR_HELPURL = "https://github.com/google/blockly/wiki/Loops#count-with";
Blockly.Msg.CONTROLS_FOR_TITLE = "count with %1 from %2 to %3 by %4";
Blockly.Msg.CONTROLS_FOR_TOOLTIP = "Have the variable '%1' take on the values from the start number to the end number, counting by the specified interval, and do the specified blocks.";
Blockly.Msg.CONTROLS_IF_ELSEIF_TOOLTIP = "Add a condition to the if block.";
Blockly.Msg.CONTROLS_IF_ELSE_TOOLTIP = "Add a final, catch-all condition to the if block.";
Blockly.Msg.CONTROLS_IF_HELPURL = "https://github.com/google/blockly/wiki/IfElse";
Blockly.Msg.CONTROLS_IF_IF_TOOLTIP = "Add, remove, or reorder sections to reconfigure this if block.";
Blockly.Msg.CONTROLS_IF_MSG_ELSE = "else";
Blockly.Msg.CONTROLS_IF_MSG_ELSEIF = "else if";
Blockly.Msg.CONTROLS_IF_MSG_IF = "if";
Blockly.Msg.CONTROLS_IF_TOOLTIP_1 = "If a value is true, then do some statements.";
Blockly.Msg.CONTROLS_IF_TOOLTIP_2 = "If a value is true, then do the first block of statements. Otherwise, do the second block of statements.";
Blockly.Msg.CONTROLS_IF_TOOLTIP_3 = "If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements.";
Blockly.Msg.CONTROLS_IF_TOOLTIP_4 = "If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements. If none of the values are true, do the last block of statements.";
Blockly.Msg.CONTROLS_REPEAT_HELPURL = "https://en.wikipedia.org/wiki/For_loop";
Blockly.Msg.CONTROLS_REPEAT_INPUT_DO = "do";
Blockly.Msg.CONTROLS_REPEAT_TITLE = "repeat %1 times";
Blockly.Msg.CONTROLS_REPEAT_TOOLTIP = "Do some statements several times.";
Blockly.Msg.CONTROLS_WHILEUNTIL_HELPURL = "https://github.com/google/blockly/wiki/Loops#repeat";
Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL = "repeat until";
Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_WHILE = "repeat while";
Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL = "While a value is false, then do some statements.";
Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE = "While a value is true, then do some statements.";
Blockly.Msg.DELETE_ALL_BLOCKS = "Delete all %1 blocks?";
Blockly.Msg.DELETE_BLOCK = "Delete Block";
Blockly.Msg.DELETE_X_BLOCKS = "Delete %1 Blocks";
Blockly.Msg.DISABLE_BLOCK = "Disable Block";
Blockly.Msg.DUPLICATE_BLOCK = "Duplicate";
Blockly.Msg.ENABLE_BLOCK = "Enable Block";
Blockly.Msg.EXPAND_ALL = "Expand Blocks";
Blockly.Msg.EXPAND_BLOCK = "Expand Block";
Blockly.Msg.EXTERNAL_INPUTS = "External Inputs";
Blockly.Msg.HELP = "Help";
Blockly.Msg.INLINE_INPUTS = "Inline Inputs";
Blockly.Msg.LISTS_CREATE_EMPTY_HELPURL = "https://github.com/google/blockly/wiki/Lists#create-empty-list";
Blockly.Msg.LISTS_CREATE_EMPTY_TITLE = "create empty list";
Blockly.Msg.LISTS_CREATE_EMPTY_TOOLTIP = "Returns a list, of length 0, containing no data records";
Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD = "list";
Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP = "Add, remove, or reorder sections to reconfigure this list block.";
Blockly.Msg.LISTS_CREATE_WITH_HELPURL = "https://github.com/google/blockly/wiki/Lists#create-list-with";
Blockly.Msg.LISTS_CREATE_WITH_INPUT_WITH = "create list with";
Blockly.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP = "Add an item to the list.";
Blockly.Msg.LISTS_CREATE_WITH_TOOLTIP = "Create a list with any number of items.";
Blockly.Msg.LISTS_GET_INDEX_FIRST = "first";
Blockly.Msg.LISTS_GET_INDEX_FROM_END = "# from end";
Blockly.Msg.LISTS_GET_INDEX_FROM_START = "#";
Blockly.Msg.LISTS_GET_INDEX_GET = "get";
Blockly.Msg.LISTS_GET_INDEX_GET_REMOVE = "get and remove";
Blockly.Msg.LISTS_GET_INDEX_LAST = "last";
Blockly.Msg.LISTS_GET_INDEX_RANDOM = "random";
Blockly.Msg.LISTS_GET_INDEX_REMOVE = "remove";
Blockly.Msg.LISTS_GET_INDEX_TAIL = "";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FIRST = "Returns the first item in a list.";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FROM_END = "Returns the item at the specified position in a list. #1 is the last item.";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FROM_START = "Returns the item at the specified position in a list. #1 is the first item.";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_LAST = "Returns the last item in a list.";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM = "Returns a random item in a list.";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST = "Removes and returns the first item in a list.";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM_END = "Removes and returns the item at the specified position in a list. #1 is the last item.";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM_START = "Removes and returns the item at the specified position in a list. #1 is the first item.";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST = "Removes and returns the last item in a list.";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM = "Removes and returns a random item in a list.";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST = "Removes the first item in a list.";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM_END = "Removes the item at the specified position in a list. #1 is the last item.";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM_START = "Removes the item at the specified position in a list. #1 is the first item.";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST = "Removes the last item in a list.";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM = "Removes a random item in a list.";
Blockly.Msg.LISTS_GET_SUBLIST_END_FROM_END = "to # from end";
Blockly.Msg.LISTS_GET_SUBLIST_END_FROM_START = "to #";
Blockly.Msg.LISTS_GET_SUBLIST_END_LAST = "to last";
Blockly.Msg.LISTS_GET_SUBLIST_HELPURL = "https://github.com/google/blockly/wiki/Lists#getting-a-sublist";
Blockly.Msg.LISTS_GET_SUBLIST_START_FIRST = "get sub-list from first";
Blockly.Msg.LISTS_GET_SUBLIST_START_FROM_END = "get sub-list from # from end";
Blockly.Msg.LISTS_GET_SUBLIST_START_FROM_START = "get sub-list from #";
Blockly.Msg.LISTS_GET_SUBLIST_TAIL = "";
Blockly.Msg.LISTS_GET_SUBLIST_TOOLTIP = "Creates a copy of the specified portion of a list.";
Blockly.Msg.LISTS_INDEX_OF_FIRST = "find first occurrence of item";
Blockly.Msg.LISTS_INDEX_OF_HELPURL = "https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list";
Blockly.Msg.LISTS_INDEX_OF_LAST = "find last occurrence of item";
Blockly.Msg.LISTS_INDEX_OF_TOOLTIP = "Returns the index of the first/last occurrence of the item in the list. Returns 0 if item is not found.";
Blockly.Msg.LISTS_INLIST = "in list";
Blockly.Msg.LISTS_ISEMPTY_HELPURL = "https://github.com/google/blockly/wiki/Lists#is-empty";
Blockly.Msg.LISTS_ISEMPTY_TITLE = "%1 is empty";
Blockly.Msg.LISTS_ISEMPTY_TOOLTIP = "Returns true if the list is empty.";
Blockly.Msg.LISTS_LENGTH_HELPURL = "https://github.com/google/blockly/wiki/Lists#length-of";
Blockly.Msg.LISTS_LENGTH_TITLE = "length of %1";
Blockly.Msg.LISTS_LENGTH_TOOLTIP = "Returns the length of a list.";
Blockly.Msg.LISTS_REPEAT_HELPURL = "https://github.com/google/blockly/wiki/Lists#create-list-with";
Blockly.Msg.LISTS_REPEAT_TITLE = "create list with item %1 repeated %2 times";
Blockly.Msg.LISTS_REPEAT_TOOLTIP = "Creates a list consisting of the given value repeated the specified number of times.";
Blockly.Msg.LISTS_SET_INDEX_HELPURL = "https://github.com/google/blockly/wiki/Lists#in-list--set";
Blockly.Msg.LISTS_SET_INDEX_INPUT_TO = "as";
Blockly.Msg.LISTS_SET_INDEX_INSERT = "insert at";
Blockly.Msg.LISTS_SET_INDEX_SET = "set";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST = "Inserts the item at the start of a list.";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM_END = "Inserts the item at the specified position in a list. #1 is the last item.";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM_START = "Inserts the item at the specified position in a list. #1 is the first item.";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST = "Append the item to the end of a list.";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM = "Inserts the item randomly in a list.";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FIRST = "Sets the first item in a list.";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FROM_END = "Sets the item at the specified position in a list. #1 is the last item.";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FROM_START = "Sets the item at the specified position in a list. #1 is the first item.";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_LAST = "Sets the last item in a list.";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM = "Sets a random item in a list.";
Blockly.Msg.LISTS_SPLIT_HELPURL = "https://github.com/google/blockly/wiki/Lists#splitting-strings-and-joining-lists";
Blockly.Msg.LISTS_SPLIT_LIST_FROM_TEXT = "make list from text";
Blockly.Msg.LISTS_SPLIT_TEXT_FROM_LIST = "make text from list";
Blockly.Msg.LISTS_SPLIT_TOOLTIP_JOIN = "Join a list of texts into one text, separated by a delimiter.";
Blockly.Msg.LISTS_SPLIT_TOOLTIP_SPLIT = "Split text into a list of texts, breaking at each delimiter.";
Blockly.Msg.LISTS_SPLIT_WITH_DELIMITER = "with delimiter";
Blockly.Msg.LOGIC_BOOLEAN_FALSE = "false";
Blockly.Msg.LOGIC_BOOLEAN_HELPURL = "https://github.com/google/blockly/wiki/Logic#values";
Blockly.Msg.LOGIC_BOOLEAN_TOOLTIP = "Returns either true or false.";
Blockly.Msg.LOGIC_BOOLEAN_TRUE = "true";
Blockly.Msg.LOGIC_COMPARE_HELPURL = "https://en.wikipedia.org/wiki/Inequality_(mathematics)";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_EQ = "Return true if both inputs equal each other.";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GT = "Return true if the first input is greater than the second input.";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GTE = "Return true if the first input is greater than or equal to the second input.";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LT = "Return true if the first input is smaller than the second input.";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LTE = "Return true if the first input is smaller than or equal to the second input.";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_NEQ = "Return true if both inputs are not equal to each other.";
Blockly.Msg.LOGIC_NEGATE_HELPURL = "https://github.com/google/blockly/wiki/Logic#not";
Blockly.Msg.LOGIC_NEGATE_TITLE = "not %1";
Blockly.Msg.LOGIC_NEGATE_TOOLTIP = "Returns true if the input is false. Returns false if the input is true.";
Blockly.Msg.LOGIC_NULL = "null";
Blockly.Msg.LOGIC_NULL_HELPURL = "https://en.wikipedia.org/wiki/Nullable_type";
Blockly.Msg.LOGIC_NULL_TOOLTIP = "Returns null.";
Blockly.Msg.LOGIC_OPERATION_AND = "and";
Blockly.Msg.LOGIC_OPERATION_HELPURL = "https://github.com/google/blockly/wiki/Logic#logical-operations";
Blockly.Msg.LOGIC_OPERATION_OR = "or";
Blockly.Msg.LOGIC_OPERATION_TOOLTIP_AND = "Return true if both inputs are true.";
Blockly.Msg.LOGIC_OPERATION_TOOLTIP_OR = "Return true if at least one of the inputs is true.";
Blockly.Msg.LOGIC_TERNARY_CONDITION = "test";
Blockly.Msg.LOGIC_TERNARY_HELPURL = "https://en.wikipedia.org/wiki/%3F:";
Blockly.Msg.LOGIC_TERNARY_IF_FALSE = "if false";
Blockly.Msg.LOGIC_TERNARY_IF_TRUE = "if true";
Blockly.Msg.LOGIC_TERNARY_TOOLTIP = "Check the condition in 'test'. If the condition is true, returns the 'if true' value; otherwise returns the 'if false' value.";
Blockly.Msg.MATH_ADDITION_SYMBOL = "+";
Blockly.Msg.MATH_ARITHMETIC_HELPURL = "https://en.wikipedia.org/wiki/Arithmetic";
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_ADD = "Return the sum of the two numbers.";
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_DIVIDE = "Return the quotient of the two numbers.";
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MINUS = "Return the difference of the two numbers.";
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MULTIPLY = "Return the product of the two numbers.";
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_POWER = "Return the first number raised to the power of the second number.";
Blockly.Msg.MATH_CHANGE_HELPURL = "https://en.wikipedia.org/wiki/Programming_idiom#Incrementing_a_counter";
Blockly.Msg.MATH_CHANGE_TITLE = "change %1 by %2";
Blockly.Msg.MATH_CHANGE_TOOLTIP = "Add a number to variable '%1'.";
Blockly.Msg.MATH_CONSTANT_HELPURL = "https://en.wikipedia.org/wiki/Mathematical_constant";
Blockly.Msg.MATH_CONSTANT_TOOLTIP = "Return one of the common constants: π (3.141…), e (2.718…), φ (1.618…), sqrt(2) (1.414…), sqrt(½) (0.707…), or ∞ (infinity).";
Blockly.Msg.MATH_CONSTRAIN_HELPURL = "https://en.wikipedia.org/wiki/Clamping_%28graphics%29";
Blockly.Msg.MATH_CONSTRAIN_TITLE = "constrain %1 low %2 high %3";
Blockly.Msg.MATH_CONSTRAIN_TOOLTIP = "Constrain a number to be between the specified limits (inclusive).";
Blockly.Msg.MATH_DIVISION_SYMBOL = "÷";
Blockly.Msg.MATH_IS_DIVISIBLE_BY = "is divisible by";
Blockly.Msg.MATH_IS_EVEN = "is even";
Blockly.Msg.MATH_IS_NEGATIVE = "is negative";
Blockly.Msg.MATH_IS_ODD = "is odd";
Blockly.Msg.MATH_IS_POSITIVE = "is positive";
Blockly.Msg.MATH_IS_PRIME = "is prime";
Blockly.Msg.MATH_IS_TOOLTIP = "Check if a number is an even, odd, prime, whole, positive, negative, or if it is divisible by certain number. Returns true or false.";
Blockly.Msg.MATH_IS_WHOLE = "is whole";
Blockly.Msg.MATH_MODULO_HELPURL = "https://en.wikipedia.org/wiki/Modulo_operation";
Blockly.Msg.MATH_MODULO_TITLE = "remainder of %1 ÷ %2";
Blockly.Msg.MATH_MODULO_TOOLTIP = "Return the remainder from dividing the two numbers.";
Blockly.Msg.MATH_MULTIPLICATION_SYMBOL = "×";
Blockly.Msg.MATH_NUMBER_HELPURL = "https://en.wikipedia.org/wiki/Number";
Blockly.Msg.MATH_NUMBER_TOOLTIP = "A number.";
Blockly.Msg.MATH_ONLIST_HELPURL = "";
Blockly.Msg.MATH_ONLIST_OPERATOR_AVERAGE = "average of list";
Blockly.Msg.MATH_ONLIST_OPERATOR_MAX = "max of list";
Blockly.Msg.MATH_ONLIST_OPERATOR_MEDIAN = "median of list";
Blockly.Msg.MATH_ONLIST_OPERATOR_MIN = "min of list";
Blockly.Msg.MATH_ONLIST_OPERATOR_MODE = "modes of list";
Blockly.Msg.MATH_ONLIST_OPERATOR_RANDOM = "random item of list";
Blockly.Msg.MATH_ONLIST_OPERATOR_STD_DEV = "standard deviation of list";
Blockly.Msg.MATH_ONLIST_OPERATOR_SUM = "sum of list";
Blockly.Msg.MATH_ONLIST_TOOLTIP_AVERAGE = "Return the average (arithmetic mean) of the numeric values in the list.";
Blockly.Msg.MATH_ONLIST_TOOLTIP_MAX = "Return the largest number in the list.";
Blockly.Msg.MATH_ONLIST_TOOLTIP_MEDIAN = "Return the median number in the list.";
Blockly.Msg.MATH_ONLIST_TOOLTIP_MIN = "Return the smallest number in the list.";
Blockly.Msg.MATH_ONLIST_TOOLTIP_MODE = "Return a list of the most common item(s) in the list.";
Blockly.Msg.MATH_ONLIST_TOOLTIP_RANDOM = "Return a random element from the list.";
Blockly.Msg.MATH_ONLIST_TOOLTIP_STD_DEV = "Return the standard deviation of the list.";
Blockly.Msg.MATH_ONLIST_TOOLTIP_SUM = "Return the sum of all the numbers in the list.";
Blockly.Msg.MATH_POWER_SYMBOL = "^";
Blockly.Msg.MATH_RANDOM_FLOAT_HELPURL = "https://en.wikipedia.org/wiki/Random_number_generation";
Blockly.Msg.MATH_RANDOM_FLOAT_TITLE_RANDOM = "random fraction";
Blockly.Msg.MATH_RANDOM_FLOAT_TOOLTIP = "Return a random fraction between 0.0 (inclusive) and 1.0 (exclusive).";
Blockly.Msg.MATH_RANDOM_INT_HELPURL = "https://en.wikipedia.org/wiki/Random_number_generation";
Blockly.Msg.MATH_RANDOM_INT_TITLE = "random integer from %1 to %2";
Blockly.Msg.MATH_RANDOM_INT_TOOLTIP = "Return a random integer between the two specified limits, inclusive.";
Blockly.Msg.MATH_ROUND_HELPURL = "https://en.wikipedia.org/wiki/Rounding";
Blockly.Msg.MATH_ROUND_OPERATOR_ROUND = "round";
Blockly.Msg.MATH_ROUND_OPERATOR_ROUNDDOWN = "round down";
Blockly.Msg.MATH_ROUND_OPERATOR_ROUNDUP = "round up";
Blockly.Msg.MATH_ROUND_TOOLTIP = "Round a number up or down.";
Blockly.Msg.MATH_SINGLE_HELPURL = "https://en.wikipedia.org/wiki/Square_root";
Blockly.Msg.MATH_SINGLE_OP_ABSOLUTE = "absolute";
Blockly.Msg.MATH_SINGLE_OP_ROOT = "square root";
Blockly.Msg.MATH_SINGLE_TOOLTIP_ABS = "Return the absolute value of a number.";
Blockly.Msg.MATH_SINGLE_TOOLTIP_EXP = "Return e to the power of a number.";
Blockly.Msg.MATH_SINGLE_TOOLTIP_LN = "Return the natural logarithm of a number.";
Blockly.Msg.MATH_SINGLE_TOOLTIP_LOG10 = "Return the base 10 logarithm of a number.";
Blockly.Msg.MATH_SINGLE_TOOLTIP_NEG = "Return the negation of a number.";
Blockly.Msg.MATH_SINGLE_TOOLTIP_POW10 = "Return 10 to the power of a number.";
Blockly.Msg.MATH_SINGLE_TOOLTIP_ROOT = "Return the square root of a number.";
Blockly.Msg.MATH_SUBTRACTION_SYMBOL = "-";
Blockly.Msg.MATH_TRIG_ACOS = "acos";
Blockly.Msg.MATH_TRIG_ASIN = "asin";
Blockly.Msg.MATH_TRIG_ATAN = "atan";
Blockly.Msg.MATH_TRIG_COS = "cos";
Blockly.Msg.MATH_TRIG_HELPURL = "https://en.wikipedia.org/wiki/Trigonometric_functions";
Blockly.Msg.MATH_TRIG_SIN = "sin";
Blockly.Msg.MATH_TRIG_TAN = "tan";
Blockly.Msg.MATH_TRIG_TOOLTIP_ACOS = "Return the arccosine of a number.";
Blockly.Msg.MATH_TRIG_TOOLTIP_ASIN = "Return the arcsine of a number.";
Blockly.Msg.MATH_TRIG_TOOLTIP_ATAN = "Return the arctangent of a number.";
Blockly.Msg.MATH_TRIG_TOOLTIP_COS = "Return the cosine of a degree (not radian).";
Blockly.Msg.MATH_TRIG_TOOLTIP_SIN = "Return the sine of a degree (not radian).";
Blockly.Msg.MATH_TRIG_TOOLTIP_TAN = "Return the tangent of a degree (not radian).";
Blockly.Msg.ME = "Me";
Blockly.Msg.NEW_VARIABLE = "New variable...";
Blockly.Msg.NEW_VARIABLE_TITLE = "New variable name:";
Blockly.Msg.ORDINAL_NUMBER_SUFFIX = "";
Blockly.Msg.PROCEDURES_ALLOW_STATEMENTS = "allow statements";
Blockly.Msg.PROCEDURES_BEFORE_PARAMS = "with:";
Blockly.Msg.PROCEDURES_CALLNORETURN_HELPURL = "https://en.wikipedia.org/wiki/Procedure_%28computer_science%29";
Blockly.Msg.PROCEDURES_CALLNORETURN_TOOLTIP = "Run the user-defined function '%1'.";
Blockly.Msg.PROCEDURES_CALLRETURN_HELPURL = "https://en.wikipedia.org/wiki/Procedure_%28computer_science%29";
Blockly.Msg.PROCEDURES_CALLRETURN_TOOLTIP = "Run the user-defined function '%1' and use its output.";
Blockly.Msg.PROCEDURES_CALL_BEFORE_PARAMS = "with:";
Blockly.Msg.PROCEDURES_CREATE_DO = "Create '%1'";
Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT = "Describe this function...";
Blockly.Msg.PROCEDURES_DEFNORETURN_DO = "";
//Blockly.Msg.PROCEDURES_DEFNORETURN_HELPURL = "https://en.wikipedia.org/wiki/Procedure_%28computer_science%29";
Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE = "my function";
Blockly.Msg.PROCEDURES_DEFNORETURN_TITLE = "function";
//Blockly.Msg.PROCEDURES_DEFNORETURN_TOOLTIP = "Creates a function with no output.";
Blockly.Msg.PROCEDURES_DEFRETURN_HELPURL = "https://en.wikipedia.org/wiki/Procedure_%28computer_science%29";
Blockly.Msg.PROCEDURES_DEFRETURN_RETURN = "return";
Blockly.Msg.PROCEDURES_DEFRETURN_TOOLTIP = "Creates a function with an output.";
Blockly.Msg.PROCEDURES_DEF_DUPLICATE_WARNING = "Warning: This function has duplicate parameters.";
Blockly.Msg.PROCEDURES_HIGHLIGHT_DEF = "Highlight function definition";
Blockly.Msg.PROCEDURES_IFRETURN_HELPURL = "http://c2.com/cgi/wiki?GuardClause";
Blockly.Msg.PROCEDURES_IFRETURN_TOOLTIP = "If a value is true, then return a second value.";
Blockly.Msg.PROCEDURES_IFRETURN_WARNING = "Warning: This block may be used only within a function definition.";
Blockly.Msg.PROCEDURES_MUTATORARG_TITLE = "input name:";
Blockly.Msg.PROCEDURES_MUTATORARG_TOOLTIP = "Add an input to the function.";
Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TITLE = "inputs";
Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TOOLTIP = "Add, remove, or reorder inputs to this function.";
Blockly.Msg.REDO = "Redo";
Blockly.Msg.REMOVE_COMMENT = "Remove Comment";
Blockly.Msg.RENAME_VARIABLE = "Rename variable...";
Blockly.Msg.RENAME_VARIABLE_TITLE = "Rename all '%1' variables to:";
Blockly.Msg.TEXT_APPEND_APPENDTEXT = "append text";
Blockly.Msg.TEXT_APPEND_HELPURL = "https://github.com/google/blockly/wiki/Text#text-modification";
Blockly.Msg.TEXT_APPEND_TO = "to";
Blockly.Msg.TEXT_APPEND_TOOLTIP = "Append some text to variable '%1'.";
Blockly.Msg.TEXT_CHANGECASE_HELPURL = "https://github.com/google/blockly/wiki/Text#adjusting-text-case";
Blockly.Msg.TEXT_CHANGECASE_OPERATOR_LOWERCASE = "to lower case";
Blockly.Msg.TEXT_CHANGECASE_OPERATOR_TITLECASE = "to Title Case";
Blockly.Msg.TEXT_CHANGECASE_OPERATOR_UPPERCASE = "to UPPER CASE";
Blockly.Msg.TEXT_CHANGECASE_TOOLTIP = "Return a copy of the text in a different case.";
Blockly.Msg.TEXT_CHARAT_FIRST = "get first letter";
Blockly.Msg.TEXT_CHARAT_FROM_END = "get letter # from end";
Blockly.Msg.TEXT_CHARAT_FROM_START = "get letter #";
Blockly.Msg.TEXT_CHARAT_HELPURL = "https://github.com/google/blockly/wiki/Text#extracting-text";
Blockly.Msg.TEXT_CHARAT_INPUT_INTEXT = "in text";
Blockly.Msg.TEXT_CHARAT_LAST = "get last letter";
Blockly.Msg.TEXT_CHARAT_RANDOM = "get random letter";
Blockly.Msg.TEXT_CHARAT_TAIL = "";
Blockly.Msg.TEXT_CHARAT_TOOLTIP = "Returns the letter at the specified position.";
Blockly.Msg.TEXT_CREATE_JOIN_ITEM_TOOLTIP = "Add an item to the text.";
Blockly.Msg.TEXT_CREATE_JOIN_TITLE_JOIN = "join";
Blockly.Msg.TEXT_CREATE_JOIN_TOOLTIP = "Add, remove, or reorder sections to reconfigure this text block.";
Blockly.Msg.TEXT_GET_SUBSTRING_END_FROM_END = "to letter # from end";
Blockly.Msg.TEXT_GET_SUBSTRING_END_FROM_START = "to letter #";
Blockly.Msg.TEXT_GET_SUBSTRING_END_LAST = "to last letter";
Blockly.Msg.TEXT_GET_SUBSTRING_HELPURL = "https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text";
Blockly.Msg.TEXT_GET_SUBSTRING_INPUT_IN_TEXT = "in text";
Blockly.Msg.TEXT_GET_SUBSTRING_START_FIRST = "get substring from first letter";
Blockly.Msg.TEXT_GET_SUBSTRING_START_FROM_END = "get substring from letter # from end";
Blockly.Msg.TEXT_GET_SUBSTRING_START_FROM_START = "get substring from letter #";
Blockly.Msg.TEXT_GET_SUBSTRING_TAIL = "";
Blockly.Msg.TEXT_GET_SUBSTRING_TOOLTIP = "Returns a specified portion of the text.";
Blockly.Msg.TEXT_INDEXOF_HELPURL = "https://github.com/google/blockly/wiki/Text#finding-text";
Blockly.Msg.TEXT_INDEXOF_INPUT_INTEXT = "in text";
Blockly.Msg.TEXT_INDEXOF_OPERATOR_FIRST = "find first occurrence of text";
Blockly.Msg.TEXT_INDEXOF_OPERATOR_LAST = "find last occurrence of text";
Blockly.Msg.TEXT_INDEXOF_TAIL = "";
Blockly.Msg.TEXT_INDEXOF_TOOLTIP = "Returns the index of the first/last occurrence of the first text in the second text. Returns 0 if text is not found.";
Blockly.Msg.TEXT_ISEMPTY_HELPURL = "https://github.com/google/blockly/wiki/Text#checking-for-empty-text";
Blockly.Msg.TEXT_ISEMPTY_TITLE = "%1 is empty";
Blockly.Msg.TEXT_ISEMPTY_TOOLTIP = "Returns true if the provided text is empty.";
Blockly.Msg.TEXT_JOIN_HELPURL = "https://github.com/google/blockly/wiki/Text#text-creation";
Blockly.Msg.TEXT_JOIN_TITLE_CREATEWITH = "create text with";
Blockly.Msg.TEXT_JOIN_TOOLTIP = "Create a piece of text by joining together any number of items.";
Blockly.Msg.TEXT_LENGTH_HELPURL = "https://github.com/google/blockly/wiki/Text#text-modification";
Blockly.Msg.TEXT_LENGTH_TITLE = "length of %1";
Blockly.Msg.TEXT_LENGTH_TOOLTIP = "Returns the number of letters (including spaces) in the provided text.";
Blockly.Msg.TEXT_PRINT_HELPURL = "https://github.com/google/blockly/wiki/Text#printing-text";
Blockly.Msg.TEXT_PRINT_TITLE = "print %1";
Blockly.Msg.TEXT_PRINT_TOOLTIP = "Print the specified text, number or other value.";
Blockly.Msg.TEXT_PROMPT_HELPURL = "https://github.com/google/blockly/wiki/Text#getting-input-from-the-user";
Blockly.Msg.TEXT_PROMPT_TOOLTIP_NUMBER = "Prompt for user for a number.";
Blockly.Msg.TEXT_PROMPT_TOOLTIP_TEXT = "Prompt for user for some text.";
Blockly.Msg.TEXT_PROMPT_TYPE_NUMBER = "prompt for number with message";
Blockly.Msg.TEXT_PROMPT_TYPE_TEXT = "prompt for text with message";
Blockly.Msg.TEXT_TEXT_HELPURL = "https://en.wikipedia.org/wiki/String_(computer_science)";
Blockly.Msg.TEXT_TEXT_TOOLTIP = "A letter, word, or line of text.";
Blockly.Msg.TEXT_TRIM_HELPURL = "https://github.com/google/blockly/wiki/Text#trimming-removing-spaces";
Blockly.Msg.TEXT_TRIM_OPERATOR_BOTH = "trim spaces from both sides of";
Blockly.Msg.TEXT_TRIM_OPERATOR_LEFT = "trim spaces from left side of";
Blockly.Msg.TEXT_TRIM_OPERATOR_RIGHT = "trim spaces from right side of";
Blockly.Msg.TEXT_TRIM_TOOLTIP = "Return a copy of the text with spaces removed from one or both ends.";
Blockly.Msg.TODAY = "Today";
Blockly.Msg.UNDO = "Undo";
Blockly.Msg.VARIABLES_DEFAULT_NAME = "item";
Blockly.Msg.VARIABLES_GET_CREATE_SET = "Create 'set %1'";
Blockly.Msg.VARIABLES_GET_HELPURL = "https://github.com/google/blockly/wiki/Variables#get";
Blockly.Msg.VARIABLES_GET_TOOLTIP = "Returns the value of this variable.";
Blockly.Msg.VARIABLES_SET = "set %1 to %2";
Blockly.Msg.VARIABLES_SET_CREATE_GET = "Create 'get %1'";
Blockly.Msg.VARIABLES_SET_HELPURL = "https://github.com/google/blockly/wiki/Variables#set";
Blockly.Msg.VARIABLES_SET_TOOLTIP = "Sets this variable to be equal to the input.";
Blockly.Msg.PROCEDURES_DEFRETURN_TITLE = Blockly.Msg.PROCEDURES_DEFNORETURN_TITLE;
Blockly.Msg.CONTROLS_IF_IF_TITLE_IF = Blockly.Msg.CONTROLS_IF_MSG_IF;
Blockly.Msg.CONTROLS_WHILEUNTIL_INPUT_DO = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;
Blockly.Msg.CONTROLS_IF_MSG_THEN = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;
Blockly.Msg.CONTROLS_IF_ELSE_TITLE_ELSE = Blockly.Msg.CONTROLS_IF_MSG_ELSE;
Blockly.Msg.PROCEDURES_DEFRETURN_PROCEDURE = Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE;
Blockly.Msg.LISTS_GET_SUBLIST_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
Blockly.Msg.LISTS_GET_INDEX_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
Blockly.Msg.MATH_CHANGE_TITLE_ITEM = Blockly.Msg.VARIABLES_DEFAULT_NAME;
Blockly.Msg.PROCEDURES_DEFRETURN_DO = Blockly.Msg.PROCEDURES_DEFNORETURN_DO;
Blockly.Msg.CONTROLS_IF_ELSEIF_TITLE_ELSEIF = Blockly.Msg.CONTROLS_IF_MSG_ELSEIF;
Blockly.Msg.LISTS_GET_INDEX_HELPURL = Blockly.Msg.LISTS_INDEX_OF_HELPURL;
Blockly.Msg.CONTROLS_FOREACH_INPUT_DO = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;
Blockly.Msg.LISTS_SET_INDEX_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
Blockly.Msg.CONTROLS_FOR_INPUT_DO = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;
Blockly.Msg.LISTS_CREATE_WITH_ITEM_TITLE = Blockly.Msg.VARIABLES_DEFAULT_NAME;
Blockly.Msg.TEXT_APPEND_VARIABLE = Blockly.Msg.VARIABLES_DEFAULT_NAME;
Blockly.Msg.TEXT_CREATE_JOIN_ITEM_TITLE_ITEM = Blockly.Msg.VARIABLES_DEFAULT_NAME;
Blockly.Msg.LISTS_INDEX_OF_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
Blockly.Msg.PROCEDURES_DEFRETURN_COMMENT = Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT;


//--------------ActivityBoard Help URLs -----------------------
Blockly.MSG_CONTROL_HELPURL = "http://learn.parallax.com/ab-blocks/control";
Blockly.MSG_NUMBERS_HELPURL = "http://learn.parallax.com/ab-blocks/numbers";
Blockly.MSG_STRINGS_HELPURL = "http://learn.parallax.com/ab-blocks/strings";
Blockly.MSG_VALUES_HELPURL = "http://learn.parallax.com/ab-blocks/values";
Blockly.MSG_VARIABLES_HELPURL = "http://learn.parallax.com/ab-blocks/variables";
Blockly.MSG_FUNCTIONS_HELPURL = "http://learn.parallax.com/ab-blocks/functions";
Blockly.MSG_PINS_HELPURL = "http://learn.parallax.com/ab-blocks/pins";
Blockly.MSG_SERIAL_LCD_HELPURL = "http://learn.parallax.com/ab-blocks/serial-lcd";
Blockly.MSG_OLED_HELPURL = "http://learn.parallax.com/ab-blocks/oled";
Blockly.MSG_TERMINAL_HELPURL = "http://learn.parallax.com/ab-blocks/terminal";
Blockly.MSG_PROTOCOLS_HELPURL = "http://learn.parallax.com/ab-blocks/protocols";
Blockly.MSG_XBEE_HELPURL = "http://learn.parallax.com/ab-blocks/xbee";
Blockly.MSG_COMPASS_HELPURL = "http://learn.parallax.com/ab-blocks/compass";
Blockly.MSG_JOYSTICK_HELPURL = "http://learn.parallax.com/ab-blocks/joystick";
Blockly.MSG_MEMSIC_HELPURL = "http://learn.parallax.com/ab-blocks/memsic";
Blockly.MSG_ACCELEROMETER_HELPURL = "http://learn.parallax.com/ab-blocks/accelerometer";
Blockly.MSG_PING_HELPURL = "http://learn.parallax.com/ab-blocks/ping";
Blockly.MSG_PIR_HELPURL = "http://learn.parallax.com/ab-blocks/pir";
Blockly.MSG_RFID_HELPURL = "http://learn.parallax.com/ab-blocks/rfid";
Blockly.MSG_SONY_REMOTE_HELPURL = "http://learn.parallax.com/ab-blocks/sony-remote";
Blockly.MSG_SOUND_IMPACT_HELPURL = "http://learn.parallax.com/ab-blocks/sound-impact";
Blockly.MSG_COLORPAL_HELPURL = "http://learn.parallax.com/ab-blocks/colorpal";
Blockly.MSG_EEPROM_HELPURL = "http://learn.parallax.com/ab-blocks/memory";
Blockly.MSG_ANALOG_PINS_HELPURL = "http://learn.parallax.com/ab-blocks/analog-pins";
Blockly.MSG_ANALOG_PWM_HELPURL = "http://learn.parallax.com/ab-blocks/pwm";
Blockly.MSG_ANALOG_PULSE_IN_OUT_HELPURL = "http://learn.parallax.com/ab-blocks/pulsein-out";
Blockly.MSG_ANALOG_RC_TIME_HELPURL = "http://learn.parallax.com/ab-blocks/rc-time";
Blockly.MSG_AUDIO_HELPURL = "http://learn.parallax.com/ab-blocks/audio";
Blockly.MSG_SERVO_HELPURL = "http://learn.parallax.com/ab-blocks/servo";


//----------Activity Board (Propeller C) block tooltips ----------------------------
Blockly.MSG_COMMENT_TOOLTIP = "add comment: Leave a note for people that will not affect the program.";
Blockly.MSG_CONTROLS_IF_TOOLTIP = "If...do: when condition attached is true. Click the gear to add conditions.";
Blockly.MSG_CONTROLS_REPEAT_TOOLTIP = "conditional repeat: forever, x times , until, or while attached condition is true.";
Blockly.MSG_CONTROL_REPEAT_FOR_LOOP_TOOLTIP = "repeat item: use variable and value blocks for counted loop.";
Blockly.MSG_CONTROLS_BREAK_TOOLTIP = "break: Exit loop and skip to the next block.";
Blockly.MSG_BASE_DELAY_TOOLTIP = "pause: wait for specified time (in milliseconds) then continue.";
Blockly.MSG_COG_NEW_TOOLTIP = "new processor: launch attached “run function” block if processor is available.";
Blockly.MSG_CONTROLS_RETURN_TOOLTIP = "return: Required at the end of code enclosed in a “define function” block.";
Blockly.MSG_MATH_ARITHMETIC_TOOLTIP = "math operation: + addition, - subtraction, x multiplication, / division, or % modulus.";
Blockly.MSG_MATH_LIMIT_TOOLTIP = "limit: use first value, but if it's outside of second value, use second value instead.";
Blockly.MSG_MATH_CREMENT_TOOLTIP = "de/increment: increase or decrease attached variable by 1.";
Blockly.MSG_MATH_RANDOM_TOOLTIP = "random: Pick random number between the low “from” and high “to” values.";
Blockly.MSG_MATH_BITWISE_TOOLTIP = "bitwise:& AND, | OR, ^ XOR, >> right shift, << left shift.";
Blockly.MSG_LOGIC_OPERATION_TOOLTIP = "boolean comparison: and, or, and not, or not; return 1/true or 0/false.";
Blockly.MSG_LOGIC_NEGATE_TOOLTIP = "not: Get boolean (1/true or 0/false) opposite of attached value.";
Blockly.MSG_LOGIC_COMPARE_TOOLTIP = "compare values: boolean comparison returns 1/true or 0/false.";
Blockly.MSG_STRING_COMPARE_TOOLTIP = "compare strings: returns 1/true or 0/false. Case sensitive.";
Blockly.MSG_STRING_LENGTH_TOOLTIP = "length of string: number of characters in string or string variable.";
Blockly.MSG_COMBINE_STRINGS_TOOLTIP = "combine strings: join inserted strings and store in chosen variable.";
Blockly.MSG_FIND_SUBSTRING_TOOLTIP = "find string location: of first character in substring from larger string.";
Blockly.MSG_GET_CHAR_AT_POSITION_TOOLTIP = "get character at position: ASCII value (0 to 255) for nth character in string.";
Blockly.MSG_SET_CHAR_AT_POSITION_TOOLTIP = "set character at position: nth in string, set with ASCII value (0 to 255).";
Blockly.MSG_GET_SUBSTRING_TOOLTIP = "get part of string: in range of positions; store in variable item.";
Blockly.MSG_MATH_NUMBER_TOOLTIP = "number value: positive or negative; truncates to integers.";
Blockly.MSG_STRING_TYPE_BLOCK_TOOLTIP = "text string: up to 128 characters.";
Blockly.MSG_CHAR_TYPE_BLOCK_TOOLTIP = "character value: Get value (32 to 126) of printable ASCII character selected.";
Blockly.MSG_LOGIC_BOOLEAN_TOOLTIP = "true/false: Choose a value of 1 (true) or 0 (false).";
Blockly.MSG_HIGH_LOW_VALUE_TOOLTIP = "high/low: Choose a value of 1 (high) or 0 (low).";
Blockly.MSG_COLOR_PICKER_TOOLTIP = "color: Get 24-bit integer for color selected in box.";
Blockly.MSG_COLOR_VALUE_FROM_TOOLTIP = "color value from: inserted red, green, and blue values (0 to 255).";
Blockly.MSG_GET_CHANNEL_FROM_TOOLTIP = "get red/green/blue: value (0 to 255) for chosen component of color.";
Blockly.MSG_COMPARE_COLORS_TOOLTIP = "compare colors: returns value from 0 (opposite) to 255 (identical).";
Blockly.MSG_SYSTEM_COUNTER_TOOLTIP = "system counter: 0 to 4,294,967,295 before rolling over.";
Blockly.MSG_VARIABLES_SET_TOOLTIP = "set variable: name and attach initial value block.";
Blockly.MSG_VARIABLES_GET_TOOLTIP = "use variable: choose set variables from dropdown.";
Blockly.MSG_PROCEDURES_DEFNORETURN_TOOLTIP = "define function: group blocks to re-use ending with return; name group.";
Blockly.MSG_PROCEDURES_CALLNORETURN_TOOLTIP = "return: Required at the end of code enclosed in a “define function” block.";
Blockly.MSG_MAKE_PIN_TOOLTIP = "make PIN (dropdown): Select I/O pin and setting with menus.";
Blockly.MSG_MAKE_PIN_INPUT_TOOLTIP = "make PIN (programmable): Select I/O pin with value and setting with menu.";
Blockly.MSG_CHECK_PIN_TOOLTIP = "check PIN (dropdown): Get the state of I/O pin; high = 1, low = 0.";
Blockly.MSG_CHECK_PIN_INPUT_TOOLTIP = "check PIN (programmable): Get state of I/O pin at inserted value; high = 1, low = 0.";
Blockly.MSG_SET_PINS_TOOLTIP = "set multiple pins: define group then set each pin. Do not use on P29-P31.";
Blockly.MSG_DEBUG_LCD_INIT_TOOLTIP = "LCD initialize: set I/O pin to LCD; match baud to LCD switches.";
Blockly.MSG_DEBUG_LCD_PRINT_TOOLTIP = "LCD print text: display on serial LCD.";
Blockly.MSG_DEBUG_LCD_NUMBER_TOOLTIP = "LCD print number: display on serial LCD.";
Blockly.MSG_DEBUG_LCD_ACTION_TOOLTIP = "LCD command: select from dropdown.";
Blockly.MSG_DEBUG_LCD_SET_CURSOR_TOOLTIP = "LCD set cursor: row and column.";
Blockly.MSG_DEBUG_LCD_MUSIC_NOTE_TOOLTIP = "LCD play note: at octave for time set.";
Blockly.MSG_OLED_INITIALIZE_TOOLTIP = "OLED initialize: match to Propeller I/O pin connections.";
Blockly.MSG_OLED_FONT_LOADER_TOOLTIP = "OLED font loader: run alone to add fonts to EEPROM.";
Blockly.MSG_OLED_GET_MAX_HEIGHT_TOOLTIP = "OLED max height";
Blockly.MSG_OLED_GET_MAX_WIDTH_TOOLTIP = "OLED max width";
Blockly.MSG_OLED_CLEAR_SCREEN_TOOLTIP = "OLED clear screen: all pixels go black.";
Blockly.MSG_OLED_TEXT_COLOR_TOOLTIP = "OLED font color: background is transparent if matched to font.";
Blockly.MSG_OLED_TEXT_SIZE_TOOLTIP = "OLED set text: Med, large, script and bubble require font loader.";
Blockly.MSG_OLED_SET_CURSOR_TOOLTIP = "OLED set cursor: 0,0 is top-left corner of display.";
Blockly.MSG_OLED_PRINT_TEXT_TOOLTIP = "OLED print text: send string to display.";
Blockly.MSG_OLED_PRINT_NUMBER_TOOLTIP = "OLED print number: display value as decimal, hex, or binary.";
Blockly.MSG_OLED_DRAW_PIXEL_TOOLTIP = "OLED draw pixel: at x, y from top-left corner.";
Blockly.MSG_OLED_DRAW_LINE_TOOLTIP = "OLED draw line: set start and end points; 0,0 is top-left.";
Blockly.MSG_OLED_DRAW_TRIANGLE_TOOLTIP = "OLED draw triangle: set x,y position of each corner.";
Blockly.MSG_OLED_DRAW_RECTANGLE_TOOLTIP = "OLED draw rectangle: set x,y position of each corner.";
Blockly.MSG_OLED_DRAW_CIRCLE_TOOLTIP = "OLED draw circle: x,y of center point, radius, color, fill. ";
Blockly.MSG_CONSOLE_PRINT_TOOLTIP = "Terminal print text: display contents of string block.";
Blockly.MSG_CONSOLE_PRINT_VARIABLES_TOOLTIP = "Terminal print number: display value as decimal, hex, binary, or ASCII.";
Blockly.MSG_CONSOLE_SCAN_TEXT_TOOLTIP = "Terminal receive text: up to 128-character string in variable.";
Blockly.MSG_CONSOLE_SCAN_NUMBER_TOOLTIP = "Terminal receive number: as integer in variable.";
Blockly.MSG_CONSOLE_NEWLINE_TOOLTIP = "Terminal new line: move cursor to far left of the next line.";
Blockly.MSG_CONSOLE_CLEAR_TOOLTIP = "Terminal clear screen: then move cursor to 0,0 top left.";
Blockly.MSG_CONSOLE_MOVE_TO_POSITION_TOOLTIP = "Terminal set cursor: at position x,y. Use Clear screen block first.";
Blockly.MSG_SERIAL_OPEN_TOOLTIP = "Serial initialize: match to Propeller I/O pin connections and device Baud rate.";
Blockly.MSG_SERIAL_TX_TOOLTIP = "Serial transmit number: sends 32-bit integer as 4 bytes MSB-first.";
Blockly.MSG_SERIAL_SEND_TEXT_TOOLTIP = "Serial transmit text: sends text as characters terminated by a 0 (NULL).";
Blockly.MSG_SERIAL_RX_TOOLTIP = "Serial receive number: receives 4 bytes MSB first and stores a a 32-bit integer.";
Blockly.MSG_SERIAL_RECEIVE_TEXT_TOOLTIP = "Serial receive text: receives and stores characters into a variable until a 0 (NULL).";
Blockly.MSG_XBEE_SETUP_TOOLTIP = "XBee initialize: match to Propeller I/O pin connections and XBee Baud rate.";
Blockly.MSG_XBEE_TRANSMIT_TOOLTIP = "XBee transmit: sends information to an XBee.  Strings and numbers are terminated with an ASCII 13";
Blockly.MSG_XBEE_RECEIVE_TOOLTIP = "XBee receive: receives information from an XBee.  Expects strings and numbers to be terminated with an ASCII 13";
Blockly.MSG_HMC5883L_INIT_TOOLTIP = "Compass initialize: match to Propeller I/O pin connections.";
Blockly.MSG_HMC5883L_READ_TOOLTIP = "Compass heading: get current heading in degrees.";
Blockly.MSG_JOYSTICK_INPUT_XAXIS_TOOLTIP = "Joystick x-axis: gets horizontal position of Joystick, match to A/D socket.";
Blockly.MSG_JOYSTICK_INPUT_YAXIS_TOOLTIP = "Joystick y axis: gets vertical position of Joystick, match to A/D socket.";
Blockly.MSG_MX2125_ACCELERATION_XAXIS_TOOLTIP = "Memsic x acceleration: gets side-to-side acceleration, match to Propeller I/O pin.";
Blockly.MSG_MX2125_ACCELERATION_YAXIS_TOOLTIP = "Memsic y acceleration: gets front to back acceleration, match to Propeller I/O pin.";
Blockly.MSG_MX2125_ROTATION_TOOLTIP = "Memsic rotation: gets rotation in degress when held like a steering wheel, match to Propeller I/O pins.";
Blockly.MSG_MX2125_TILT_XAXIS_TOOLTIP = "Memsic x tilt: gets x-\tilt in degrees from level with horizon, match to Propeller I/O pin.";
Blockly.MSG_MX2125_TILT_YAXIS_TOOLTIP = "Memsic y tilt: gets y-tilt in degrees from level with horizon, match to Propeller I/O pin.";
Blockly.MSG_MMA7455_INIT_TOOLTIP = "Accelerometer initialize: match to Propeller I/O pin connections.";
Blockly.MSG_MMA7455_ACCELERATION_TOOLTIP = "Accelerometer store values: stores measured x, y, & z acceleration in specified variables.";
Blockly.MSG_SENSOR_PING_TOOLTIP = "Ping))) distance: gets distance measured in the specified units, match to Propeller I/O pin.";
Blockly.MSG_PIR_SENSOR_TOOLTIP = "PIR sensor: returns 1/true if motion is detected, match to Propeller I/O pin.";
Blockly.MSG_RFID_ENABLE_TOOLTIP = "RFID initialize: match to Propeller I/O pin connections.";
Blockly.MSG_RFID_GET_TOOLTIP = "RFID read: gets ID from RFID tag near sensor, returns 0 if no tag detected.";
Blockly.MSG_RFID_DISABLE_TOOLTIP = "RFID disable/enable: enables or disables the RFID reader.";
Blockly.MSG_RFID_CLOSE_TOOLTIP = "RFID close: Closes RFID object, frees resources used.";
Blockly.MSG_SIRC_GET_TOOLTIP = "Sony Remote value: returns button pressed on remote, returns -1 if none, match to Propeller I/O pin.";
Blockly.MSG_SOUND_IMPACT_RUN_TOOLTIP = "Sound Impact initialize: match to Propeller I/O pin connections.";
Blockly.MSG_SOUND_IMPACT_GET_TOOLTIP = "Sound Impact get count: gets number of sound impacts since last block was used last.";
Blockly.MSG_SOUND_IMPACT_END_TOOLTIP = "Sound Impact close: Closes Sound Impact sensor object, frees resources used.";
Blockly.MSG_COLORPAL_ENABLE_TOOLTIP = "ColorPal initialize: match to Propeller I/O pin connections.";
Blockly.MSG_COLORPAL_GET_COLORS_RAW_TOOLTIP = "ColorPal raw colors: stores raw (uncalibrated) color measurments in specified variables.";
Blockly.MSG_COLORPAL_GET_COLORS_TOOLTIP = "ColorPal get color: stores approximate color as a single integer into the specified varaible.";
Blockly.MSG_EEPROM_READ_TOOLTIP = "EEPROM read: reads information from EEPROM memory starting at the specified address.";
Blockly.MSG_EEPROM_WRITE_TOOLTIP = "EEPROM write: writes information to EEPROM memory starting at the specified address.";
Blockly.MSG_RC_CHARGE_DISCHARGE_TOOLTIP = "RC charge/discharge: returns the charge/discharge time of an RC circuit connected to the specified I/O pin.";
Blockly.MSG_AB_VOLT_IN_TOOLTIP = "A/D read: returns the value measured by the connected A/D channel in volt-100ths.";
Blockly.MSG_AB_VOLT_OUT_TOOLTIP = "D/A output: outputs voltage on the connected D/A channel in volt-100ths.";
Blockly.MSG_PULSE_IN_TOOLTIP = "Pulse-in: measures the duration a high or low pulse received by the connected I/O pin.";
Blockly.MSG_PULSE_OUT_TOOLTIP = "Pulse-out: outputs a high or low pulse to the specified I/O pin for the specificed duration.";
Blockly.MSG_PWM_START_TOOLTIP = "PWM initialize: sets up PWM object in the Propeller.";
Blockly.MSG_PWM_SET_TOOLTIP = "PWM set: sends the specified PWM pulses out the Propeller I/O pin specified. Set duty cycle to 0 to stop sending pulses.";
Blockly.MSG_PWM_STOP_TOOLTIP = "PWM stop: Stops PWM object, frees up resources used on the Propeller.";
Blockly.MSG_WAV_PLAY_TOOLTIP = "WAV play: Plays the specified .WAV file stored on the SD card.";
Blockly.MSG_WAV_STATUS_TOOLTIP = "WAV status: returns 1/true if a .WAV file is playing, returns 0/false if not.";
Blockly.MSG_WAV_VOLUME_TOOLTIP = "WAV volume: sets the volume of the WAV player - 0 (quietest) to 10 (loudest).";
Blockly.MSG_WAV_STOP_TOOLTIP = "WAV stop: Stops the WAV player object, frees up resources on the Propeller.";
Blockly.MSG_BASE_FREQOUT_TOOLTIP = "frequency out: sends pulses to the I/O pin at the specified frequency.";
Blockly.MSG_SERVO_MOVE_TOOLTIP = "Standard servo: sets the position of a standard servo connected to the I/O pin.";
Blockly.MSG_SERVO_SPEED_TOOLTIP = "CR servo speed: sets the speed of a continuous rotation servo connected to the I/O pin.";
Blockly.MSG_SERVO_SET_RAMP_TOOLTIP = "CR servo set ramp: sets the amount a servo's speed can change each update cycle.";

//-------Scribbler 3 help URLs ---------------------------------------------
Blockly.MSG_S3_COMMUNICATE_HELPURL = "http://learn.parallax.com/s3-blocks/communicate";
Blockly.MSG_S3_CONTROL_HELPURL = "http://learn.parallax.com/s3-blocks/control";
Blockly.MSG_S3_FACTORY_RESET_HELPURL = "http://learn.parallax.com/s3-blocks/factory-reset";
Blockly.MSG_S3_FUNCTIONS_HELPURL = "http://learn.parallax.com/s3-blocks/functions";
Blockly.MSG_S3_LEDS_HELPURL = "http://learn.parallax.com/s3-blocks/leds";
Blockly.MSG_S3_LIGHT_HELPURL = "http://learn.parallax.com/s3-blocks/light";
Blockly.MSG_S3_LINE_HELPURL = "http://learn.parallax.com/s3-blocks/line";
Blockly.MSG_S3_MATH_HELPURL = "http://learn.parallax.com/s3-blocks/math";
Blockly.MSG_S3_MOTORS_HELPURL = "http://learn.parallax.com/s3-blocks/motors";
Blockly.MSG_S3_OBSTACLE_HELPURL = "http://learn.parallax.com/s3-blocks/obstacle";
Blockly.MSG_S3_PING_HELPURL = "http://learn.parallax.com/s3-blocks/ping";
Blockly.MSG_S3_RESET_BUTTON_HELPURL = "http://learn.parallax.com/s3-blocks/reset-button";
Blockly.MSG_S3_SIMPLE_ACTIONS_HELPURL = "http://learn.parallax.com/s3-blocks/simple-actions";
Blockly.MSG_S3_SIMPLE_CONTROL_HELPURL = "http://learn.parallax.com/s3-blocks/simple-control";
Blockly.MSG_S3_SIMPLE_SENSORS_HELPURL = "http://learn.parallax.com/s3-blocks/simple-sensors";
Blockly.MSG_S3_SOUND_HELPURL = "http://learn.parallax.com/s3-blocks/sound";
Blockly.MSG_S3_STALL_HELPURL = "http://learn.parallax.com/s3-blocks/stall";
Blockly.MSG_S3_VARIABLES_HELPURL = "http://learn.parallax.com/s3-blocks/variables";


//-------Scribbler 3 block tooltips --------------------------
Blockly.MSG_S3_SCRIBBLER_LOOP_TOOLTIP = "simple loop: repeats code inside the loop until an exit loop block is used.";
Blockly.MSG_S3_SCRIBBLER_LIMITED_LOOP_TOOLTIP = "counted loop: repeats code a number of times";
Blockly.MSG_S3_SCRIBBLER_EXIT_LOOP_TOOLTIP = "exit loop: exits out of a loop that is repeating code";
Blockly.MSG_S3_SCRIBBLER_SIMPLE_WAIT_TOOLTIP = "simple wait: waits a set amount of time before moving on the to the next block";
Blockly.MSG_S3_SCRIBBLER_IF_LINE_TOOLTIP = "detect line: detects a line underneath the Scribbler";
Blockly.MSG_S3_SCRIBBLER_IF_OBSTACLE_TOOLTIP = "detect obstacle: detects if something is in front of the Scribbler";
Blockly.MSG_S3_SCRIBBLER_IF_LIGHT_TOOLTIP = "detect ambient light: detects a light in front of the Scribbler";
Blockly.MSG_S3_SCRIBBLER_IF_STALLED_TOOLTIP = "detect stall: detects if the Scribbler's wheels are stuck";
Blockly.MSG_S3_SCRIBBLER_IF_RANDOM_TOOLTIP = "flip a coin: randomly returns a true or false";
Blockly.MSG_S3_SCRIBBLER_DRIVE_TOOLTIP = "drive: used to move the Scribbler";
Blockly.MSG_S3_SCRIBBLER_SPIN_TOOLTIP = "rotate: used to rotate the Scribbler";
Blockly.MSG_S3_SCRIBBLER_STOP_TOOLTIP = "stop driving: stops the Scribbler's motors";
Blockly.MSG_S3_SCRIBBLER_PLAY_TOOLTIP = "play note: plays a note using the Scribbler's speaker";
Blockly.MSG_S3_SCRIBBLER_LED_TOOLTIP = "change LEDs: used to change the LED's on the Scribbler";
Blockly.MSG_S3_CONTROLS_REPEAT_TOOLTIP = "conditional repeat: forever, x times , until, or while attached condition is true.";
Blockly.MSG_S3_CONTROLS_IF_TOOLTIP = "if...do: when condition attached is true. Click the gear to add conditions.";
Blockly.MSG_S3_SCRIBBLER_WAIT_TOOLTIP = "wait: waits a set amount of time before moving on the to the next block";
Blockly.MSG_S3_SPIN_COMMENT_TOOLTIP = "note: use to add a note to your program.  Does not affect the program.";
Blockly.MSG_S3_PROCEDURES_DEFNORETURN_TOOLTIP = "define function: group blocks to re-use ending with return; name group.";
Blockly.MSG_S3_PROCEDURES_CALLNORETURN_TOOLTIP = "return: Required at the end of code enclosed in a “define function” block.";
Blockly.MSG_S3_VARIABLES_SET_TOOLTIP = "set variable: name and attach initial value block.";
Blockly.MSG_S3_VARIABLES_GET_TOOLTIP = "use variable: choose set variables from dropdown.";
Blockly.MSG_S3_SPIN_INTEGER_TOOLTIP = "number value: positive or negative; truncates to integers.";
Blockly.MSG_S3_MATH_INT_ANGLE_TOOLTIP = "number of degrees: indicate how many degrees (rotation) to turn or move.";
Blockly.MSG_S3_SCRIBBLER_BOOLEAN_TOOLTIP = "true/false: choose a true or false value";
Blockly.MSG_S3_SCRIBBLER_RANDOM_BOOLEAN_TOOLTIP = "random true/false: randomly returns a true or false";
Blockly.MSG_S3_SCRIBBLER_RANDOM_NUMBER_TOOLTIP = "random number: pick random number between the low “from” and high “to” values.";
Blockly.MSG_S3_MATH_ARITHMETIC_TOOLTIP = "math operation: + addition, - subtraction, x multiplication, / division, or % modulus.";
Blockly.MSG_S3_MATH_LIMIT_TOOLTIP = "highest/lowest: returns the highest or lowest of the two values inputted";
Blockly.MSG_S3_LOGIC_OPERATION_TOOLTIP = "boolean comparison: and, or, and not, or not; returns true or false.";
Blockly.MSG_S3_LOGIC_NEGATE_TOOLTIP = "not: returns false if input is true and true if input is false";
Blockly.MSG_S3_LOGIC_COMPARE_TOOLTIP = "compare values: boolean comparison returns true or false";
Blockly.MSG_S3_LINE_SENSOR_TOOLTIP = "line sensor reading: detection of a line by the sensors under the Scribbler";
Blockly.MSG_S3_OBSTACLE_SENSOR_TOOLTIP = "obstacle sensor reading: detection of obstacles from the front sensors";
Blockly.MSG_S3_LIGHT_SENSOR_TOOLTIP = "light sensor reading: measurements of light from the front sensors";
Blockly.MSG_S3_STALL_SENSOR_TOOLTIP = "tail wheel stall: returns true of tail wheel is not spinning";
Blockly.MSG_S3_SPINNING_SENSOR_TOOLTIP = "drive wheel stall: returns true if drive wheels are not spinning but should be";
Blockly.MSG_S3_RESET_BUTTON_PRESSES_TOOLTIP = "button sensor: returns how many times the reset button was pressed";
Blockly.MSG_S3_SCRIBBLER_PING_TOOLTIP = "Ping))) distance: measures distances using a Ping))) sensor attached to the hacker port";
Blockly.MSG_S3_MOVE_MOTORS_TOOLTIP = "motor speed: use to move the Scribbler at specific speeds";
Blockly.MSG_S3_MOVE_MOTORS_DISTANCE_TOOLTIP = "move distance: use to move the Scribbler specific distances";
Blockly.MSG_S3_MOVE_MOTORS_ANGLE_TOOLTIP = "rotate by radius: rotates the scribbler by driving it";
Blockly.MSG_S3_SCRIBBLER_SERVO_TOOLTIP = "rotate Servo: turns a servo connected to the hacker port to a position";
Blockly.MSG_S3_SCRIBBLER_STOP_SERVO_TOOLTIP = "disable Servo: disables a servo connected to the hacker port";
Blockly.MSG_S3_PLAY_POLYPHONY_TOOLTIP = "play tone: mix two frequencies set in Hz.";
Blockly.MSG_S3_SERIAL_SEND_TEXT_TOOLTIP = "send message: send text out from the serial port";
Blockly.MSG_S3_SERIAL_SEND_DECIMAL_TOOLTIP = "send number: send a number out from the serial port";
Blockly.MSG_S3_SERIAL_SEND_CHAR_TOOLTIP = "send character: send a character out from the serial port";
Blockly.MSG_S3_SERIAL_SEND_CTRL_TOOLTIP = "send control character: send a special character out from the serial port";
Blockly.MSG_S3_SERIAL_CURSOR_XY_TOOLTIP = "set cursor position: set the cursor position in the terminal";
Blockly.MSG_S3_SERIAL_RX_BYTE_TOOLTIP = "receive character: receieve a character from the serial port";
Blockly.MSG_S3_FACTORY_RESET_TOOLTIP = "factory reset: use to reload the factory default demo program back onto the Scribbler"; 