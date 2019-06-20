player.onChat("start", function () {
    player.teleport(positions.create(0, 0, 0))
    agent.teleportToPlayer()
})
player.onTeleported(function () {
    blocks.fill(
        Block.Cobblestone,
        positions.create(3, -1, 3),
        positions.create(-3, -1, -3),
        FillOperation.Replace
    )
})
player.onDied(function () {
    blocks.fill(
        blocks.block(Block.RedTulip),
        positions.create(2, 0, 2),
        positions.create(-2, 0, -2),
        FillOperation.Replace
    )
})
player.onTravelled(TravelMethod.Walk, function () {
    blocks.place(Block.YellowFlower, positions.create(0, 0, 0))
})
player.onChat("Home", function () {
    agent.setItem(Block.PolishedAndesite, 64, 1)
    agent.setSlot(1)
    agent.move(SixDirection.Forward, 5)
    for (let i = 0; i < 4; i++) {
        agent.turn(TurnDirection.Right)
        for (let i = 0; i < 3; i++) {
            agent.place(SixDirection.Left)
        }
        agent.move(SixDirection.Forward, 1)
    }
})
