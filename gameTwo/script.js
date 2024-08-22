const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');


const image = new Image();
image.src = './images/image.png'; 
const chien = {
    x: 100,
    y: 500,
    largeur: 64,
    hauteur: 64,
    frameX: 0, 
    frameY: 0,
    vitesse: 5,
    sautVitesse: 10,
    gravite: 0.5,
    enSaut: false,
    courir: false,
    largeurSprite: 64, 
    hauteurSprite: 64, 
    nbFrames: 4, 
    essais: 10 
};

// Obstacles (meubles)
const obstacles = [
    { x: 300, y: 540, largeur: 100, hauteur: 20 }, 
    { x: 500, y: 500, largeur: 80, hauteur: 20 } 
];

function dessinerChien() {
    ctx.drawImage(
        image,
        chien.frameX * chien.largeurSprite, chien.frameY * chien.hauteurSprite,
        chien.largeurSprite, chien.hauteurSprite,
        chien.x, chien.y,
        chien.largeur, chien.hauteur
    );
}

function dessinerObstacles() {
    ctx.fillStyle = 'brown';
    obstacles.forEach(obstacle => {
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.largeur, obstacle.hauteur);
    });
}

function mettreAJour() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Mettre à jour la position du chien
    if (chien.courir) {
        chien.x += chien.vitesse * 2; // Doubler la vitesse si en course
    } else {
        chien.x += chien.vitesse;
    }

    // Gestion de la gravité et du saut
    if (chien.enSaut) {
        chien.y -= chien.sautVitesse;
        chien.sautVitesse -= chien.gravite;
        if (chien.y >= 500) {
            chien.y = 500;
            chien.enSaut = false;
            chien.sautVitesse = 10; // Réinitialiser la vitesse de saut
        }
    }

    // Animation du chien
    chien.frameX = (chien.frameX + 1) % chien.nbFrames;

    // Vérifier les collisions
    verifierCollision();

    dessinerObstacles();
    dessinerChien();
    requestAnimationFrame(mettreAJour);
}

function verifierCollision() {
    obstacles.forEach(obstacle => {
        if (chien.x < obstacle.x + obstacle.largeur &&
            chien.x + chien.largeur > obstacle.x &&
            chien.y < obstacle.y + obstacle.hauteur &&
            chien.y + chien.hauteur > obstacle.y) {
            // Collision détectée
            chien.x -= chien.vitesse * 2; // Recule le chien pour éviter le chevauchement
            chien.essais--; // Réduire le nombre d'essais
            if (chien.essais <= 0) {
                alert("Game Over! Vous avez épuisé tous vos essais.");
                document.location.reload(); // Recharger la page pour redémarrer le jeu
            }
        }
    });
}

window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        chien.courir = true;
    }
    if (event.key === 'ArrowLeft') {
        chien.x -= chien.vitesse;
    }
    if (event.key === 'Space' && !chien.enSaut) {
        chien.enSaut = true;
        chien.sautVitesse = 10; // Réinitialiser la vitesse de saut
    }
});

window.addEventListener('keyup', (event) => {
    if (event.key === 'ArrowRight') {
        chien.courir = false;
    }
});

// Charger l'image et démarrer le jeu
image.onload = () => {
    mettreAJour();
};
