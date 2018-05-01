import createHtmlElement from "create-html-element";

function hi() {
    const greeting = createHtmlElement({
        name: "h1",
        html: "Hello from Application C"
    })

    if (typeof document !== "undefined") {
        document.body.innerHTML = greeting;
    }
}

export default hi;