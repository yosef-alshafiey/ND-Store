document.querySelector('.menu-icon').addEventListener('click', function() {
    const menu = document.querySelector('.pages ul');
    if (menu.style.display === 'flex') {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'flex';
    }
  });

  let cartButtons = document.querySelectorAll('.cart');

  cartButtons.forEach(button => {
      button.addEventListener('click', () => {
          window.alert("Product Was Added");
      });
  });


  
