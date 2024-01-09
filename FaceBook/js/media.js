const messageTab = document.querySelector("#mess")
const message = document.querySelector(".message")
const generalBody = document.querySelector(".mainContain")
 
const homeButton = document.querySelector("#homie")

const chatName = document.querySelector("#name")
const mainChat = document.querySelector(".chatArea")
const header = document.querySelector(".section")

const cancel = document.querySelector(".cancelBtn")
const head = document.querySelector(".heading")

const vids = document.querySelector("#videos")
const vidContainer = document.querySelector(".vidSection")

/* Chatbot Variables  */
const chatingArea = document.querySelector(".chatArea")
const reply = document.querySelector(".sendBtn")


messageTab.addEventListener("click", function() {
    message.classList.add("show")
    generalBody.classList.add("not")
    vidContainer.classList.add("why")
    head.classList.add("not")
})

homeButton.addEventListener("click", function() {
    message.classList.remove("show")
    generalBody.classList.remove("not")
    vidContainer.classList.add("why")
    head.classList.remove("not")
})

chatName.addEventListener("click", function() {
    mainChat.classList.remove("showin")
    header.classList.add("none")
})

 cancel.addEventListener("click", function() {
    mainChat.classList.add("showin")
    header.classList.remove("none")
}) 

vids.addEventListener("click", function() {
    vidContainer.classList.remove("why")
    generalBody.classList.add("not")
    message.classList.remove("show")
    head.classList.add("not")

})
