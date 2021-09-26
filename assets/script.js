window.addEventListener('DOMContentLoaded', (event) => {
    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene);
});

let pop1 = document.getElementsByClassName('pop1')[0];
let pop2 = document.getElementsByClassName('pop2')[0];
let form_submit_btn = document.getElementById('form-submit-btn');
let btn_skills = document.getElementById('btn-skills');
let btn_contact = document.getElementById('btn-contact');
var form = document.getElementById("my-form");


btn_skills.addEventListener('click', ()=> {
    if(pop1.classList.contains('skills-tab')) {
        pop1.classList.remove('skills-tab');
        btn_skills.innerHTML = "Skills";
        btn_skills.style.cssText = 
        "padding: 10px 20px;"
    } else {
        pop1.classList.add('skills-tab');
        btn_skills.innerHTML = "&times;";
        btn_skills.style.cssText = 
        "width: 50px; height: 50px; z-index: 5"
        if(pop2.classList.contains('contact-tab')) {
            pop2.classList.remove('contact-tab');
            btn_contact.innerHTML = "Connect";
            btn_contact.style.cssText = 
            "padding: 10px 20px;"
        }
    }
})

btn_contact.addEventListener('click', ()=> {
    if(pop2.classList.contains('contact-tab')) {
        pop2.classList.remove('contact-tab');
        btn_contact.innerHTML = "Connect";
        btn_contact.style.cssText = 
        "padding: 10px 20px;"
    } else {
        pop2.classList.add('contact-tab');
        btn_contact.innerHTML = "&times;";
        btn_contact.style.cssText = 
        "width: 50px; height: 50px; z-index: 5";
        if(pop1.classList.contains('skills-tab')) {
            pop1.classList.remove('skills-tab');
            btn_skills.innerHTML = "Skills";
            btn_skills.style.cssText = 
            "padding: 10px 20px;";
        }
    }
})

form_submit_btn.addEventListener('submit', (event)=> {
    console.log("send btn clicked!");

    event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.innerHTML = "Thank you for your message!";
        form.reset()
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });

})