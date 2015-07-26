#!/usr/bin/env node
var spawn = require('child_process').spawn
var _7z = require('../lib/get_7z')

spawn(_7z, process.argv.slice(2), { stdio: 'inherit' })
