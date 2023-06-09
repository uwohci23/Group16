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


  var Messages = require('./Messages');
  var MiscUtils = require('./MiscUtils');

  function RCI(parentNode, eventSource, id) {
    if (arguments.length < 2)
      throw new Error('RCI constructor called with too few arguments ' + [].toString.apply(arguments));

    if (id === undefined)
      id = RCI.DEFAULT_ID;

    if (typeof(parentNode) === 'string') {
      var orig = parentNode;
      parentNode = $(MiscUtils.normaliseDOMid(parentNode));
      parentNode = parentNode.length === 0 ? null : parentNode[0];
      if (parentNode === null)
        throw new Error('Node ' + orig + ' not found');
    }

    // Each bar is 1 unit of padding wide, and there are 2 units
    // of padding between the 3 bars. There are 2 units of padding
    // either side. So 9 units of padding total
    // Each bar can be at most bucket rectangles tall, but we multiply
    // that by 2 as we can have positive and negative directions. There
    // should be 1 unit of padding either side. The text box in the middle
    // is 1 unit of padding
    this._padding = 3; // 3 rectangles in each bit of padding
    this._buckets = 10; // 0.2000 is scaled in to 10 buckets
    this._rectSize = 5; // Each rect is 5px
    this._scale = 100;

    this._canvas = $('<canvas></canvas>', {id: id})[0];

    // Remove any existing element with the same id
    var elems = $(MiscUtils.normaliseDOMid(id));
    var current = elems.length > 0 ? elems[0] : null;
    if (current !== null) {
      if (current.parentNode === parentNode)
        parentNode.replaceChild(this._canvas, current);
      else
        throw new Error('ID ' + id + ' already exists in document!');
    } else
      parentNode.appendChild(this._canvas);

    // We might be created before our container has appeared on screen
    this._initialisedBounds = false;

    eventSource.addEventListener(Messages.VALVES_UPDATED, this.update.bind(this));
  }


  RCI.prototype._clear = function(ctx) {
    ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
  };


  RCI.prototype._drawRect = function(ctx) {
    // The rect is inset by one unit of padding
    // and is the length of a bar plus a unit of padding down
    // It must accomodate 3 bars, 2 bits of internal padding
    // with padding either side
    var boxWidth = this._canvas.width - 20;
    var boxHeight = 25;

    var boxLeft = 0;
    var boxTop = (this._buckets + this._padding) * this._rectSize + 50;

    ctx.fillStyle = 'rgb(192, 192, 192)';
    ctx.beginPath();
    ctx.roundRect(boxLeft, boxTop, boxWidth, boxHeight, [5]);
    ctx.fill();
  };


  RCI.prototype._drawValue = function(ctx, index, value) {
    // Need to scale com and ind
    var percentageValue = (value + 2000) / 4000;
    if (index >= 1)
    {
      percentageValue = (value + 1500) / 3000;
    }

    var colours = ['rgb(0,255,0)', 'rgb(0, 0, 139)', 'rgb(255, 255, 0)'];
    var padValue = 15;
    var barHeightRect = Math.floor(percentageValue * this._scale) * 0.8;
    var barWidthRect = 25;
    var barStartY = (this._buckets + this._padding) * this._rectSize + 50 - barHeightRect;
    var barStartX = 17 + (index * (padValue + barWidthRect))

    ctx.fillStyle = colours[index];
    ctx.fillRect(barStartX, (barStartY), barWidthRect, barHeightRect);

    // add percentage label
    var textLeft = 17 + (index * (padValue + barWidthRect))
    ctx.font = 'bold xx-small sans-serif';
    if (index == 1 && percentageValue >= 0.2) 
    ctx.fillStyle = 'rgb(255, 255, 255)';
    else
      ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.textBaseline = 'bottom';
    var percentageValueStr = (percentageValue * 100).toFixed(0).toString();

    // special handling for 0%s, they have different spacing 
    if (percentageValue == 0)
      ctx.fillText(percentageValueStr, textLeft + 10, (this._buckets + 2 * this._padding) * this._rectSize + 30);
    else if (percentageValue > 0 && percentageValue < 1)
      ctx.fillText(percentageValueStr, textLeft + 8, (this._buckets + 2 * this._padding) * this._rectSize + 30);
    else
      ctx.fillText(percentageValueStr, textLeft + 5.5, (this._buckets + 2 * this._padding) * this._rectSize + 30);
  };

  RCI.prototype._drawLabel = function(ctx, index) {
    var labels = ["#residentialButton > img", "#commercialButton > img", "#industrialButton > img"];
    var padValue = 15;
    var barWidthRect = 25;
    var textLeft = 17 + (index * (padValue + barWidthRect))

    ctx.font = 'bold xx-small sans-serif';
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.textBaseline = 'bottom';
    ctx.drawImage(document.querySelector(labels[index]), textLeft + 2, (this._buckets + this._padding) * this._rectSize + 53, 20, 20);
  };

  RCI.prototype._drawTitle = function(ctx) {
    var textLeft = 2 *  + (2 * this._padding) + Math.floor(this._padding/2);
    ctx.font = 'bold 20px sans-serif';
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.textBaseline = 'bottom';
    ctx.fillText('Demand (%)', this._padding * this._rectSize,
                 (2 * this._padding) * this._rectSize - 10);
  };


  RCI.prototype.update = function(data) {
    if (!this._initialised) {
      // The canvas is assumed to fill its container on-screen
      var rect = this._canvas.parentNode.getBoundingClientRect();
      this._canvas.width = rect.width;
      this._canvas.height = rect.height;
      this._canvas.style.margin = '0';
      this._canvas.style.padding = '0';
      this._intialised = true;
    }

    var ctx = this._canvas.getContext('2d');
    this._clear(ctx);
    this._drawRect(ctx);

    var values = [data.residential, data.commercial, data.industrial];
    for (var i = 0; i < 3; i++) {
      this._drawValue(ctx, i, values[i]);
      this._drawLabel(ctx, i);
    }

    // add demand label
    this._drawTitle(ctx);
  };


  Object.defineProperty(RCI, 'DEFAULT_ID', MiscUtils.makeConstantDescriptor('RCICanvas'));

  return RCI;
});
