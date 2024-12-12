import {friends} from "../data/friends.js"

const myNav = document.querySelector('nav')
const myViewer = document.querySelector('#viewer')
friends.forEach(friend => {
    console.log(friend)
    const myButton = document.createElement('button')
    myButton.textContent = friend.first
    myButton.addEventListener('click', () => showFriend(friend))
    myNav.appendChild(myButton)
})
function showFriend(friend) {

    let friendSection = document.createElement("section")
    let friendName = document.createElement("h2")
    let friendPhoto = document.createElement("img")
    let friendBirthday = document.createElement("h3")
    let friendEmployment = document.createElement('p')
    let friendHobbies = document.createElement('ul')

friendName.textContent = friend.first 
friendPhoto.src = `images/${friend.photo}`
friendPhoto.alt = friend.first
friendEmployment.textContent = `Product Description: ${friend.employed}`
friendBirthday.textContent = friend.bornYear
friendHobbies.textContent = `Key Features: `


friend.hobbies.forEach(hobby => {
    let theHobby = document.createElement('li')
    theHobby.textContent = hobby
    friendHobbies.appendChild(theHobby)

})


friendSection.appendChild(friendName)
friendSection.appendChild(friendPhoto)
friendSection.appendChild(friendBirthday)
friendSection.appendChild(friendEmployment)
friendSection.appendChild(friendHobbies)

myViewer.textContent = ""

myViewer.appendChild(friendSection)
}