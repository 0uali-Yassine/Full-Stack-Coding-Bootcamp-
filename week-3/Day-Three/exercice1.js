 // Exercise 1: Change the article
 const article = document.querySelector('article');
 console.log(article.querySelector('h1'));

 const lastParagraph = article.querySelectorAll('p')[article.querySelectorAll('p').length - 1];
 lastParagraph.remove();

 const h2 = article.querySelector('h2');
 h2.addEventListener('click', () => {
     h2.style.backgroundColor = 'red';
 });

 const h3 = article.querySelector('h3');
 h3.addEventListener('click', () => {
     h3.style.display = 'none';
 });

 const button = document.querySelector('button');
 button.addEventListener('click', () => {
     const paragraphs = article.querySelectorAll('p');
     paragraphs.forEach(p => {
         p.style.fontWeight = 'bold';
     });
 });

 const h1 = article.querySelector('h1');
 h1.addEventListener('mouseover', () => {
     h1.style.fontSize = `${Math.floor(Math.random() * 101)}px`;
 });

 const secondParagraph = article.querySelectorAll('p')[1];
 secondParagraph.addEventListener('mouseover', () => {
     secondParagraph.classList.add('fade');
 });

 // Exercise 2: Work with forms
 const form = document.getElementById('myForm');
 const fname = document.getElementById('fname');
 const lname = document.getElementById('lname');
 const usersAnswer = document.querySelector('.usersAnswer');

        form.addEventListener('click', (e) => {
            e.preventDefault(); // Prevents the form from submitting

            const firstNameValue = fname.value;
            const lastNameValue = lname.value;
            console.log(firstNameValue)
            console.log(lastNameValue)

            if (firstNameValue && lastNameValue) {
                const liFname = document.createElement('li');
                liFname.textContent = firstNameValue;

                const liLname = document.createElement('li');
                liLname.textContent = lastNameValue;

                usersAnswer.appendChild(liFname);
                usersAnswer.appendChild(liLname);
            }
        });

 // Exercise 3: Transform the sentence
 let allBoldItems;

 function getBoldItems() {
     allBoldItems = document.querySelectorAll('strong');
 }

 function highlight() {
     allBoldItems.forEach(item => {
         item.style.color = 'blue';
     });
 }

 function returnItemsToDefault() {
     allBoldItems.forEach(item => {
         item.style.color = 'black';
     });
 }

 const paragraph = document.querySelector('.paraExercice3');
 paragraph.addEventListener('mouseover', () => {
     getBoldItems();
     highlight();
 });
 paragraph.addEventListener('mouseout', returnItemsToDefault);

 // Exercise 4: Volume of a sphere
 const radiusInput = document.getElementById('radius');
 const volumeInput = document.getElementById('volume');
 const submitButton = document.getElementById('MySecForm');

 submitButton.addEventListener('click', (e) => {
     e.preventDefault();

     const radius = parseFloat(radiusInput.value);
     if (!isNaN(radius)) {
         const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
         volumeInput.value = volume.toFixed(2);
     }
});