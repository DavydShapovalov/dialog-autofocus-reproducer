class Dialog extends HTMLElement {
  dialog = document.createElement("dialog");
  button1 = Object.assign(new Button(), { textContent: "Button1" });
  button2 = Object.assign(new Button(), {
    textContent: "Button2",
    autofocus: true,
  });

  constructor() {
    super().attachShadow({ mode: "open", delegatesFocus: true });
    this.dialog.append(this.button1, this.button2);
    this.shadowRoot.append(this.dialog);
  }

  showModal() {
    this.dialog.showModal();
  }
}

class Button extends HTMLElement {
  button = document.createElement("button");
  slot = document.createElement("slot");

  constructor() {
    super().attachShadow({ mode: "open", delegatesFocus: true });
    this.button.append(this.slot);
    this.shadowRoot.append(this.button);
  }

  set textContent(val) {
    this.button.textContent = val;
  }

  static get observedAttributes() {
    return ["autofocus"];
  }

  attributeChangedCallback(attr, oldVal, newVal) {
    if (oldVal === newVal) return;

    this.button.autofocus = newVal ?? true;
  }
}

class DialogNativeButton extends HTMLElement {
  dialog = document.createElement("dialog");
  button1 = Object.assign(document.createElement("button"), {
    textContent: "Button1",
  });
  button2 = Object.assign(document.createElement("button"), {
    textContent: "Button2",
    autofocus: true,
  });

  constructor() {
    super().attachShadow({ mode: "open", delegatesFocus: true });
    this.dialog.append(this.button1, this.button2);
    this.shadowRoot.append(this.dialog);
  }

  showModal() {
    this.dialog.showModal();
  }
}

customElements.define("abc-button", Button);
customElements.define("abc-dialog", Dialog);
customElements.define("abc-dialog-native-buttons", DialogNativeButton);
