const categoriesList = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesList.length}`);
categoriesList.forEach(category => {
    const categoryElements = category.querySelectorAll("li");
    console.log(`Category: ${category.firstElementChild.textContent}\nElements: ${categoryElements.length}`);
});