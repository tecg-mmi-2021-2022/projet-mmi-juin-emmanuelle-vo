# Tetris

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
    - Le score du joueur augmente (multiplicateur)

### Règles supplémentaires

- Rajouter une touche qui fait descendre d’un coup une pièce
  - Ce qui rajoute du bonus au score (bonus qui dépend de la distance entre la pièce et le bas)
- Pour les experts, pouvoir commencer à un niveau désiré (donc une vitesse désirée)
- Lorsque 4 lignes sont complétées d’un coup(=tetris), ajouter un multiplicateur de score pour un nombre de temps
  - Si le multiplicateur tetris n’est pas encore terminé et que le joueur en fait un autre, le temps s’accumule ainsi que le multiplicateur
- Afficher le nombre de « tetris » que le joueur a fait en tout (encore bonus score?)
- Pouvoir mettre le jeu en pause (3 fois seulement)
