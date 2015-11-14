/* global config */

angular
  .module('myApp')
  .constant('CLOUDS', ['box', 'dropbox', 'drive'])
  .constant('CONFIG', config)
  .constant('STATE', {
    'general': 'general'
  });
