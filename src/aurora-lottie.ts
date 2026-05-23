import { LitElement, css, html } from "lit";
// lottie_light = SVG-only renderer, no expression engine — ~60% smaller than full build
import lottie from "lottie-web/build/player/lottie_light";

export class AuroraLottie extends LitElement {
  src = "";

  static get properties() {
    return { src: { type: String } };
  }

  private _anim: ReturnType<typeof lottie.loadAnimation> | null = null;

  render() {
    return html`<div id="c"></div>`;
  }

  firstUpdated() {
    this._load();
  }

  updated(changed: Map<string, unknown>) {
    if (changed.has("src") && this._anim) {
      this._anim.destroy();
      this._anim = null;
      this._load();
    }
  }

  private _load() {
    const container = this.shadowRoot?.getElementById("c");
    if (!container || !this.src) return;
    this._anim = lottie.loadAnimation({
      container,
      renderer: "svg",
      autoplay: true,
      loop: true,
      path: this.src,
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._anim?.destroy();
    this._anim = null;
  }

  static styles = css`
    :host {
      display: block;
      width: 100%;
      height: 100%;
    }
    #c,
    #c > svg {
      width: 100% !important;
      height: 100% !important;
    }
  `;
}

if (!customElements.get("aurora-lottie")) {
  customElements.define("aurora-lottie", AuroraLottie);
}
