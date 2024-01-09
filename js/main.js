const body = document.querySelector(".comot")
const chat = document.querySelector(".chatContact")
const chatArea = document.querySelector(".chatArea")
const chatBox = document.querySelector(".chatbox")
const textInput = document.querySelector(".form textarea")
const sendBtn = document.querySelector(".sendBtn")
const cancelBtn = document.querySelector(".cancelBtn")
const groupDiv = document.querySelector(".groups")
 
const group = document.querySelector("#groups")
const home = document.querySelector("#home")

chat.addEventListener("click", function(){
    chatArea.classList.add("showChat")
})
cancelBtn.addEventListener("click", function(){
    chatArea.classList.remove("showChat")
})

let userMessage;

const createChatLi = (message, className) => {
    const chatLi = document.createElement("li")
    chatLi.classList.add("chat", className)
    let chatContent = className = "incoming" ? `<p></p>` : `<p></p>`;
    chatLi.innerHTML = chatContent
    chatLi.querySelector("p").textContent = message
    return chatLi
}

const handleChat = () => {
    userMessage = textInput.value.trim()
    if(!userMessage) return
    textInput.value = "";

    chatBox.appendChild(createChatLi(userMessage, "incoming"))
    chatBox.scrollTo(0, chatBox.scrollHeight)
}

textInput.addEventListener("keydown", function(e){

    //Enter key to send
    if(e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault()
        handleChat()
    }

})

sendBtn.addEventListener("click", handleChat)

group.addEventListener("click", function(){
    body.classList.add("none")
    groupDiv.classList.add("group")
})

home.addEventListener("click", function(){
    body.classList.remove("none")
    groupDiv.classList.remove("group")
    
})

home.addEventListener("dblclick", function(){
    window.location.reload();
})

localStorage.setItem("chatMessage", userMessage)
const myChatHistory = (localStorage.getItem("chatMessage"))
console.log(myChatHistory)
