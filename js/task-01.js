const categoriesList = document.querySelector("#categories");
console.log(categoriesList);
const categoriesItems = categoriesList.querySelectorAll(".item");
console.log(`В списке ${categoriesItems.length} категории.`);

categoriesItems.forEach((item) => {
  const categoryTitle = item.querySelector("h2").textContent;
  const categoryItems = item.querySelectorAll("li").length;
  console.log(
    `Категорія: ${categoryTitle} \nКількість елементів: ${categoryItems}`
  );
});
