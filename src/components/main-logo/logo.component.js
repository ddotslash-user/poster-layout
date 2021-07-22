import content from './logo.component.html';
import style from './logo.component.scss';


class LogoComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = content;
        this.style = style;
    }
}

customElements.define('app-logo', LogoComponent);