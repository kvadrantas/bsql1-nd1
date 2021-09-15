const body = document.getElementById('body');
const checkbox1 = document.getElementById('checkbox1');
const checkbox2 = document.getElementById('checkbox2');
const row = document.getElementById('row');
const content = document.getElementById('content');

row.classList.add('hide');
content.classList.add('hide');

const button = document.getElementById('button');


// patikrintiSutikima

checkbox1.addEventListener('click', function() {
    if (checkbox1.checked) {
        row.classList.remove('hide');
    }
})

button.addEventListener('click', function() {
    if (checkbox1.checked && checkbox2.checked) {
        document.querySelector('.content').innerHTML = `
        UŽDAVINYS:<br>
        - rodomas valstybės kodas ir klabos pavadinimas;<br>
        - atrenkamos tik oficialios klabos prasidedančios raidėmis 'd', 'e' ir 'f';<br>
        - surūšiuota pagal valstybės kodą didėjimo ir panaudojimo procentą mažėjimo tvarka.<br><br>

        ATSAKYMAS:<br>
        SELECT countrycode as Valstybes_kodas, language as Kalbos_pavadinimas<br>
        FROM world.countrylanguage<br>
        where isofficial = 'T' and (language like 'd%' or language like 'e%' or language like 'f%')<br>
        order by countrycode asc, percentage desc<br>
        `;
        body.classList.add('animation');
        content.classList.remove('hide');
    }
});