document.addEventListener("DOMContentLoaded", () => {
    // Toggle collapsible sections with arrow rotation
    const headings = document.querySelectorAll("h2");
    headings.forEach(h2 => {
        const ul = h2.nextElementSibling;
        if (ul && ul.tagName === "UL") {
            ul.classList.add("collapsible");
            ul.style.maxHeight = ul.scrollHeight + "px"; // initially open

            h2.addEventListener("click", () => {
                if (ul.style.maxHeight && ul.style.maxHeight !== "0px") {
                    ul.style.maxHeight = "0px";
                    h2.classList.add("collapsed");
                } else {
                    ul.style.maxHeight = ul.scrollHeight + "px";
                    h2.classList.remove("collapsed");
                }
            });
        }
    });

    // Blink on check
    const listItems = document.querySelectorAll("ul li");
    listItems.forEach(item => {
        item.addEventListener("click", () => {
            item.classList.toggle("checked");
            if (item.classList.contains("checked")) {
                item.classList.add("blink");
                setTimeout(() => {
                    item.classList.remove("blink");
                }, 500);
            }
        });
    });

    // Scroll to top with circle button
    const circleBtn = document.querySelector(".circle-button");
    if (circleBtn) {
        circleBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});
