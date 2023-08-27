document.addEventListener("click", (e) => {
    const $toggleBtns = document.querySelectorAll(".toggleBtn");

    for (let i = 0; i < $toggleBtns.length; i++) {
        if (e.target === $toggleBtns[i]) {
            if ($toggleBtns[i].classList.contains("true")) {
                $toggleBtns[i].classList.remove("true");
                $toggleBtns[i].classList.add("false");
            } else if ($toggleBtns[i].classList.contains("false")) {
                $toggleBtns[i].classList.remove("false");
                $toggleBtns[i].classList.add("true");
            } else {
                $toggleBtns[i].classList.add("true");
            }
        }
    }
});

const tjs = {
    getVal: (ele) => {
        if (ele.classList.contains("true")) {
            return true;
        } else if (ele.classList.contains("false")) {
            return false;
        } else {
            return null;
        }
    },
    valChange: (ele) => {
        if (ele.classList.contains("true")) {
            ele.classList.remove("true");
            ele.classList.add("false");
        } else if (ele.classList.contains("false")) {
            ele.classList.remove("false");
            ele.classList.add("true");
        } else {
            ele.classList.add("true");
        }
    }
}