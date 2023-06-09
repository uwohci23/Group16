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


  var MiscUtils = require('./MiscUtils');

  var messageData = {
    AUTOBUDGET_CHANGED: MiscUtils.makeConstantDescriptor('Autobudget changed'),
    APPROVAL_UPDATED: MiscUtils.makeConstantDescriptor('Approval changed'),
    BUDGET_NEEDED: MiscUtils.makeConstantDescriptor('User needs to budget'),
    BUDGET_REQUESTED: MiscUtils.makeConstantDescriptor('Budget window requested'),
    BUDGET_WINDOW_CLOSED: MiscUtils.makeConstantDescriptor('Budget window closed'),
    BLACKOUTS_REPORTED: MiscUtils.makeConstantDescriptor('Blackouts reported'),
    CLASSIFICATION_UPDATED: MiscUtils.makeConstantDescriptor('Classification updated'),
    CONGRATS_SHOWING: MiscUtils.makeConstantDescriptor('Congratulations showing'),
    CONGRATS_WINDOW_CLOSED: MiscUtils.makeConstantDescriptor('Congratulations window closed'),
    DATE_UPDATED: MiscUtils.makeConstantDescriptor('Date changed'),
    DEBUG_WINDOW_REQUESTED: MiscUtils.makeConstantDescriptor('Debug Window Requested'),
    DEBUG_WINDOW_CLOSED: MiscUtils.makeConstantDescriptor('Debug Window Closed'),
    DISASTER_REQUESTED: MiscUtils.makeConstantDescriptor('Disaster Requested'),
    DISASTER_WINDOW_CLOSED: MiscUtils.makeConstantDescriptor('Disaster window closed'),
    EARTHQUAKE: MiscUtils.makeConstantDescriptor('Earthquake'),
    EVAL_REQUESTED: MiscUtils.makeConstantDescriptor('Evaluation Requested'),
    EVAL_UPDATED: MiscUtils.makeConstantDescriptor('Evaluation Updated'),
    EVAL_WINDOW_CLOSED: MiscUtils.makeConstantDescriptor('Eval window closed'),
    EXPLOSION_REPORTED: MiscUtils.makeConstantDescriptor('Explosion Reported'),
    FIRE_REPORTED: MiscUtils.makeConstantDescriptor('Fire!'),
    FIRE_STATION_NEEDS_FUNDING: MiscUtils.makeConstantDescriptor('Fire station needs funding'),
    FLOODING_REPORTED: MiscUtils.makeConstantDescriptor('Flooding reported'),
    FRONT_END_MESSAGE: MiscUtils.makeConstantDescriptor('Front-end Message'),
    FUNDS_CHANGED: MiscUtils.makeConstantDescriptor('Total funds has changed'),
    HEAVY_TRAFFIC: MiscUtils.makeConstantDescriptor('Total funds has changed'),
    HELICOPTER_CRASHED: MiscUtils.makeConstantDescriptor('Helicopter crashed'),
    HIGH_CRIME: MiscUtils.makeConstantDescriptor('High crime'),
    HIGH_POLLUTION: MiscUtils.makeConstantDescriptor('High pollution'),
    MONSTER_SIGHTED: MiscUtils.makeConstantDescriptor('Monster sighted'),
    NAG_WINDOW_CLOSED: MiscUtils.makeConstantDescriptor('Nag window closed'),
    NEED_AIRPORT: MiscUtils.makeConstantDescriptor('Airport needed'),
    NEED_ELECTRICITY: MiscUtils.makeConstantDescriptor('More power needed'),
    NEED_FIRE_STATION: MiscUtils.makeConstantDescriptor('Fire station needed'),
    NEED_MORE_COMMERCIAL: MiscUtils.makeConstantDescriptor('More commercial zones needed'),
    NEED_MORE_INDUSTRIAL: MiscUtils.makeConstantDescriptor('More industrial zones needed'),
    NEED_MORE_RAILS: MiscUtils.makeConstantDescriptor('More railways needed'),
    NEED_MORE_RESIDENTIAL: MiscUtils.makeConstantDescriptor('More residential needed'),
    NEED_MORE_ROADS: MiscUtils.makeConstantDescriptor('More roads needed'),
    NEED_POLICE_STATION: MiscUtils.makeConstantDescriptor('Police station needed'),
    NEED_SEAPORT: MiscUtils.makeConstantDescriptor('Seaport needed'),
    NEED_STADIUM: MiscUtils.makeConstantDescriptor('Stadium needed'),
    NO_MONEY: MiscUtils.makeConstantDescriptor('No money'),
    NOT_ENOUGH_POWER: MiscUtils.makeConstantDescriptor('Not enough power'),
    NUCLEAR_MELTDOWN: MiscUtils.makeConstantDescriptor('Nuclear Meltdown'),
    PLANE_CRASHED: MiscUtils.makeConstantDescriptor('Plane crashed'),
    POLICE_NEEDS_FUNDING: MiscUtils.makeConstantDescriptor('Police need funding'),
    PROBLEMS_UPDATED: MiscUtils.makeConstantDescriptor('Problems updated'),
    POPULATION_UPDATED: MiscUtils.makeConstantDescriptor('Population updated'),
    DELTAPOPULATION_UPDATED: MiscUtils.makeConstantDescriptor('Delta Population updated'),
    QUERY_WINDOW_CLOSED: MiscUtils.makeConstantDescriptor('Query window closed'),
    QUERY_WINDOW_NEEDED: MiscUtils.makeConstantDescriptor('Query window needed'),
    REACHED_CAPITAL: MiscUtils.makeConstantDescriptor('Now a capital'),
    REACHED_CITY: MiscUtils.makeConstantDescriptor('Now a city'),
    REACHED_METROPOLIS: MiscUtils.makeConstantDescriptor('Now a metropolis'),
    REACHED_MEGALOPOLIS: MiscUtils.makeConstantDescriptor('Now a megalopolis'),
    REACHED_TOWN: MiscUtils.makeConstantDescriptor('Now a town'),
    REACHED_VILLAGE: MiscUtils.makeConstantDescriptor('Now a village'),
    ROAD_NEEDS_FUNDING: MiscUtils.makeConstantDescriptor('Roads need funding'),
    SAVE_REQUESTED: MiscUtils.makeConstantDescriptor('Save requested'),
    SAVE_WINDOW_CLOSED: MiscUtils.makeConstantDescriptor('Save window closed'),
    SCORE_UPDATED: MiscUtils.makeConstantDescriptor('Score updated'),
    DELTASCORE_UPDATED: MiscUtils.makeConstantDescriptor('Delta Score updated'),
    SCREENSHOT_LINK_CLOSED: MiscUtils.makeConstantDescriptor('Screenshot link closed'),
    SCREENSHOT_WINDOW_CLOSED: MiscUtils.makeConstantDescriptor('Screenshot window closed'),
    SCREENSHOT_WINDOW_REQUESTED: MiscUtils.makeConstantDescriptor('Screenshot window requested'),
    SETTINGS_WINDOW_CLOSED: MiscUtils.makeConstantDescriptor('Settings window closed'),
    SETTINGS_WINDOW_REQUESTED: MiscUtils.makeConstantDescriptor('Settings window requested'),
    SHIP_CRASHED: MiscUtils.makeConstantDescriptor('Shipwrecked'),
    SOUND_EXPLOSIONHIGH: MiscUtils.makeConstantDescriptor('Explosion! Bang!'),
    SOUND_EXPLOSIONLOW: MiscUtils.makeConstantDescriptor('Explosion! Bang!'),
    SOUND_HEAVY_TRAFFIC: MiscUtils.makeConstantDescriptor('Heavy Traffic sound'),
    SOUND_HONKHONK: MiscUtils.makeConstantDescriptor('HonkHonk sound'),
    SOUND_MONSTER: MiscUtils.makeConstantDescriptor('Monster sound'),
    SPEED_CHANGE: MiscUtils.makeConstantDescriptor('Speed change'),
    SPRITE_DYING: MiscUtils.makeConstantDescriptor('Sprite dying'),
    SPRITE_MOVED: MiscUtils.makeConstantDescriptor('Sprite move'),
    TAX_TOO_HIGH: MiscUtils.makeConstantDescriptor('Tax too high'),
    TOOL_CLICKED: MiscUtils.makeConstantDescriptor('Tool clicked'),
    UNDO_CLICKED: MiscUtils.makeConstantDescriptor('Undo clicked'),
    TORNADO_SIGHTED: MiscUtils.makeConstantDescriptor('Tornado sighted'),
    TOUCH_WINDOW_CLOSED: MiscUtils.makeConstantDescriptor('Touch Window closed'),
    TRAFFIC_JAMS: MiscUtils.makeConstantDescriptor('Traffic jams reported'),
    TRAIN_CRASHED: MiscUtils.makeConstantDescriptor('Train crashed'),
    VALVES_UPDATED: MiscUtils.makeConstantDescriptor('Valves updated'),
    WELCOME: MiscUtils.makeConstantDescriptor('Welcome to micropolisJS')
  };

  var Messages = Object.defineProperties({}, messageData);

  var disasterMessages = [Messages.EARTHQUAKE, Messages.EXPLOSION_REPORTED, Messages.FIRE_REPORTED,
                          Messages.FLOODING_REPORTED, Messages.MONSTER_SIGHTED, Messages.NUCLEAR_MELTDOWN,
                          Messages.TORNADO_SIGHTED];
  Object.defineProperty(Messages, 'disasterMessages', MiscUtils.makeConstantDescriptor(disasterMessages));

  var crashes = [Messages.HELICOPTER_CRASHED, Messages.PLANE_CRASHED, Messages.SHIP_CRASHED, Messages.TRAIN_CRASHED];
  Object.defineProperty(Messages, 'crashes', MiscUtils.makeConstantDescriptor(crashes));


  return Messages;
});
