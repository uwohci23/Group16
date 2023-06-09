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
  var ModalWindow = require('./ModalWindow');

  var SaveWindow = ModalWindow(function() {
    $(saveFormID).on('submit', submit.bind(this));
  });


  var saveFormID = '#saveForm';
  var saveOKID = '#saveOK';


  var submit = function(e) {
    e.preventDefault();
    this.close();
  };


  SaveWindow.prototype.close = function() {
    this._toggleDisplay();
    this._emitEvent(Messages.SAVE_WINDOW_CLOSED);
  };


  SaveWindow.prototype.open = function() {
    this._toggleDisplay();
    $(saveOKID).focus();
  };


  return SaveWindow;
});
