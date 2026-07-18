const button = document.getElementById('button');
const funfact = document.getElementById('funfact');

funfact.style.display = 'none';

button.addEventListener('click', function() {
   
   if (funfact.style.display === 'none'){
       funfact.style.display = 'block';
       button.textContent = 'Hide Fun Fact';
   } else {
       funfact.style.display = 'none';
       button.textContent = 'Fun Fact Button';
   }
});