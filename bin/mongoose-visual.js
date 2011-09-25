#!/usr/bin/env node

/*
Mongoose Visualizer
Generate a human readable document to show a biz
dev guy your data models so that they can point and
say "yes, no, add x, add y, so so so …"

Fast project to display nicely formated data models json or html
*/

var visual = require("../lib/mongoose-visual");
var args = process.argv.slice(2);

visual(args);

/* EOF */