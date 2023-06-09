const sortableList = document.querySelector(".sortable-list");
const items = document.querySelectorAll(".item");
items.forEach(item => {
    item.addEventListener("dragstart", () => {
        setTimeout(() => item.classList.add("dragging"),0);
    });
    // Removing dragging class on dragend event from item
    item.addEventListener("dragend", () => {
        item.classList.remove("dragging");
    })
});

const initSortableList = (e) => {
    e.preventDefault();
    const draggingItem = sortableList.querySelector(".dragging");
    //Retrieving all items except currently dragging item
    const siblings = [...sortableList.querySelectorAll(".item:not(.dragging)")];

    // Finds sibling after which dragging item to be placed
    let nextSibling = siblings.find(sibling => {
        return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
    });
  
    // Inserts dragging item before found sibling
    sortableList.insertBefore(draggingItem, nextSibling)
}
sortableList.addEventListener("dragover", initSortableList)
sortableList.addEventListener("dragenter", e => e.preventDefault());

