react-monorepo-template
===

[![Build & Deploy](https://github.com/uiwjs/react-monorepo-template/actions/workflows/ci.yml/badge.svg)](https://github.com/uiwjs/react-monorepo-template/actions/workflows/ci.yml)
[![Coverage Status](https://uiwjs.github.io/react-monorepo-template/badges.svg)](https://uiwjs.github.io/react-monorepo-template/coverage/lcov-report/)

Simple [React](https://github.com/facebook/react) package development project example template.

## Directory Structure

```bash
├── LICENSE
├── README.md -> core/README.md
├── core              # 📦 package @uiw/react-monorepo-template
│   ├── README.md
│   ├── cjs           # 🔄 Compiled cjs directory
│   ├── esm           # 🔄 Compiled esm directory
│   ├── src           # Package source directory
│   ├── dist.css      # 🔄 compile less to css
│   ├── package.json  # name => @uiw/react-monorepo-template
│   └── tsconfig.json
├── lerna.json
├── package.json
├── tsconfig.json
├── test              # ⛑ test case
└── website           # 🐝 Package example test, website
    ├── README.md
    ├── package.json
    ├── public
    ├── src
    └── tsconfig.json
```

## Development

1. Dependencies in the installation package and example

```bash
npm run install
```

2. To develop, run the self-reloading build:

```bash
npm run build  # Compile packages      📦 @uiw/react-monorepo-template
npm run watch  # Real-time compilation 📦 @uiw/react-monorepo-template
```

3. Run Document Website Environment:

```bash
npm run start
```

4. To contribute, please fork repos, add your patch and tests for it (in the `test/` folder) and submit a pull request.

```
npm run test
```


### Using

```jsx mdx:preview
import React from "react";
import MonorepoTemplate from '@uiw/react-monorepo-template';

export default function App() {
  return (
    <div className="container">
    <MonorepoTemplate>
      Example test
    </MonorepoTemplate>
    </div>
  );
}
```

## Contributors

As always, thanks to our amazing contributors!

<a href="https://github.com/uiwjs/react-monorepo-template/graphs/contributors">
  <img src="https://uiwjs.github.io/react-monorepo-template/CONTRIBUTORS.svg" />
</a>

Made with [contributors](https://github.com/jaywcjlove/github-action-contributors).

## License

Licensed under the MIT License.