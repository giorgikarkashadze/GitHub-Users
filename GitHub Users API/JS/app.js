const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const button = document.querySelector('button');
const submitColor = document.querySelector('.submitColor');
const link = "https://api.github.com/users/";
const submitBtn = document.getElementById("submitBtn");
const results = document.getElementById("container");


toggle.addEventListener('click', function() {
    toggle.classList.toggle("fa-moon")
        if(toggle.classList.contains("fa-moon")){
            toggle.style.color = 'black'
            body.style.background = 'white';
            body.style.color = 'black';
            body.style.transition = '2s';
            button.style.background = 'black';
            submitColor.style.color = 'white';
        }else{
            toggle.style.color = 'white'
            body.style.background = 'rgba(8, 14, 44, 1)';
            body.style.color = 'white';
            body.style.transition = '2s';
            button.style.background = 'white';
            submitColor.style.color = 'black';
        }
})

async function getUser() {
    let search = document.getElementById("userInput");
    try {

        if(container) {
            container.remove();
        }

        const response = await fetch(`https://api.github.com/users/${search.value}`)
        let data = await response.json();

        container = document.createElement('div');
        container.style.textAlign = 'center';
        container.id = 'container';
        

        let img = document.createElement('img');
        img.src = data.avatar_url;
        container.appendChild(img);


        let login = data.login
        let bio = data.bio;
        let paragraph = document.createElement('p');
        paragraph.id = 'container';
        document.body.appendChild(container);
        container.appendChild(paragraph);

    if(bio == null) {
        paragraph.textContent = `Bio: ${login} does not have Bio. `
    }else{
        paragraph.textContent = `Bio: ${bio}`;
    }

        console.log(data)
    }catch(error) {
        console.log(error);
    }
    
}

submitBtn.addEventListener('click', () => {
    getUser();
})