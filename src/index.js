// write your code here


document.addEventListener('DOMContentLoaded', () => {
    let menu = document.getElementById('ramen-menu')
    let form = document.querySelector('form')


    //fetch articles
    fetch("http://localhost:3000/ramens")
    .then((resp) => resp.json())
    .then((result) => {
        for (const element of result) {
            let image = document.createElement('img')
            image.src = element["image"]
            menu.appendChild(image)
            image.addEventListener('click', () => {

                //grab elements and display the correct value

                let select = document.getElementById('ramen-detail')
                let rimage = select.firstElementChild
                let rname = document.querySelector('h2')
                let restaurant = select.lastElementChild
                let rating = document.getElementById('rating-display')
                let comment = document.getElementById('comment-display')
                rimage.src = element["image"]
                rname.innerText = element.name
                restaurant.innerText = element.restaurant
                rating.textContent = element.rating
                comment.textContent = element.comment
            })
        }
    })

    //grab element and display

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        let name = form.name.value
        let restaurant = form.restaurant.value
        let image = form.image.value
        let rating = form.rating.value
        let comment = form.querySelector('textarea').value

        //add image element and append

        let divImage = document.createElement('img')
        divImage.src = image
        menu.appendChild(divImage)

        //add click listener to image
        divImage.addEventListener('click', () => {
            let select = document.getElementById('ramen-detail')
            let rimage = select.firstElementChild
            let rname = document.querySelector('h2')
            let divrestaurant = select.lastElementChild
            let divrating = document.getElementById('rating-display')
            let divcomment = document.getElementById('comment-display')
            rimage.src = image
            rname.innerText = name
            divrestaurant.innerText = restaurant
            divrating.innerText = rating
            divcomment.textContent = comment
        })

    })
})