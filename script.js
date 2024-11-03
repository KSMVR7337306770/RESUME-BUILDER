function generateResume() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;

    const resume = `
        <h2>${name}</h2>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <h3>Education</h3>
        <p>${education}</p>
        <h3>Experience</h3>
        <p>${experience}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
    `;

    document.getElementById('resume').innerHTML = resume;
    document.getElementById('download-btn').style.display = 'block';
}

function downloadResume() {
    const element = document.createElement('a');
    const resumeContent = document.getElementById('resume').innerHTML;
    const file = new Blob([resumeContent], {type: 'text/html'});
    element.href = URL.createObjectURL(file);
    element.download = "resume.html";
    document.body.appendChild(element);
    element.click();
}