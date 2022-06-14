export const settings = {
    gameClock : 1000,
    rows : 20,
    cols: 10,
    blockSize: 30,
    scoreWorth: 10,
    initialScore: 0,
    initialLines: 0,
    initialLevel: 1,
    level: 1000,

    shapes: [
        [],
        [
            [0,0,0,0],
            [1,1,1,1],
            [0,0,0,0],
            [0,0,0,0]
        ],

        [
            [2,0,0],
            [2,2,2],
            [0,0,0],
        ],

        [
            [0,0,3],
            [3,3,3],
            [0,0,0],
        ],

        [
            [4,4],
            [4,4],
        ],

        [
            [0,5,5],
            [5,5,0],
            [0,0,0],
        ],

        [
            [0,6,0],
            [6,6,6],
            [0,0,0],
        ],

        [
            [7,7,0],
            [0,7,7],
            [0,0,0],
        ],
    ],

    colors: [
        '#FFFFFF',
        '#FF0000',
        '#00FF00',
        '#0000FF',
        '#FFFF00',
        '#00FFFF',
        '#ff7f00',
        '#800080',
    ]

}