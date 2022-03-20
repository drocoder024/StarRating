const star1 = document.querySelector("#star1");
const star2 = document.querySelector("#star2");
const star3 = document.querySelector("#star3");
const star4 = document.querySelector("#star4");
const star5 = document.querySelector("#star5");

const starArray = [star1, star2, star3, star4, star5];
const star_Ids = ['star1', 'star2', 'star3', 'star4', 'star5'];

const onHover = (star) => {
    star.addEventListener("mouseenter", event => {
        const img_id = event.target.id;
        for (let i = 0; i <= star_Ids.indexOf(img_id); i++) {
            starArray[i].src = "/after.jpg";
        }
    })
    star.addEventListener("mouseleave", event => {
        const img_id = event.target.id;
        for (let i = 0; i <= star_Ids.indexOf(img_id); i++) {
            starArray[i].src = "/before.jpg";
        }
    })

}

// const onClick = (star) => {
//     star.addEventListener("click", (event) => {
// event.target.src="/after.jpg";
//     })
//}


starArray.forEach(star => onHover(star));
// starArray.forEach(star => onClick(star));