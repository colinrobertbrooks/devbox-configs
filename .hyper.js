// Future versions of Hyper may add additional config options,
// which will not automatically be merged into this file.
// See https://hyper.is#cfg for all currently supported options.

/*
  colors for sublime's blackboard theme:
  http://www.eclipsecolorthemes.org/?view=theme&id=10492
*/

module.exports = {
  config: {
    // Choose either "stable" for receiving highly polished,
    // or "canary" for less polished but more frequent updates
    updateChannel: 'stable',

    // default font size in pixels for all tabs
    fontSize: 14,

    // font family with optional fallbacks
    fontFamily: '"Roboto Mono", monospace',

    // terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
    cursorColor: '#646769', // blackboard (cursor)

    // `BEAM` for |, `UNDERLINE` for _, `BLOCK` for █
    cursorShape: 'BEAM',

    // set to true for blinking cursor
    cursorBlink: true,

    // color of the text
    foregroundColor: '#F8F8F8', // blackboard (foreground)

    // terminal background color
    backgroundColor: '#26292C', // blackboard (background)

    // border color (window, tabs)
    borderColor: '#333',

    // custom css to embed in the main window
    css: '',

    // custom css to embed in the terminal window
    termCSS: '',

    // set to `true` (without backticks) if you're using a Linux setup that doesn't show native menus
    // default: `false` on Linux, `true` on Windows (ignored on macOS)
    showHamburgerMenu: '',

    // set to `false` if you want to hide the minimize, maximize and close buttons
    // additionally, set to `'left'` if you want them on the left, like in Ubuntu
    // default: `true` on windows and Linux (ignored on macOS)
    showWindowControls: '',

    // custom padding (css format, i.e.: `top right bottom left`)
    padding: '12px 14px',

    // the full list. if you're going to provide the full color palette,
    // including the 6 x 6 color cubes and the grayscale map, just provide
    // an array here instead of a color map object
    colors: {
      black: '#111111', // blackboard (find scope)
      red: '#D25252', // blackboard (deprecated / deleted)
      green: '#7FB347', // blackboard (enum)
      yellow: '#EDED1A', // blackboard (keyword)
      blue: '#79ABFF', // blackboard (localVariable)
      magenta: '#D197D9', // blackboard (interface)
      cyan: '#BED6FF', // blackboard (field)
      white: '#FFFFFF',
      lightBlack: '#938989', // blackboard (comment)
      lightRed: '#D25252', // blackboard (deprecated / deleted)
      lightGreen: '#92DB3F', // blackboard (string)
      lightYellow: '#EDED1A', // blackboard (keyword)
      lightBlue: '#79ABFF', // blackboard (localVariable)
      lightMagenta: '#D197D9', // blackboard (interface)
      lightCyan: '#BED6FF', // blackboard (field)
      lightWhite: '#FFFFFF'
    },

    // the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
    // if left empty, your system's login shell will be used by default
    //
    // Windows
    // - Make sure to use a full path if the binary name doesn't work
    // - Remove `--login` in shellArgs
    //
    // Bash on Windows
    // - Example: `C:\\Windows\\System32\\bash.exe`
    //
    // Powershell on Windows
    // - Example: `C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe`
    shell: 'C:\\Program Files\\Git\\git-cmd.exe',

    // for setting shell arguments (i.e. for using interactive shellArgs: ['-i'])
    // by default ['--login'] will be used
    shellArgs: ['--command=usr/bin/bash.exe', '-l', '-i'],

    // for environment variables
    env: {
      TERM: 'msys'
    },

    // set to false for no bell
    bell: 'SOUND',

    // if true, selected text will automatically be copied to the clipboard
    copyOnSelect: true,

    // if true, on right click selected text will be copied or pasted if no
    // selection is present (true by default on Windows)
    // quickEdit: true

    // URL to custom bell
    // bellSoundURL: 'http://example.com/bell.mp3',

    // plugin configs...
    commands: [ // hyper-startup
      // 'cd /c/www'
    ],
    hyperlinks: {
      clickAction: 'open', // open links
      defaultBrowser: true // open links in chrome
    },
    paneNavigation: { // hyper-pane
      indicatorPrefix: '// ',
      focusOnMouseHover: true
    }

    // for advanced config flags please refer to https://hyper.is/#cfg
  },

  // a list of plugins to fetch and install from npm
  // format: [@org/]project[#version]
  // examples:
  //   `hyperpower`
  //   `@company/project`
  //   `project#1.0.1`
  plugins: [
    'hyper-startup',
    'hyperlinks',
    'hyper-simple-highlight-active-session',
    'hyper-pane'
  ],

  // in development, you can create a directory under
  // `~/.hyper_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: [],

  keymaps: {
    // Example
    // 'window:devtools': 'cmd+alt+o',
  }
};
