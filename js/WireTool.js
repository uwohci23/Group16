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


  var ConnectingTool = require('./ConnectingTool');
  var Tile = require('./Tile');
  var TileUtils = require('./TileUtils');

  var WireTool = ConnectingTool(function(map) {
    this.init(5, map, true, true);
  });


  WireTool.prototype.layWire = function(x, y) {
    this.doAutoBulldoze(x, y);
    var cost = this.toolCost;

    var tile = this._worldEffects.getTileValue(x, y);
    tile = TileUtils.normalizeRoad(tile);

    switch (tile) {
      case Tile.DIRT:
        this._worldEffects.setTile(x, y, Tile.LHPOWER, Tile.CONDBIT | Tile.BURNBIT | Tile.BULLBIT);
        break;

      case Tile.RIVER:
      case Tile.REDGE:
      case Tile.CHANNEL:
        cost = 25;

        if (x < this._map.width - 1) {
          tile = this._worldEffects.getTile(x + 1, y);
          if (tile.isConductive()) {
            tile = tile.getValue();
            tile = TileUtils.normalizeRoad(tile);
            if (tile != Tile.HROADPOWER && tile != Tile.RAILHPOWERV && tile != Tile.HPOWER) {
              this._worldEffects.setTile(x, y, Tile.VPOWER, Tile.CONDBIT | Tile.BULLBIT);
              break;
            }
          }
        }

        if (x > 0) {
          tile = this._worldEffects.getTile(x - 1, y);
          if (tile.isConductive()) {
            tile = tile.getValue();
            tile = TileUtils.normalizeRoad(tile);
            if (tile != Tile.HROADPOWER && tile != Tile.RAILHPOWERV && tile != Tile.HPOWER) {
              this._worldEffects.setTile(x, y, Tile.VPOWER, Tile.CONDBIT | Tile.BULLBIT);
              break;
            }
          }
        }

        if (y < this._map.height - 1) {
          tile = this._worldEffects.getTile(x, y + 1);
          if (tile.isConductive()) {
            tile = tile.getValue();
            tile = TileUtils.normalizeRoad(tile);
            if (tile != Tile.VROADPOWER && tile != Tile.RAILVPOWERH && tile != Tile.VPOWER) {
              this._worldEffects.setTile(x, y, Tile.HPOWER, Tile.CONDBIT | Tile.BULLBIT);
              break;
            }
          }
        }

        if (y > 0) {
          tile = this._worldEffects.getTile(x, y - 1);
          if (tile.isConductive()) {
            tile = tile.getValue();
            tile = TileUtils.normalizeRoad(tile);
            if (tile != Tile.VROADPOWER && tile != Tile.RAILVPOWERH && tile != Tile.VPOWER) {
              this._worldEffects.setTile(x, y, Tile.HPOWER, Tile.CONDBIT | Tile.BULLBIT);
              break;
            }
          }
        }

        return this.TOOLRESULT_FAILED;

      case Tile.ROADS:
        this._worldEffects.setTile(x, y, Tile.HROADPOWER, Tile.CONDBIT | Tile.BURNBIT | Tile.BULLBIT);
        break;

      case Tile.ROADS2:
        this._worldEffects.setTile(x, y, Tile.VROADPOWER, Tile.CONDBIT | Tile.BURNBIT | Tile.BULLBIT);
        break;

      case Tile.LHRAIL:
        this._worldEffects.setTile(x, y, Tile.RAILHPOWERV, Tile.CONDBIT | Tile.BURNBIT | Tile.BULLBIT);
        break;

      case Tile.LVRAIL:
        this._worldEffects.setTile(x, y, Tile.RAILVPOWERH, Tile.CONDBIT | Tile.BURNBIT | Tile.BULLBIT);
        break;

      default:
        return this.TOOLRESULT_FAILED;
    }

    this.addCost(cost);
    this.checkZoneConnections(x, y);
    return this.TOOLRESULT_OK;
  };


  WireTool.prototype.doTool = function(x, y, blockMaps) {
    this.result = this.layWire(x, y);
  };


  return WireTool;
});
