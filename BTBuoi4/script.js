// Yêu cầu 1
function changeText() {
    document.getElementById("greeting").textContent = "Chào mừng bạn đến với bài tập DOM!";
}

// Yêu cầu 2
function changeBoxColor() {
    document.getElementById("box").style.backgroundColor = "orange";
}

window.onload = function () {
    document.getElementById("addTodoBtn").addEventListener("click", function () {
        const input = document.getElementById("todoInput");
        const value = input.value.trim();

        if (value === "") {
            alert("Vui lòng nhập công việc.");
            return;
        }

        const li = document.createElement("li");
        const span = document.createElement("span");
        span.textContent = value;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Xóa";
        deleteBtn.onclick = function () {
            removeTodo(deleteBtn);
        };

        li.appendChild(span);
        li.appendChild(deleteBtn);

        document.getElementById("todoList").appendChild(li);
        input.value = "";
    });
};

function removeTodo(buttonElement) {
    const li = buttonElement.parentElement;
    li.remove();
}



// Yêu cầu 4
function changeImage() {
    const img = document.getElementById("myImage");
    img.src = "https://www.svgrepo.com/show/452030/avatar-default.svg";
}


// Yêu cầu 5
function toggleHighlight() {
    const text = document.getElementById("toggleClassText");
    text.classList.toggle("highlight");
}
