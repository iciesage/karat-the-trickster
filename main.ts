namespace SpriteKind {
    export const Fragment = SpriteKind.create()
    export const Fire = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.setGameOverEffect(false, effects.melt)
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.setGameOverEffect(true, effects.dissolve)
    game.gameOver(true)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Icie.vy == 0) {
        Icie.vy = -160
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Fire, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    Spirit = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    Spirit,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 4 . . . . . . . . . . . 
        . . 4 . . . . . . . . . . . . . 
        . . . . . . . . . 4 . . . . . . 
        . . . . . 4 . . . . . . . . . . 
        . . . . 4 4 4 . . . . . . . . . 
        . . . 4 4 5 4 4 . . . . 4 . . . 
        . . 4 4 5 5 5 4 4 . . . . . . . 
        . . 4 5 f 5 f 5 4 . . . . . . . 
        . . 4 4 5 5 5 4 4 . . . . . . . 
        . . . 4 4 4 4 4 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . 4 . . . 4 . . . . . . . . . . 
        . . . . . . . . . 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 4 . . . . . . . . . . 
        . . . . 4 4 4 . . . . . . . . . 
        . . . 4 4 5 4 4 . . . . . . . . 
        . . 4 4 5 5 5 4 4 . . 4 . . . . 
        . . 4 5 f 5 f 5 4 . . . . . . . 
        . . 4 4 5 5 5 4 4 . . . . . . . 
        . . . 4 4 4 4 4 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 4 . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 4 . . . . . . 4 . . . . . . 
        . . . . . 4 . . . . . . . . . . 
        . . . . 4 4 4 . . . . . . . . . 
        . . . 4 4 5 4 4 . . . 4 . . . . 
        . . 4 4 5 5 5 4 4 . . . . . . . 
        . . 4 5 f 5 f 5 4 . . . . . . . 
        . . 4 4 5 5 5 4 4 . . . . . . . 
        . . . 4 4 4 4 4 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
    Spirit.setPosition(Icie.x + 80, Icie.y + 80)
    Spirit.follow(Icie)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Fragment, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    if (Icie.y > otherSprite.y) {
        info.changeScoreBy(1)
    } else {
        info.changeLifeBy(-1)
    }
})
let Spirit: Sprite = null
let fire_spirit: Sprite = null
let Icie: Sprite = null
scene.setBackgroundColor(9)
Icie = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . 1 . . . 
    . . . . . . . . . . . . 1 1 1 . 
    . . . . . . . . . . . . 1 1 9 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    . . . . 1 1 1 1 1 1 1 1 1 1 . . 
    . . . . 1 1 1 1 1 1 1 1 1 . . . 
    . . . . 1 . 1 . . . 1 . 1 . . . 
    . . . . 1 . 1 . . . 1 . 1 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Icie, 100, 0)
