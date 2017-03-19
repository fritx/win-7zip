let test = require('ava')
let fs = require('fs-extra-promise')
let { exec } = require('child_process')
let { join, dirname } = require('path')

test.serial('should get path of 7z.exe', async t => {
  let _7z = require('./')['7z']
  let _7z_exe = join(__dirname, '7zip-lite', '7z.exe')
  t.is(_7z, _7z_exe)

  let exists = await fs.existsAsync(_7z)
  t.true(exists)
})

if (process.platform !== 'win32') {
  console.warn('further test should be run in windows')
} else {

  // dependent cross-unzip should work
  // inside which win-7zip should link to current project
  // ie. ln -s $(pwd) node_modules/cross-unzip/node_modules/win-7zip
  let src = __dirname
  let dest = join(__dirname, 'node_modules', 'cross-unzip', 'node_modules', 'win-7zip')

  fs.ensureSymlinkSync(src, dest, 'junction')
  require('cross-unzip/test/test')
}
