function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var contact = document.getElementById("contact");
    var about = document.getElementById("about");
    var memberBtn = document.getElementById("memberBtn");
    var skillsBtn = document.getElementById("skillsBtn");
    var contactBtn = document.getElementById("contactBtn");
    var aboutBtn = document.getElementById("aboutBtn");
    member.style.display = "block";
    skills.style.display = "none";
    contact.style.display = "none";
    about.style.display = "none";
    memberBtn.style.backgroundColor = "#333";
    skillsBtn.style.backgroundColor = "#555";
    contactBtn.style.backgroundColor = "#555";
    aboutBtn.style.backgroundColor = "#555";
}