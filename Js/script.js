 const inputBoxTag = document.querySelector(".inputBox");
 const listContainerTag = document.querySelector(".list-container");

 const checkedImage = "./images/checked.png";
 const uncheckedImage = "./images/unchecked.png";
 const crossImage = "./images/cross-23-16.png";

function addTask() {
    if (inputBoxTag.value === "") {
        alert("You must write something");
    } else {
        let listDivTag = document.createElement("div");
        listDivTag.classList.add("list");

        let contentDivTag = document.createElement("div");
        contentDivTag.classList.add("content");

        let imageTag = document.createElement("img");
        imageTag.src = uncheckedImage;
        imageTag.classList.add("image");

        let spanTag = document.createElement("span");
        spanTag.innerHTML = inputBoxTag.value;
        saveData();
        spanTag.addEventListener("click", () => {
            const exitClass = spanTag.classList.contains("removeAndAdd");
        
            if (exitClass) {
                spanTag.classList.remove("removeAndAdd");
                imageTag.src = uncheckedImage;
                saveData();
            } else {
                spanTag.classList.add("removeAndAdd");
                imageTag.src = checkedImage;
                saveData();
            }
        
        });
        contentDivTag.append(imageTag, spanTag)

        let crossImageTag = document.createElement("img");
        crossImageTag.src = crossImage;
        crossImageTag.classList.add("crossImage");
        crossImageTag.addEventListener("click", () => {
            listDivTag.remove();
        });

        listDivTag.append(contentDivTag, crossImageTag);

        listContainerTag.append(listDivTag);

    }

    inputBoxTag.value = "";
}

const saveData = () => {
    localStorage.setItem("data", listContainerTag.innerHTML);
}

const showData = () => {
    listContainerTag.innerHTML = localStorage.getItem("data");
}

showData();

