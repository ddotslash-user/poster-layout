import content from './create-post.component.html';
import style from './create-post.component.scss';

class CreatePostComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = content;
        this.style = style;
    }
}

customElements.define('app-create-post', CreatePostComponent);