# 7zip Installer via Node.js (Windows Only)

This npm package contains a lite-version of [7zip](http://7-zip.org), ≈2.4MB. The implementation was partly learnt from [electron-prebuilt](https://github.com/mafintosh/electron-prebuilt)

And the goal is to bring users a different and easy way to access 7zip.

```plain
$ npm install -g 7zip   # install
```

```plain
$ 7z --help   # and you get 7z
```

```js
// even in node.js
var _7z = require('7zip')
var task = spawn(_7z, ['x', 'some.7z'])
```

## License of 7Zip

```plain
7-Zip Copyright (C) 1999-2015 Igor Pavlov.

Licenses for files are:

  1) 7z.dll: GNU LGPL + unRAR restriction
  2) All other files:  GNU LGPL
```
