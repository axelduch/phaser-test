
class PreloadState {

  preload() {
    this.preloadBar = this.game.add.sprite(
      this.world.centerX,
      this.world.centerY,
      'preload')

    this.preloadBar.anchor.set(.5)

    this.load.setPreloadSprite(this.preloadBar)

    this.load.image('logo', 'img/logo.png')
    this.load.image('blood', 'img/blood.png')
    this.load.image('pnlogo', 'img/need_healing.png')
    this.load.audio('death', 'audio/genji-death.ogg')
    this.load.audio('intro', 'audio/genji-here.ogg')
    this.load.audio('healing', 'audio/i-need-healing.mp3')
  }

  create() {
    this.state.start('MainMenu')
  }

  update() { }
  render() { }
}

module.exports = PreloadState
