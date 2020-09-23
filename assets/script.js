window.addEventListener('DOMContentLoaded', (event) => {
    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene);
});

let pop1 = document.getElementsByClassName('pop1')[0];
let pop2 = document.getElementsByClassName('pop2')[0];
let btn_skills = document.getElementById('btn-skills');
let btn_contact = document.getElementById('btn-contact');

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
        "width: 50px; height: 50px; z-index: 5"
    }
})