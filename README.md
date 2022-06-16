oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g refab-cli
$ refab COMMAND
running command...
$ refab (--version)
refab-cli/0.0.1 linux-x64 node-v16.14.2
$ refab --help [COMMAND]
USAGE
  $ refab COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`refab hello PERSON`](#refab-hello-person)
* [`refab hello world`](#refab-hello-world)
* [`refab help [COMMAND]`](#refab-help-command)
* [`refab plugins`](#refab-plugins)
* [`refab plugins:install PLUGIN...`](#refab-pluginsinstall-plugin)
* [`refab plugins:inspect PLUGIN...`](#refab-pluginsinspect-plugin)
* [`refab plugins:install PLUGIN...`](#refab-pluginsinstall-plugin-1)
* [`refab plugins:link PLUGIN`](#refab-pluginslink-plugin)
* [`refab plugins:uninstall PLUGIN...`](#refab-pluginsuninstall-plugin)
* [`refab plugins:uninstall PLUGIN...`](#refab-pluginsuninstall-plugin-1)
* [`refab plugins:uninstall PLUGIN...`](#refab-pluginsuninstall-plugin-2)
* [`refab plugins update`](#refab-plugins-update)

## `refab hello PERSON`

Say hello

```
USAGE
  $ refab hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/refab-js/refab-cli/blob/v0.0.1/dist/commands/hello/index.ts)_

## `refab hello world`

Say hello world

```
USAGE
  $ refab hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `refab help [COMMAND]`

Display help for refab.

```
USAGE
  $ refab help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for refab.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `refab plugins`

List installed plugins.

```
USAGE
  $ refab plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ refab plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `refab plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ refab plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ refab plugins add

EXAMPLES
  $ refab plugins:install myplugin 

  $ refab plugins:install https://github.com/someuser/someplugin

  $ refab plugins:install someuser/someplugin
```

## `refab plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ refab plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ refab plugins:inspect myplugin
```

## `refab plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ refab plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ refab plugins add

EXAMPLES
  $ refab plugins:install myplugin 

  $ refab plugins:install https://github.com/someuser/someplugin

  $ refab plugins:install someuser/someplugin
```

## `refab plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ refab plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ refab plugins:link myplugin
```

## `refab plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ refab plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ refab plugins unlink
  $ refab plugins remove
```

## `refab plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ refab plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ refab plugins unlink
  $ refab plugins remove
```

## `refab plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ refab plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ refab plugins unlink
  $ refab plugins remove
```

## `refab plugins update`

Update installed plugins.

```
USAGE
  $ refab plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