tiles.setCurrentTilemap(tilemap`level1`)
Icie.ay = 350
scene.cameraFollowSprite(Icie)
info.setLife(5)
for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
    fire_spirit = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . c c c . . . . . . . . . 
        . . c c c c c c c . . . . . . . 
        . c c c c c c c c c . . . . . . 
        . c c c 5 c 5 c c c . . . . . . 
        . c c c c c c c c c . . . . . . 
        . c 5 c c c c c 5 c . . . . . . 
        . c c 5 c c c 5 c c . . . . . . 
        . . c c 5 5 5 c c . . . . . . . 
        . . . c c c c c . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Fragment)
    animation.runImageAnimation(
    fire_spirit,
    [img`
        . . . . . . . . . . . . . . . . 
        . . c c c c c c c . . . . . . . 
        . c c c c c c c c c . . . . . . 
        c c c c c c c c c c c . . . . . 
        c c c 5 c c c 5 c c c . . . . . 
        c c c 5 c c c 5 c c c . . . . . 
        c c c c c c c c c c c . . . . . 
        c 5 c c c c c c c 5 c . . . . . 
        c c 5 c c c c c 5 c c . . . . . 
        c c c 5 c c c 5 c c c . . . . . 
        . c c c 5 5 5 c c c . . . . . . 
        . . c c c c c c c . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . c c c c c c c . . . . . . . 
        . c c c c c c c c c . . . . . . 
        c c c c c c c c c c c . . . . . 
        c c c a c c c a c c c . . . . . 
        c c c 5 c c c 5 c c c . . . . . 
        c c c c c c c c c c c . . . . . 
        c a c c c c c c c a c . . . . . 
        c c 5 c c c c c 5 c c . . . . . 
        c c c 5 c c c 5 c c c . . . . . 
        . c c c 5 5 5 c c c . . . . . . 
        . . c c c c c c c . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . c c c c c c c . . . . . . . 
        . c c c c c c c c c . . . . . . 
        c c c c c c c c c c c . . . . . 
        c c c c c c c c c c c . . . . . 
        c c c a c c c a c c c . . . . . 
        c c c c c c c c c c c . . . . . 
        c a c c c c c c c a c . . . . . 
        c c a c c c c c a c c . . . . . 
        c c c 5 c c c 5 c c c . . . . . 
        . c c c 5 5 5 c c c . . . . . . 
        . . c c c c c c c . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . c c c c c c c . . . . . . . 
        . c c c c c c c c c . . . . . . 
        c c c c c c c c c c c . . . . . 
        c c c c c c c c c c c . . . . . 
        c c c c c c c c c c c . . . . . 
        c c c c c c c c c c c . . . . . 
        c a c c c c c c c a c . . . . . 
        c c a c c c c c a c c . . . . . 
        c c c a c c c a c c c . . . . . 
        . c c c a a a c c c . . . . . . 
        . . c c c c c c c . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . c c c c c c c . . . . . . . 
        . c c c c c c c c c . . . . . . 
        c c c c c c c c c c c . . . . . 
        c c c c c c c c c c c . . . . . 
        c c c a c c c a c c c . . . . . 
        c c c c c c c c c c c . . . . . 
        c a c c c c c c c a c . . . . . 
        c c a c c c c c a c c . . . . . 
        c c c 5 c c c 5 c c c . . . . . 
        . c c c 5 5 5 c c c . . . . . . 
        . . c c c c c c c . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . c c c c c c c . . . . . . . 
        . c c c c c c c c c . . . . . . 
        c c c c c c c c c c c . . . . . 
        c c c a c c c a c c c . . . . . 
        c c c 5 c c c 5 c c c . . . . . 
        c c c c c c c c c c c . . . . . 
        c a c c c c c c c a c . . . . . 
        c c 5 c c c c c 5 c c . . . . . 
        c c c 5 c c c 5 c c c . . . . . 
        . c c c 5 5 5 c c c . . . . . . 
        . . c c c c c c c . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . c c c c c c c . . . . . . . 
        . c c c c c c c c c . . . . . . 
        c c c c c c c c c c c . . . . . 
        c c c 5 c c c 5 c c c . . . . . 
        c c c 5 c c c 5 c c c . . . . . 
        c c c c c c c c c c c . . . . . 
        c 5 c c c c c c c 5 c . . . . . 
        c c 5 c c c c c 5 c c . . . . . 
        c c c 5 c c c 5 c c c . . . . . 
        . c c c 5 5 5 c c c . . . . . . 
        . . c c c c c c c . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
    tiles.placeOnTile(fire_spirit, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
    fire_spirit = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . e e 4 4 e e . . . . . . 
        . . e e e e 4 e e e e e . . . . 
        . e e e e e 4 e e e e e e . . . 
        e e e e e 4 e e e e e e e e . . 
        `, SpriteKind.Fire)
    tiles.placeOnTile(fire_spirit, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
game.onUpdate(function () {
    Icie.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . 1 . . . 
        . . . . . . . . . . . . 1 1 1 . 
        . . . . . . . . . . . . 1 1 6 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        . . . . 1 1 1 1 1 1 1 1 1 1 . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 . 1 . . . 1 . 1 . . . 
        . . . . 1 . 1 . . . 1 . 1 . . . 
        `)
    if (Icie.vy < 0) {
        Icie.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . 1 . . . . 
            . . . . . . . . . . . 1 1 1 . . 
            . . . . . . . . . . . 1 1 6 1 . 
            . . . 1 . . . . . . 1 1 1 1 1 1 
            . . . 1 . . . . . . 1 1 1 1 1 . 
            . . 1 1 . . . . . 1 1 1 . . . . 
            . . 1 . . . . . . 1 1 1 1 1 1 1 
            . . 1 . . . . . 1 1 1 1 . . . . 
            . . 1 1 . . . 1 1 1 1 1 1 1 1 . 
            . . . 1 1 1 1 1 1 1 1 . . . . . 
            . . . . . . . . 1 1 1 . . . . . 
            . . . . . . . 1 1 . 1 . . . . . 
            . . . . . . . 1 . . 1 . . . . . 
            . . . . . . . 1 . . . . . . . . 
            `)
    } else if (Icie.vy > 0) {
        Icie.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . . . 1 . . . . . . . . . 
            . . . . . 1 1 . . . . . . . . . 
            . . . . . 1 . . . . . . . . . . 
            . . . . . 1 . . . . . . . . . . 
            . . . . . 1 1 . . . . . . . . . 
            . . . . 1 1 1 1 . . . . . . . . 
            . . . . 1 1 1 1 1 . . . . . . . 
            . . . . 1 . 1 1 1 1 . . 1 . . . 
            . . . . 1 . 1 1 1 1 1 1 1 1 1 . 
            . . . . 1 . 1 . 1 1 1 1 1 1 6 1 
            . . . . . . . . 1 1 1 1 1 1 1 1 
            . . . . . . . . 1 . 1 . . . . . 
            . . . . . . . . 1 . 1 . . . . . 
            . . . . . . . . 1 . 1 1 . . . . 
            `)
    } else if (false) {
        Icie.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . 1 . . . 
            . . . . . . . . . . . . 1 1 1 . 
            . . . . . . . . . . . . 1 1 6 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            . . . . 1 1 1 1 1 1 1 1 1 1 . . 
            . . . . 1 1 1 1 1 1 1 1 1 . . . 
            . . . . 1 1 . . . . . 1 1 . . . 
            . . . . 1 1 . . . . . 1 1 . . . 
            `)
    } else if (Icie.x % 2 == 0) {
        Icie.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . 1 . . . 
            . . . . . . . . . . . . 1 1 1 . 
            . . . . . . . . . . . . 1 1 6 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            . . . . 1 1 1 1 1 1 1 1 1 1 . . 
            . . . . 1 1 1 1 1 1 1 1 1 . . . 
            . . . . 1 1 . . . . . 1 1 . . . 
            . . . . 1 1 . . . . . 1 1 . . . 
            `)
    } else {
    	
    }
    if (Icie.vx < 0) {
        Icie.image.flipX()
    }
})
