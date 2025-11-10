function toggleMenu(){const nav=document.getElementById('navMenu');nav.classList.toggle('show');}

document.addEventListener('DOMContentLoaded', function(){
  const form = document.querySelector('.cadastro-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const success = document.querySelector('.form-success');
      if(success){
        success.textContent = "Muito obrigado pela disposição e vontade de ser voluntario! Em breve entraremos em contato.";
        success.style.display = 'block';
        // hide after 5 seconds
        setTimeout(function(){
          success.style.opacity = '1';
          // fade out
          success.style.transition = 'opacity 0.6s';
          success.style.opacity = '0';
          setTimeout(function(){ success.style.display = 'none'; success.style.opacity = '1'; }, 600);
        }, 5000);
        form.reset();
      } else {
        alert("Muito obrigado pela disposição e vontade de ser voluntario! Em breve entraremos em contato.");
        form.reset();
      }
    });
  }
});
