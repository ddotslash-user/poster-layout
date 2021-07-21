import content from './post.component.html';
import style from './post.component.scss';

class PostComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = content;
        this.style = style;
    }
}

customElements.define('app-post', PostComponent);