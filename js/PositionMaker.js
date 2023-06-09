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


  var Direction = require('./Direction');

  function PositionMaker(width, height) {
    if (arguments.length < 2)
      throw new Error('PositionMaker called with too few arguments ' + [].toString.apply(arguments));

    if (typeof(width) !== 'number' || typeof(height) !== 'number')
      throw new Error('PositionMaker called with invalid width or height ' + [].toString.apply(arguments));

    if (width < 0 || height < 0)
      throw new Error('PositionMaker called with out-of-bounds width or height ' + [].toString.apply(arguments));

    function isNumber(param) {
      return typeof(param) === 'number';
    }

    var validDirs = [Direction.NORTH, Direction.NORTHEAST, Direction.EAST, Direction.SOUTHEAST,
                     Direction.SOUTH, Direction.SOUTHWEST, Direction.WEST, Direction.NORTHWEST,
                     Direction.INVALID];

    function isDirection(param) {
      return isNumber(param) && validDirs.indexOf(param) !== -1;
    }


    var Position = function(pos, deltaX, deltaY) {
      if (arguments.length === 0) {
        this.x = 0;
        this.y = 0;
        return this;
      }

      // This overloaded constructor accepts the following parameters
      // Position(x, y) - positive integral coordinates
      // Position(Position p) - assign from existing position
      // Position(Position p, Direction d) - assign from existing position and move in direction d
      // Position(Position p, deltaX, deltaY) - assign from p and then adjust x/y coordinates
      // Check for the possible combinations of arguments, and error out for invalid arguments
      if (arguments.length === 1 && !(pos instanceof Position))
        throw new Error('Position constructor called with invalid pos ' + pos);

      if (arguments.length === 3 && !(pos instanceof Position))
        throw new Error('Position constructor called with invalid pos ' + pos);

      if (arguments.length === 3 && !(isNumber(deltaX) && isNumber(deltaY)))
        throw new Error('Position constructor called with invalid deltas ' + deltaX + ' ' + deltaY);

      if (arguments.length === 2 && isNumber(pos) && !isNumber(deltaX))
        throw new Error('Position constructor called with invalid y coordinate ' + pos + ' ' + deltaX);

      if (arguments.length === 2 && (pos instanceof Position) && !(isNumber(deltaX) && isDirection(deltaX)))
        throw new Error('Position constructor called with invalid direction ' + pos + ' ' + deltaX);

      if (arguments.length === 2 && !isNumber(pos) && !(pos instanceof Position))
        throw new Error('Position constructor called with bad existing position ' + pos + ' ' + deltaX);

      var moveOK = true;
      if (isNumber(pos)) {
        // Coordinates
        this.x = pos;
        this.y = deltaX;
      } else {
        this._assignFrom(pos);

        if (arguments.length === 2)
          moveOK = this.move(deltaX);
        else if (arguments.length === 3) {
          this.x += deltaX;
          this.y += deltaY;
        }
      }

      if (this.x < 0 || this.x >= width || this.y < 0 || this.y >= height)
        throw new Error('Position constructed with bad bounds ' + this + ' ' + deltaX + ' ' + deltaY);
      if (!moveOK)
        throw new Error('Position did not move correctly ' + this + ' ' + deltaX + ' ' + deltaY);
    };


    Position.prototype._assignFrom = function(from) {
      this.x = from.x;
      this.y = from.y;
    };


    Position.prototype.toString = function() {
      return 'Position (' + this.x + ', ' + this.y + ')';
    };


    Position.prototype.toInt = function() {
      return this.y * width + this.x;
    };


    Position.prototype.move = function(dir) {
      switch (dir) {
        case Direction.INVALID:
          return true;
        case Direction.NORTH:
          if (this.y > 0) {
            this.y--;
            return true;
          }
          break;
        case Direction.NORTHEAST:
          if (this.y > 0 && this.x < width - 1) {
            this.y--;
            this.x++;
            return true;
          }
          break;
        case Direction.EAST:
          if (this.x < width - 1) {
            this.x++;
            return true;
          }
          break;
        case Direction.SOUTHEAST:
          if (this.y < height - 1 && this.x < width - 1) {
            this.x++;
            this.y++;
            return true;
          }
          break;
        case Direction.SOUTH:
          if (this.y < height - 1) {
            this.y++;
            return true;
          }
          break;
        case Direction.SOUTHWEST:
          if (this.y < height - 1 && this.x > 0) {
            this.y++;
            this.x--;
            return true;
          }
          break;
        case Direction.WEST:
          if (this.x > 0) {
            this.x--;
            return true;
          }
          break;
        case Direction.NORTHWEST:
          if (this.y > 0 && this.x > 0) {
            this.y--;
            this.x--;
            return true;
          }
          break;
      }
      return false;
    };


    return Position;
  }


  return PositionMaker;
});
