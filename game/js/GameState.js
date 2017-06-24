class GameState {

  preload() { }

  create() {
    let pnlogo = this.add.sprite(
      this.world.centerX * 1.5,
      this.world.centerY,
      'pnlogo')

    pnlogo.anchor.set(.5)

    this.sprite = pnlogo
    this.sprite.scale.x = 0.3
    this.sprite.scale.y = 0.3
    this.physics.startSystem(Phaser.Physics.P2JS)
    this.physics.p2.gravity.y = 1000
    this.physics.p2.restitution = 0.98

    this.physics.p2.enable(this.sprite)

    this.emitter = this.createEmitter()

    this.input.onTap.add(this.reset, this)

    this.sprite.body.onBeginContact.add(function (block, blockB, shapeA, shapeB, equation) {
      let emitter = this.emitter
      emitter.setYSpeed(-this.sprite.body.velocity.y * 4)
      emitter.setXSpeed(-1000 + Math.random() * 1000)

      emitter.setScale(0.02, 0.2, 0.01, 0.2)
      emitter.x = this.sprite.x / emitter.scale.x
      emitter.y = this.sprite.y / emitter.scale.y

      emitter.start(true, 4000, null, 50)

      if (Math.random() <= 0.2) {
        this.game.sound.play('death')
      } else {
        this.game.sound.play('healing')
      }

      this.sprite.body.angularVelocity += Math.random() * 3 - 1.5
    }, this)
  }


  reset() {
      this.destroyEmitter()
      this.emitter = this.createEmitter()
      this.sprite.body.x = this.world.centerX * 1.5,
      this.sprite.body.y = this.world.centerY
  }

  update() {
  }


  render() {
  }


  createEmitter() {
    let emitter = this.add.emitter(this.sprite.x, this.sprite.y)
    emitter.maxParticles = 500
    emitter.gravity = 1000
    emitter.makeParticles('blood')
    emitter.setAlpha(0.4, 1)

    return emitter
  }


  destroyEmitter() {
    this.emitter.destroy()
  }

}

module.exports = GameState