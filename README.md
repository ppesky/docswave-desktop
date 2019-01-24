# Docswave-desktop

This is a [Docswave](https://www.docswave.com/) desktop application made with [Electron](https://github.com/electron).

*Disclaimer : Not affiliated with Docswave.*
## Installation

Download the [latest releases](https://github.com/ppesky/docswave-desktop/releases) for **Windows** or **MacOS**.

## Development and Pull Requests

To build the app locally, clone the repository, install all dependencies, and run the available npm scripts.

```sh
git clone https://github.com/ppesky/docswave-desktop.git
cd docswave-desktop
npm install
```

```sh
$ npm start
```

## Build

```sh
$ npm run publish:win

 docswave-desktop@0.1.0 publish:win /Users/ppesky/github/docswave-desktop
 electron-builder build --win --ia32 --x64 -p always

...
```

```sh
$ npm run publish:mac

 docswave-desktop@0.1.0 publish:mac /Users/yhkim/github/docswave-desktop
 electron-builder build --mac -p always

...
```

```sh
$ ls dist
builder-effective-config.yaml			docswave-desktop-0.1.0.dmg.blockmap
docswave-desktop Setup 0.1.0.exe		latest-mac.yml
docswave-desktop Setup 0.1.0.exe.blockmap	mac
docswave-desktop-0.1.0-mac.zip			win-ia32-unpacked
docswave-desktop-0.1.0.dmg			win-unpacked
```

## License

[MIT](https://github.com/ppesky/docswave-desktop/blob/master/LICENSE)
