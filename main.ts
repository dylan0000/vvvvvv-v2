function sprite () {
    spriteImage = [img`
. . . . . . . . . . . . . . . . 
. . . . 5 5 5 5 . . . . . . . . 
. . . 5 5 5 5 5 5 . . . . . . . 
. . . 5 5 . 5 . 5 . . . . . . . 
. . . 5 5 5 5 5 5 . . . . . . . 
. . . 5 5 . . . 5 . . . . . . . 
. . . . 5 5 5 5 . . . . . . . . 
. . . . . 5 5 . . . . . . . . . 
. . . . 5 5 5 5 . . . . . . . . 
. . . 5 5 5 5 5 5 . . . . . . . 
. . . 5 . 5 5 . 5 . . . . . . . 
. . . 5 . 5 5 . 5 . . . . . . . 
. . . . 5 5 5 5 . . . . . . . . 
. . . . 5 . . 5 . . . . . . . . 
. . . 5 5 . . 5 5 . . . . . . . 
. . . 5 5 . . 5 5 . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . 2 2 2 2 . . . . . . . . 
. . . 2 2 2 2 2 2 . . . . . . . 
. . . 2 2 . 2 . 2 . . . . . . . 
. . . 2 2 2 2 2 2 . . . . . . . 
. . . 2 2 . . . 2 . . . . . . . 
. . . . 2 2 2 2 . . . . . . . . 
. . . . . 2 2 . . . . . . . . . 
. . . . 2 2 2 2 . . . . . . . . 
. . . 2 2 2 2 2 2 . . . . . . . 
. . . 2 . 2 2 . 2 . . . . . . . 
. . . 2 . 2 2 . 2 . . . . . . . 
. . . . 2 2 2 2 . . . . . . . . 
. . . . 2 . . 2 . . . . . . . . 
. . . 2 2 . . 2 2 . . . . . . . 
. . . 2 2 . . 2 2 . . . . . . . 
`]
    mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . 6 6 6 6 . . . . . . . . 
. . . 6 6 6 6 6 6 . . . . . . . 
. . . 6 6 . 6 . 6 . . . . . . . 
. . . 6 6 6 6 6 6 . . . . . . . 
. . . 6 6 . . . 6 . . . . . . . 
. . . . 6 6 6 6 . . . . . . . . 
. . . . . 6 6 . . . . . . . . . 
. . . . 6 6 6 6 . . . . . . . . 
. . . 6 6 6 6 6 6 . . . . . . . 
. . . 6 . 6 6 . 6 . . . . . . . 
. . . 6 . 6 6 . 6 . . . . . . . 
. . . . 6 6 6 6 . . . . . . . . 
. . . . 6 . . 6 . . . . . . . . 
. . . 6 6 . . 6 6 . . . . . . . 
. . . 6 6 . . 6 6 . . . . . . . 
`, SpriteKind.Player)
    controller.moveSprite(mySprite, 100, 0)
}
let mySprite: Sprite = null
let spriteImage: Image[] = []
sprite()
