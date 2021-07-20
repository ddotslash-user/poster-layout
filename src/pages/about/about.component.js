import content from './about.component.html';
import style from './about.component.scss';


class AboutComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = content;
        this.style = style;
    }

}


customElements.define('app-about', AboutComponent);