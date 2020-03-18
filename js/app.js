//Get portfolio button
const portfolioBtn = document.querySelector(".portfolio-icon__pic");
//Get landing section
const landingSection = document.querySelector(".landing");
//Get portfolio section
const portfolioSection = document.querySelector(".portfolio");

//Add event listener to portfolio button
portfolioBtn.addEventListener("click", () => {
    landingSection.style.display = "none";
    portfolioSection.style.display = "grid";
});