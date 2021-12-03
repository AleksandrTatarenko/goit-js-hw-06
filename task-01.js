const listEl = document.querySelectorAll('li.item');
const totalListEl = listEl.length;
console.log("Number of categories:", totalListEl);

listEl.forEach(element => {
    const textEl = element.querySelector('h2');
    const getLiEl = element.querySelectorAll('li');
    console.log(`Category:${textEl.textContent}`);
    console.log(`Elements:${getLiEl.length}`);
});
