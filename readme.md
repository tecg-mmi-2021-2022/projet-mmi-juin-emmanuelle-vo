# Tetris

## Jeu

[Lien](https://hepl-mmi-2021-2022.github.io/projet-mmi-juin-emmanuelle-vo/)

## Description

> Tetris a été conçu par Alekseï Pajitnov en 1984 sur Elektronika 60.
Il a été édité plusieurs fois au cours du temps.
Il a été principalement exploité par Nintendo jusqu'en 1996 où la société The Tetris Company s'y est approprié les droits.

## Règles du jeu

- Tetris est principalement composé d'un champ de jeu où des pièces de formes différentes (= tétrominos) descendent du haut de l'écran
- Le joueur peut uniquement déplacer les tétrominos latéralement et leur faire effectuer une rotation sur elles-mêmes jusqu'à ce qu'elles touchent le bas du champs de jeu ou une pièce déjà placée.
- Il peut également accélérer la descente des pièces.
- Le but pour le joueur est de réaliser le plus de lignes possibles.
- Une fois une ligne complétée, elle disparaît, et les blocs placés au-dessus chutent d'un rang.
- Lorsqu'un tétrimino dépasse le haut du champ de jeu et et empêche l'arrivée de tétriminos supplémentaires, la partie se termine.
- Le joueur obtient un score, qui dépend essentiellement du nombre de lignes réalisées lors de la partie
  - Eliminer plusieurs lignes d'un coup rapporte des points de bonus
- Au fur et à mesure que le joueur complète des lignes, son niveau augmente ainsi que la vitesse de chute des pièces.

## Règles du jeu à reprendre/adapter

- Créer un champ de jeu
- Créer un état de jeu (start-play-over)
- Faire chuter les pièces du haut vers le bas
- Déplacer gauche-droite les pièces et les faire accélérer ainsi que leur faire faire une rotation en utilisant les touches du clavier
- Si une pièce dépasse le haut du champ de jeu, la partie se termine
- Quand une ligne est complétée, elle disparait, et les blocs placés au-dessus chutent d'un rang
- Quand une ligne est complétée, le score du joueur augmente
    - Une ligne : +10
    - 2 lignes : +20
    - 3 lignes : +30
    - 4 lignes : +40
- Au fur et à mesure que le joueur complète des lignes, son niveau augmente ainsi que la vitesse de chute des pièces
  - A chaque 10 lignes complétées :
    - Le niveau augmente de 1
    - La vitesse de chute augmente
    - Le score du joueur augmente

## TODO List

- [ x ] Créer un background statique
- [ x ] Créer un bouton start
- [ x ] Créer un score, level, et le nombre de lignes complétées
- [ x ] Créer un champ de jeu
- [ x ] Créer une grille

- [ x ] Créer une interface 
- [ x ] Créer une classe parent

- Créer un tétromino (statique)
- [ x ] Pièce aléatoirement

- Détecter les collisions
- [ ] Pièce et champ de jeu
- [ ] Pièce et pièce

- GameController
- [ x ] Pouvoir se déplacer gauche-droite
- [ ] Pouvoir se déplacer vers le bas avec une vitesse plus grande
- [ ] Pouvoir faire une rotation
- 
- Lignes complétées
- [ ] Quand une ligne est complétée, elle disparait, et les blocs placés au-dessus chutent d'un rang
- [ ] Quand une ligne est complétée, le score du joueur augmente
- [ ] Après x lignes, le niveau augmente et la vitesse aussi et le score aussi


- Game State
- [ ] Start
- [ ] Playing
- [ ] Game Over

- Son
- [ ] Ajouter un son lorsqu'une ligne est complétée


Tutoriel(s) que j'ai suivi : 