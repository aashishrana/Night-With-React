function customRender(reactElement , Container) {
    const domElement = document.createElement
    (reactElement.type)
    domElement.innerHtml = reactElement.children
    domElement.setAttribut("href" , reactElement.props.href)
    domElement.setAttribut("target" , reactElement.props.target)
    Container.appendChild(domElement)
}

const reactElement = {
    type : "a",
    props : {
        href: "https://google.com",
        target : "_blank"
    },

    children : "Click me to visit google"
}

const mainContainer = document.querySelector("#root");

customRender(reactElement , mainContainer)

