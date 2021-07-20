import content from './posts-list.component.html';
import style from './posts-list.component.scss';

class PostsListComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = content;
        this.style = style;
    }
}

customElements.define('app-posts-list', PostsListComponent);