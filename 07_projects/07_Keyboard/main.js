const insert = document.getElementById('insert');

window.addEventListener('keydown', (event) => {
    // poori window pe hi lagaya hai event.
  insert.innerHTML = `
  <table>
    <tr>
        <th>Key</th>
        <th>KeyCode</th>
        <th>Code</th>
    </tr>
    <tr>
        <td>${event.key === ' ' ? 'Space' : event.key}</td> 
        <td>${event.keyCode}</td>
        <td>${event.code}</td>
    </tr>
    </table>`;
  // space mien problem ayigi to usko counter karne ke liye ik check lagalete hain.
});
