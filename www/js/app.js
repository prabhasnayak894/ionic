// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngCordova', 'starter.controllers', 'ion-autocomplete', 'ionic.cloud'])

.run(function($ionicPlatform, $ionicPush) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    /*var push = new Ionic.Push({
      "debug": true
    });
 
    push.register(function(token) {
      console.log("My Device token:",token.token);
      push.saveToken(token);  // persist the token in the Ionic Platform
    });*/

    /*$ionicPush.register().then(function(t) {
        alert('Token start:', t.token);
        return $ionicPush.saveToken(t);
      }).then(function(t) {
        alert('Token saved:', t.token);
      }, function(error){
        alert(error)
      });*/
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicCloudProvider) {
  $ionicCloudProvider.init({
    "core": {
      "app_id": "42ff4747"
    },
    "push": {
      "sender_id": "821852756736",
      "pluginConfig": {
        "ios": {
          "badge": true,
          "sound": true
        },
        "android": {
          "iconColor": "#343434"
        }
      }
    }
  });
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.links', {
    url: '/links',
    views: {
      'menuContent': {
        templateUrl: 'templates/links.html',
        controller: 'LinksCtrl'
      }
    }
  })

  .state('app.query', {
    cache: false,
    url: '/query',
    views: {
      'menuContent': {
        templateUrl: 'templates/query.html',
        controller: 'QueryCtrl'
      }
    }
  })

  .state('app.science', {
    url: '/science',
    views: {
      'menuContent': {
        templateUrl: 'templates/science.html',
        controller: 'ScienceCtrl'
      }
    }
  })

  .state('app.features', {
    url: '/features',
    views: {
      'menuContent': {
        templateUrl: 'templates/features.html',
        controller: 'FeaturesCtrl'
      }
    }
  })

  .state('app.instruments', {
    url: '/instruments',
    views: {
      'menuContent': {
        templateUrl: 'templates/instruments.html',
        controller: 'InstrumentsCtrl'
      }
    }
  })

  .state('app.faqs', {
    url: '/faqs',
    views: {
      'menuContent': {
        templateUrl: 'templates/faqs.html',
        controller: 'FaqsCtrl'
      }
    }
  })

  .state('app.info', {
    url: '/info',
    views: {
      'menuContent': {
        templateUrl: 'templates/info.html',
        controller: 'InfoCtrl'
      }
    }
  })

  .state('app.zodiac', {
    cache: false,
    url: '/zodiacsigns',
    views: {
      'menuContent': {
        templateUrl: 'templates/zodiac.html',
        controller: 'ZodiacCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/links');
});
