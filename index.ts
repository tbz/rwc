// TODO: Nodes/CSSStyleSheet, integration with webpack/styles-loader
type Styles = string | Array<string>;

function createStyleSheetElement(styles: string) {
  const el = document.createElement("style");
  el.innerHTML = styles;
  return el;
}

function createStyleSheetElements(stylesOrStylesList: Styles) {
  if (typeof stylesOrStylesList === "string") {
    return [createStyleSheetElement(stylesOrStylesList)];
  }

  return stylesOrStylesList.map((styles) => createStyleSheetElement(styles));
}

type ReactRoot = { render(jsx: JSX.Element): void; unmount(): void };
type CreateRoot = (mountPoint: Element) => ReactRoot;

export function createCustomElement(
  app: JSX.Element,
  tagName: string,
  createRoot: CreateRoot,
  styles?: Styles
) {
  customElements.define(
    tagName,
    class extends HTMLElement {
      reactRoot?: ReactRoot;

      connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: "open" });
        const mountPoint = document.createElement("div");
        if (styles) {
          createStyleSheetElements(styles).forEach((styleElement) =>
            shadowRoot.appendChild(styleElement)
          );
        }
        shadowRoot.appendChild(mountPoint);

        this.reactRoot = createRoot(mountPoint);
        this.reactRoot.render(app);
      }

      disconnectedCallback() {
        if (this.reactRoot) {
          this.reactRoot.unmount();
        }
      }
    }
  );
}
