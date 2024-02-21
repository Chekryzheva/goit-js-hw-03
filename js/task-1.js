function slugify(title) {
  const arrayWords = title.split(" ");
  for (let i = 0; i < arrayWords.length; i += 1) {
    arrayWords[i] = arrayWords[i].toLowerCase();
  }
  const slug = arrayWords.join("-");
  return slug;
}
console.log(slugify("Arrays for begginers"));
console.log(slugify("English for developer"));
console.log(slugify("Ten secrets of JavaScript"));
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));
