const categoryItems = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoryItems.length}`);
categoryItems.forEach(category => {
    const categoryName = category.firstElementChild;
    const categoryElementsList = category.querySelectorAll('li');
    console.log(`Category: ${categoryName.textContent}\nElements: ${categoryElementsList.length}`);
});