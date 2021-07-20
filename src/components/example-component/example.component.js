import content from './example.component.html';
import style from './example.component.scss';


class ExampleComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = content;
        this.style = style;
    }
}

customElements.define('app-example', ExampleComponent);