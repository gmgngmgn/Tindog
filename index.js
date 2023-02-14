// Remember to import the data and Dog class!
import dogs from '/data.js'
import Dog from '/Dog.js'

const heartBtn = document.getElementById('heart-btn-circle')
const crossBtn = document.getElementById('cross-btn-circle')


const dog = new Dog(dogs.shift())
document.getElementById('dog-profile').innerHTML = dog.getDogHtml()


heartBtn.addEventListener("click", function(){
    dog.hasBeenLiked = true
    if (!heartBtn.disabled) {
    document.getElementById("like-badge").style.display = "block";
    heartBtn.classList.add("heart-btn-clicked")
    selectionMade()}
})

crossBtn.addEventListener("click", function(){
    if (!crossBtn.disabled) {
    document.getElementById("nope-badge").style.display = "block";
    crossBtn.classList.add("cross-btn-clicked")
    selectionMade()}
})

function selectionMade() {
    crossBtn.disabled = true
    heartBtn.disabled = true
    dog.hasBeenSwiped = true
    if (dogs.length > 0) {
        setTimeout(function(){
            const dog = new Dog(dogs.shift())
            document.getElementById('dog-profile').innerHTML = dog.getDogHtml()
            dog.hasBeenSwiped = false;
            document.getElementById("nope-badge").style.display = "none";
            document.getElementById("like-badge").style.display = "none";
            heartBtn.classList.remove("heart-btn-clicked");
            crossBtn.classList.remove("cross-btn-clicked");
            crossBtn.disabled = false
            heartBtn.disabled = false
            }, 2000)
    }
}

// if (dog.hasBeenSwiped) {
//     crossBtn.disabled = true
// }
