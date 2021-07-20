import content from './header.component.html';
import style from './header.component.scss';


class HeaderComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = content;
        this.style = style;
    }
}

customElements.define('app-header', HeaderComponent);