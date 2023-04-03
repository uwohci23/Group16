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
  var Text = require('./Text');

  // TODO L20N

  var EvaluationHeader = function(evalYes, evalProb, evalPopulation, evalMigration, evalValue, evalClass, evalLevel, evalScore, evalScoreDelta) {
    var evalYesSelector = MiscUtils.normaliseDOMid(evalYes);
    var evalProbSelector = MiscUtils.normaliseDOMid(evalProb);
    var evalPopulationSelector = MiscUtils.normaliseDOMid(evalPopulation);
    var evalMigrationSelector = MiscUtils.normaliseDOMid(evalMigration);
    var evalValueSelector = MiscUtils.normaliseDOMid(evalValue);
    var evalClassSelector = MiscUtils.normaliseDOMid(evalClass);
    var evalLevelSelector = MiscUtils.normaliseDOMid(evalLevel);
    var evalScoreSelector = MiscUtils.normaliseDOMid(evalScore);
    var evalScoreDeltaSelector = MiscUtils.normaliseDOMid(evalScoreDelta);

    return function(dataSource, initialValues) {
      $(evalYesSelector).text(initialValues.evalYes);
      $(evalProbSelector).text(initialValues.evalProb);
      $(evalPopulationSelector).text(initialValues.evalPopulation);
      $(evalMigrationSelector).text(initialValues.evalMigration);
      $(evalValueSelector).text(initialValues.evalValue);
      $(evalClassSelector).text(initialValues.evalClass);
      $(evalLevelSelector).text(initialValues.evalLevel);
      $(evalScoreSelector).text(initialValues.evalScore);
      $(evalScoreDeltaSelector).text(initialValues.evalScoreDelta);

      // Add the various listeners
      dataSource.addEventListener(Messages.APPROVAL_UPDATED, function(cityApproval) {
        $(evalYesSelector).text(cityApproval);
      });

      dataSource.addEventListener(Messages.PROBLEMS_UPDATED, function(problems) {
        $(evalProbSelector).text(problems);
      });

      dataSource.addEventListener(Messages.CLASSIFICATION_UPDATED, function(classification) {
        $(evalClassSelector).text(classification);
      });

      dataSource.addEventListener(Messages.POPULATION_UPDATED, function(population) {
        $(evalPopulationSelector).text(population);
      });

      dataSource.addEventListener(Messages.DELTAPOPULATION_UPDATED, function(migration) {
        $(evalMigrationSelector).text(migration);
      });

      dataSource.addEventListener(Messages.SCORE_UPDATED, function(score) {
        $(evalScoreSelector).text(score);
      });

      dataSource.addEventListener(Messages.DELTASCORE_UPDATED, function(deltaScore) {
        $(evalScoreDeltaSelector).text(deltaScore);
      });
      
      dataSource.addEventListener(Messages.EVAL_UPDATED, function(value) {
        $(evalValueSelector).text(value);
      });

    };
  };


  return EvaluationHeader;
});
