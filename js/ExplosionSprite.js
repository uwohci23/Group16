/* micropolisJS. Adapted by Graeme McCutcheon from Micropolis.
 *
 * This code is released under the GNU GPL v3, with some additional terms.
 * Please see the files LICENSE and COPYING for details. Alternatively,
 * consult http://micropolisjs.graememcc.co.uk/LICENSE and
 * http://micropolisjs.graememcc.co.uk/COPYING
 *
 */

define(function(require, exports, module) {
  "use strict";


  var BaseSprite = require('./BaseSprite');
  var Messages = require('./Messages');
  var MiscUtils = require('./MiscUtils');
  var Random = require('./Random');
  var SpriteConstants = require('./SpriteConstants');
  var SpriteUtils = require('./SpriteUtils');
  var Tile = require('./Tile');
  var TileUtils = require('./TileUtils');

  function ExplosionSprite(map, spriteManager, x, y) {
    this.init(SpriteConstants.SPRITE_EXPLOSION, map, spriteManager, x, y);
    this.width = 48;
    this.height = 48;
    this.xOffset = -24;
    this.yOffset = -24;
    this.frame = 1;
  }


  BaseSprite(ExplosionSprite);


  ExplosionSprite.prototype.startFire = function(x, y) {
    x = this.worldX;
    y = this.worldY;

    if (!this.map.testBounds(x, y))
      return;

    var tile = this.map.getTile(x, y);
    var tileValue = tile.getValue();

    if (!tile.isCombustible() && tileValue !== Tile.DIRT)
      return;

    if (tile.isZone())
      return;

    this.map.setTo(x, y, TileUtils.randomFire());
  };


  ExplosionSprite.prototype.move = function(spriteCycle, disasterManager, blockMaps) {
    if ((spriteCycle & 1) === 0) {
      if (this.frame === 1) {
        // Convert sprite coordinates to tile coordinates.
        var explosionX = this.worldX;
        var explosionY = this.worldY;
        this._emitEvent(Messages.SOUND_EXPLOSIONHIGH);
        this._emitEvent(Messages.EXPLOSION_REPORTED, {x: explosionX, y: explosionY});
      }

      this.frame++;
    }

    if (this.frame > 6) {
      this.frame = 0;

      this.startFire(this.x, this.y);
      this.startFire(this.x - 16, this.y - 16);
      this.startFire(this.x + 16, this.y + 16);
      this.startFire(this.x - 16, this.y + 16);
      this.startFire(this.x + 16, this.y + 16);
    }
  };


  // Metadata for image loading
  Object.defineProperties(ExplosionSprite,
    {ID: MiscUtils.makeConstantDescriptor(7),
     width: MiscUtils.makeConstantDescriptor(48),
     frames: MiscUtils.makeConstantDescriptor(6)});


  return ExplosionSprite;
});
