import content from './post-card.component.html';
import style from './post-card.component.scss';

class PostCardComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = content;
        this.style = style;
    }
}

customElements.define('app-post-card', PostCardComponent);