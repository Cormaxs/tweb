document.addEventListener('DOMContentLoaded', () => {
  const dropdown = document.querySelector('.dropdown');
  const sublist = document.querySelector('.sublist');
  const aparece = document.querySelector('.aparece');
  const ulMain = document.querySelector('.ul-main');

  // Verificar la existencia de los elementos antes de agregar los event listeners
  if (dropdown) {
      dropdown.addEventListener('click', () => {
          if (sublist) {
              sublist.classList.toggle('hover');
              //console.log('Dropdown clicked, sublist toggled.');
          } else {
            // console.error('Sublist element not found.');
          }
      });
  } else {
      //console.error('Dropdown element not found.');
  }

  if (aparece) {
      aparece.addEventListener('click', () => {
          if (ulMain) {
              ulMain.classList.toggle('seve');
              //console.log('Aparece clicked, ulMain toggled.');
          } else {
             // console.error('ulMain element not found.');
          }
      });
  } else {
     // console.error('Aparece element not found.');
  }
});


