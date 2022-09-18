# @tbz/rwc

> Wrap React App in Custom Element

Based on [react-web-component](https://github.com/LukasBombach/react-web-component) but supporting a smaller use case. Changes from upstream:

- Updated to use React 18 API
- Removed lifecycle methods
- Removed event retargeting since that was fixed in React 17
- Always render into a shadowRoot

## Usage

```js
import { createRoot } from "react-dom/client";
import { createComponent } from "@tbz/rwc";
import App from "./App";

createComponent(<App />, "my-app", createRoot);

// Your app can now be referenced as <my-app></my-app>
```
