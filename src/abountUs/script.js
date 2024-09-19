const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`); 
const itemsPerPage = 10;
let currentPage = 1;

function renderItems() {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const itemsToDisplay = items.slice(start, end);

    const itemList = document.getElementById('item-list');
    itemList.innerHTML = ''; 

    itemsToDisplay.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'item';
        itemElement.textContent = item;
        itemList.appendChild(itemElement);
    });

    document.getElementById('page-info').textContent = `Page ${currentPage} of ${Math.ceil(items.length / itemsPerPage)}`;
    document.getElementById('prev-btn').disabled = currentPage === 1;
    document.getElementById('next-btn').disabled = currentPage === Math.ceil(items.length / itemsPerPage);
}

function nextPage() {
    if (currentPage < Math.ceil(items.length / itemsPerPage)) {
        currentPage++;
        renderItems();
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        renderItems();
    }
}

// Initial render
renderItems();
