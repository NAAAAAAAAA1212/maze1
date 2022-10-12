info.onCountdownEnd(function () {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath5, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    game.splash("You Died", "Player tried to swim in the lava")
    game.over(false)
})
game.splash("開始")
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . c c c c c . . . . . . . . 
    . . c 1 1 1 1 1 c . . . . . . . 
    . . c 1 1 1 1 1 c . . . . . . . 
    . . c 1 1 1 1 1 c . . . . . . . 
    . . c 1 1 1 1 1 c . . . . . . . 
    . . c 1 1 1 1 1 c . . . . . . . 
    . . . c c c c c . . . . . . . . 
    . . . . . c . . . . . . . . . . 
    . . . . . c . . . . . . . . . . 
    . . c c c c c c c . . . . . . . 
    . . . . . c . . . . . . . . . . 
    . . . . c . c . . . . . . . . . 
    . . . c . . . c . . . . . . . . 
    . . c . . . . . c . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
tiles.setTilemap(tilemap`層級1`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleInsignia)
scene.cameraFollowSprite(mySprite)
info.startCountdown(60)
