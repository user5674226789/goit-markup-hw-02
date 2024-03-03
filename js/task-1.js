
const categoriesList = document.querySelector("#categories");
const categories = categoriesList.querySelectorAll(".item"); 

console.log(`Кількість категорій: ${categories.length}`); 

categories.forEach(category => { 
    const categoryName = category.querySelector("h2").textContent;
    const categoryItems = category.querySelectorAll("ul li"); 
    console.log(`Назва категорії: ${categoryName}`);
    console.log(`Кількість елементів у категорії "${categoryName}": ${categoryItems.length}`);
});






