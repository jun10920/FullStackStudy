class NotFoundPage {
    constructor($body) {
        this.$body = $body;
    }

    createElem() {
        const div = document.createElement("div");
        const span = document.createElement("span");
        span.appendChild(document.createTextNode("Not Found"));

        div.appendChild(span);
        return div;
    }

    render() {
        const notFound = this.createElem();
        this.$body.appendChild(notFound);
    }
}
export default NotFoundPage;
