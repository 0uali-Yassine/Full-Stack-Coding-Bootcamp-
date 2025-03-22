(function(userName) {
    const welcomeDiv = document.getElementById('welcome');
    
    const welcomeMessage = document.createElement('div');
    welcomeMessage.id = 'user-info';
    welcomeMessage.innerHTML = `
        <img src="https://learn.geeks.institute/static/theme/images/avatars/home-profile.jpg"> 
        <span>Welcome, ${userName}!</span>
    `;
    
    welcomeDiv.appendChild(welcomeMessage);
})('Yassine'); 