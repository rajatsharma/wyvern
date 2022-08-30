## Wyvern

_Simple CLI to run wasm files_

## Usage

```
Usage: Wyvern <filepath> [function] [options]

Run wasm files

Arguments:
  filepath              Path to wasm file
  function              Name of function to run, default: main

Options:
  -V, --version         output the version number
  -a, --args <args...>  Package manager to use
  -h, --help            display help for command
```

- To run wasm files:

```rs
#[no_mangle]
fn main(x: i32) -> i32 {
    x + 1
}
```

```sh
wyvern hello_wasm.wasm main --args 1
```

### 🚦 Status

![Build](https://github.com/rajatsharma/wyvern/workflows/Build/badge.svg)
[![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

