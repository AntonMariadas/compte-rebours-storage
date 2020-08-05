const buttonStart = document.querySelector('.button-start');
const buttonReset = document.querySelector('.button-reset');
const buttonSave = document.querySelector('.button-save');

const compteur = document.querySelector('.compteur');

let interval;
let valeurInitiale = compteur.value;

const startCompteur = () => {
    interval = setInterval(decrementerCompteur, 1000);
    valeurInitiale = compteur.value;
    buttonStart.disabled = true
}

const resetCompteur = () => {
    compteur.value = valeurInitiale;
    clearInterval(interval);
    buttonStart.disabled = false;
    updateProgressBar(valeurInitiale, valeurInitiale);
}

const decrementerCompteur = () => {
    console.log('Décrémenter compteur')
    if (compteur.value > 0) {
        compteur.value = parseInt(compteur.value) - 1;
    } else {
        clearInterval(interval);
        buttonStart.disabled = false
    }
    updateProgressBar(compteur.value, valeurInitiale)
}

const updateProgressBar = (valeurCourante, valeurInit) => {
    const progres = valeurCourante / valeurInit * 100;
    const pourcentageProgress = progres + '%';
    const barre = document.querySelector('.progress');
    barre.style.width = pourcentageProgress;
}

const sauvegarderValeur = () => {
    console.log('On va sauvegarder la valeur')
    window.localStorage.setItem('valeurCompteur', compteur.value);
}

const restaurerValeur = () => {
    compteur.value = window.localStorage.getItem('valeurCompteur');
}

buttonStart.addEventListener('click', startCompteur);
buttonReset.addEventListener('click', resetCompteur);
buttonSave.addEventListener('click', sauvegarderValeur);

restaurerValeur();
// window.localStorage.removeItem('valeurCompteur');
// window.localStorage.clear();