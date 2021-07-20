import content from './home.component.html';
import style from './home.component.scss';

class HomeComponent extends HTMLElement {
    
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = content;
        this.style = style;
    }
}

customElements.define('app-home', HomeComponent);