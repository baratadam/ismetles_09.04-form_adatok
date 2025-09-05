 const form = document.getElementById('adatForm');
const clearBtn = document.getElementById('clearData');

 function showData() {
      const data = JSON.parse(localStorage.getItem('felhasznaloAdatok'));
      if (data) {
        document.getElementById('outNev').textContent = data.nev;
        document.getElementById('outTelepules').textContent = data.telepules;
        document.getElementById('outIranyitoszam').textContent = data.iranyitoszam;
        document.getElementById('outKozterulet').textContent = data.kozterulet;
        document.getElementById('outHazszam').textContent = data.hazszam;
      }
    }
    
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const data = {
        nev: document.getElementById('nev').value,
        telepules: document.getElementById('telepules').value,
        iranyitoszam: document.getElementById('iranyitoszam').value,
        kozterulet: document.getElementById('kozterulet').value,
        hazszam: document.getElementById('hazszam').value
      };
      localStorage.setItem('felhasznaloAdatok', JSON.stringify(data));
      showData();
      form.reset();
    });
     
    clearBtn.addEventListener('click', function() {
      localStorage.removeItem('felhasznaloAdatok');
      showData();
    });
    
    showData();