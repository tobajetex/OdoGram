// Reference to DOM Elements
const submitBtn= document.getElementById("submit-btn");
const modal = document.getElementById("modal");
const firstNameInput = document.getElementById("first-name")
const lastNameInput = document.getElementById("last-name")
const emailInput = document.getElementById("email")
const ageSelection = document.getElementById("age");
const form= document.getElementById("form");
const modalInner = document.getElementById("modal-inner")
const modalCloseBtn =document.getElementById("modal-close-btn")

//Show Modal After 1500ms

setTimeout(()=>{
    modal.style.display="flex"
} ,1500);


//Event Listeners
submitBtn.addEventListener("submit", mainFunct)
form.addEventListener("submit",getinputedAndSelectedValue)
firstNameInput.addEventListener("input" ,checkInputAndDisabledButton)
lastNameInput.addEventListener("input" ,checkInputAndDisabledButton)
emailInput.addEventListener("input" ,checkInputAndDisabledButton)
ageSelection.addEventListener("input" ,checkInputAndDisabledButton)
// Main Function Trigger by the Submit button
function mainFunct(){
    checkInputAndDisabledButton()
}
 // function to check input and enable or disable the button
    function checkInputAndDisabledButton(){
    const firstName =firstNameInput.value;
    const lastName =lastNameInput.value;
    const age =ageSelection.value;
    const email = emailInput.value
    submitBtn.disabled =!(firstName && lastName && age && email)
    }

 // function to get form Data and populate the ModalInner with Profile Card
    function getinputedAndSelectedValue(event){
         event.preventDefault();
        const formData =new FormData(form);
        const firstName = formData.get("firstName");
        const lastName = formData.get("lastName")
        const email= formData.get("email")
        console.log(email)
        //Set the Modal content to the Profile Card
        modalInner.innerHTML =`<div class="card">
                        <img src="images/profileImg.jpg" alt="Profile Picture" class="card-img">
                        <div class="card-content">
                            <h2>${firstName} ${lastName}</h2>
                            <p>${email}</p>
                        </div>
                        </div>
                        `
    // Set a timeout to replace the modalInner content with the recent activity
                        setTimeout(function(){
                            modalInner.innerHTML =`<div class="card">
                            <div class="card-content">
                                <h2 id="card2-heading">Recent Activity</h2>
                                <ul>
                                <li>Posted a new blog on web development.</li>
                                <li>Completed a coding challenge on Scrimba.</li>
                                <li>Attended a tech meetup in the city.</li>
                                <li>Started learning React.js.</li>
                                </ul>
                            </div>
                            </div>
                            `
                            // Enable the modalClosedBtn after 200ms delay
                             closeModal()
                            
                        } , 2000)
    }
    //Function to close the Modal
    
    function closeModal(){
        modalCloseBtn.disabled = false
        modalCloseBtn.addEventListener("click",()=>{
            modal.style.display = "none"
        })

    }








