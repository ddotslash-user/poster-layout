import content from './footer.component.html';
import style from './footer.component.scss';


class FooterComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = content;
        this.style = style;
    }
}

customElements.define('app-footer', FooterComponent);