document.addEventListener("DOMContentLoaded", function(event) {
    reset(16);
});

function addFlexItems(flexBoxCon, size = 16) {
    for (let i = 0; i < size; i++) {
        let flexItemDiv = document.createElement("div");
        flexItemDiv.setAttribute("id", "flex-div" + (i + 1));
        flexItemDiv.style.borderStyle = "solid";
        flexItemDiv.style.width = 960/size + "px";
        flexItemDiv.style.boxSizing = "content-box";
        flexItemDiv.addEventListener("mouseenter", (event) => {
            event.target.style.backgroundColor = "black";
        })
        flexBoxCon.appendChild(flexItemDiv);
    }
}

function createFlexContainer(size = 16) {
    const body = document.body;
    for (let i = 0; i < size; i++) {
        let flexBoxContainer = document.createElement("div");
        flexBoxContainer.setAttribute("id", "flex-container" + (i + 1));
        flexBoxContainer.setAttribute("style", "display: flex; justify-content: center; width: 960px; height: " + 960/size + "px; box-sizing: content-box;");
        addFlexItems(flexBoxContainer, size);
        body.appendChild(flexBoxContainer);
    }
}

function reset(size = 16) {
    const body = document.createElement("body");
    const button = document.createElement("button");
    button.setAttribute("id", "set-size");
    button.innerText = "Set Size";
    button.addEventListener("click", () => {
        size = prompt("test");
        if (size > 100) {
            size = prompt("test");
        }
        reset(size);
    })
    document.body = body;
    body.appendChild(button);
    createFlexContainer(size);
}