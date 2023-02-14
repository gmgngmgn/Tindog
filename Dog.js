import dogs from '/data.js'

class Dog {
    constructor(data){
        Object.assign(this, data)
    }
    getDogHtml() {
        const {name, avatar, age, bio, hasBeenSwiped, hasBeenLiked} = this
        return `
                <img class="profile-img" src=${avatar}>
                <div class="dog-info">
                    <h1 class="name-age">${name}, ${age}</h1>
                    <p class="blurb">${bio}</p>
                </div>
        `
    }
}

export default Dog