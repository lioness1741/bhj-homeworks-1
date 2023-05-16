const fontSize = [...document.querySelectorAll(".font-size")];
const book = document.querySelector(".book");

function bookControl(item) {
  fontSize.forEach(e => e.classList.remove("font-size_active"));
    item.classList.add("font-size_active");
    if(item.dataset.size === "small") {
       book.classList.remove("book_fs-big");
        book.classList.add("book_fs-small")
    }
    if(item.dataset.size === "big") {
        book.classList.remove("book_fs-small");
        book.classList.add("book_fs-big")
    }
    if(!item.dataset.size) {
        book.classList.remove("book_fs-small");
        book.classList.remove("book_fs-big");
    }    
}
fontSize.forEach(item => item.onclick = () => bookControl(item));
