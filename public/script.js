 const form = document.getElementById('adatForm');
const clearBtn = document.getElementById('clearData');
 function showData() {
      const data = JSON.parse(localStorage.getItem('felhasznaloAdatok'));
      if (data) {
        document.getElementById('outNev').textContent = data.nev || '-';
        document.getElementById('outTelepules').textContent = data.telepules || '-';
        document.getElementById('outIranyitoszam').textContent = data.iranyitoszam || '-';
        document.getElementById('outKozterulet').textContent = data.kozterulet || '-';
        document.getElementById('outHazszam').textContent = data.hazszam || '-';
      } else {
        document.getElementById('outNev').textContent = '-';
        document.getElementById('outTelepules').textContent = '-';
        document.getElementById('outIranyitoszam').textContent = '-';
        document.getElementById('outKozterulet').textContent = '-';
        document.getElementById('outHazszam').textContent = '-';
      }
    }