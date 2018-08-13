export default class HitsTop {
    constructor(element, callback) {
        this.element = element;
        this.callback = callback;
        
        this.hasPassedTop = null;
        
        this.checkIf();
        this.bindEvents();
    }
    
    bindEvents() {
        window.addEventListener("scroll", this.checkIf.bind(this));
    }
    
    checkIf() {
        const previousValue = this.hasPassedTop;
        this.hasPassedTop = this.element.getBoundingClientRect().top < 0;
        if (this.hasPassedTop === previousValue) return;
        
        this.callback(this.hasPassedTop, this.element);
    }
}
