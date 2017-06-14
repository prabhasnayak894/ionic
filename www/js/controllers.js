angular.module('starter.controllers', [])
	.controller('AppCtrl', function($scope, $ionicModal, $timeout, $cordovaSocialSharing, $ionicModal) {

		// With the new view caching in Ionic, Controllers are only called
		// when they are recreated or on app start, instead of every page change.
		// To listen for when this page is active (for example, to refresh data),
		// listen for the $ionicView.enter event:
		//$scope.$on('$ionicView.enter', function(e) {
		//});
		$scope.share = function() {
			$cordovaSocialSharing.share('This app allowed  me to understand Acupressure and how to use it to get immediate relief from my health issues.', 'Acupressure App', null, 'https://play.google.com/store/apps/details?id=com.ionicframework.accupressure953650');
		};

		$scope.langs = [{
			"id": "en",
			"title": "English"
		}, {
			"id": "hi",
			"title": "Hindi"
		}, {
			"id": "ma",
			"title": "Marathi"
		}];

		$scope.lang = ( window.localStorage.getItem('lang') == null ) ? 'en' : window.localStorage.getItem('lang');

		$ionicModal.fromTemplateUrl('change-lang.html', {
			scope: $scope,
			animation: 'slide-in-up'
		}).then(function(modal) {
			$scope.modal_lang = modal;
		});
		$scope.openLangModal = function() {
			$scope.modal_lang.show();
		};
		$scope.closeLangModal = function() {
			$scope.modal_lang.hide();
		};

		$scope.selectLang = function(lang) {
			$scope.lang = lang;
			window.localStorage.setItem('lang', $scope.lang);
			$scope.modal_lang.hide();
			$scope.$broadcast('change_lang', true)
		};
	})

	.controller('LinksCtrl', function($scope, $ionicScrollDelegate, $ionicModal, $location, $ionicPush, $http){
		
		$scope.getData = function(){
			$http.get('./js/content/links/content_' + $scope.lang + '.json')
				.success(function(response){ 
					$scope.content = response;
					$scope.error = false;
				})
				.error(function(){
					$scope.error = true;
				});
		};

		$scope.$on('change_lang', function() {
			$scope.getData()
		}, true);

		$scope.goToPage = function(link) {
			$location.path("app/" + link);
		};

		$scope.$on('cloud:push:notification', function(event, data) {
			var msg = data.message;
			alert(msg.title + ': ' + msg.text);
		});

		var three_perc_div = (3 / window.innerHeight) * 100
		var height_div = (window.innerHeight - 110) - (three_perc_div * 2)
		$scope.button_height = (height_div / 3) - 15;

		$scope.getData();
	})

	.controller('QueryCtrl', function($scope, $ionicScrollDelegate, $ionicModal, $timeout, $location, $http){
		$scope.getData = function(){
			$http.get('./js/content/query/content_' + $scope.lang + '.json')
				.success(function(response){ 
					$scope.content = response;
					$scope.error = false;
				})
				.error(function(){
					$scope.error = true;
				});
		};

		$scope.$on('change_lang', function() {
			$scope.getData()
		}, true);

		$scope.points = '';
		$scope.point_detail_id = '';

		$scope.getQueryResult = function(query) {
			if (query.trim() == '') {
				return false;
			};
			$scope.points = '';
			$scope.point_detail_id = '';
			var results = [];
			for (var key in $scope.content.points) {
				var point = $scope.content.points[key];
				if (point.description.toLowerCase().indexOf(query.toLowerCase()) > -1) {
					results.push({
						"id": key,
						"title": point.title,
						"description": point.description
					});
				} else {
					for (var i = 0; i < point.associated_with.length; i++) {
						var keyword = point.associated_with[i];
						if (keyword.toLowerCase().indexOf(query.toLowerCase()) > -1) {
							results.push({
								"id": key,
								"title": point.title,
								"description": point.description
							});
						};
					};
				};
				
			};
			return results;	
		};

		$scope.showPoints = function(callback) {
			$scope.points = callback.item;
			$location.hash('tab_head_query');
			$ionicScrollDelegate.anchorScroll();
			$scope.showSection(0, true);
		};

		$scope.cancelAutoComplete = function(callback) {
			$scope.points = '';
			$scope.query = '';
		};

		$scope.showCommonPoints = function(point) {
			$scope.points = {
				"id": point.id
			};
			$location.hash('tab_head_query');
			$ionicScrollDelegate.anchorScroll();
			$scope.showSection(0, true);
		};

		$scope.showPointDetail = function(point_id) {
			$scope.point_detail_id = point_id;
			$scope.modal.show();		
		};

		$ionicModal.fromTemplateUrl('my-modal.html', {
			scope: $scope,
			animation: 'slide-in-up'
		}).then(function(modal) {
			$scope.modal = modal;
		});
		$scope.openModal = function() {
			$scope.modal.show();
		};
		$scope.closeModal = function() {
			$scope.modal.hide();
		};

		$scope.current_tab = 0;

		$scope.showSection = function(index, reload) {
			$timeout(function(){
				$scope.current_tab = index;
				$scope.$broadcast('load_image', true);

				if(reload) {
					$scope.showSection(index, false);
				}
			}, 100);
		};

		$scope.getData();
	})

	.controller('ScienceCtrl', function($scope, $http) {

		$scope.getData = function(){
			$http.get('./js/content/science/content_' + $scope.lang + '.json')
				.success(function(response){ 
					$scope.content = response;
					$scope.error = false;
				})
				.error(function(){
					$scope.error = true;
				});
		};

		$scope.$on('change_lang', function() {
			$scope.getData()
		}, true);
		
		$scope.current_div = 0;

		$scope.showDiv = function(index) {
			$scope.current_div = index;
		}

		$scope.getData();
	})

	.controller('FeaturesCtrl', function($scope, $http) {
		
		$scope.getData = function(){
			$http.get('./js/content/features/content_' + $scope.lang + '.json')
				.success(function(response){ 
					$scope.content = response;
					$scope.error = false;
				})
				.error(function(){
					$scope.error = true;
				});
		};

		$scope.$on('change_lang', function() {
			$scope.getData()
		}, true);

		$scope.current_div = 0;
		
		$scope.showDiv = function(index) {
			$scope.current_div = index;
		}

		$scope.getData();
	})

	.controller('InstrumentsCtrl', function($scope, $http) {
		
		$scope.getData = function(){
			$http.get('./js/content/instruments/content_' + $scope.lang + '.json')
				.success(function(response){ 
					$scope.content = response;
					$scope.error = false;
				})
				.error(function(){
					$scope.error = true;
				});
		};

		$scope.$on('change_lang', function() {
			$scope.getData()
		}, true);

		$scope.current_div = 0;
		
		$scope.showDiv = function(index) {
			$scope.current_div = index;
		}

		$scope.getData();
	})

	.controller('FaqsCtrl', function($scope, $http) {

		$scope.getData = function(){
			$http.get('./js/content/faqs/content_' + $scope.lang + '.json')
				.success(function(response){ 
					$scope.content = response;
					$scope.error = false;
				})
				.error(function(){
					$scope.error = true;
				});
		};

		$scope.$on('change_lang', function() {
			$scope.getData()
		}, true);
		
		$scope.current_div = 0;
		
		$scope.showDiv = function(index) {
			$scope.current_div = index;
		}

		$scope.getData();
	})

	.controller('InfoCtrl', function($scope, $http) {
		$scope.getData = function(){
			$http.get('./js/content/info/content_' + $scope.lang + '.json')
				.success(function(response){ 
					$scope.content = response;
					$scope.error = false;
				})
				.error(function(){
					$scope.error = true;
				});
		};

		$scope.$on('change_lang', function() {
			$scope.getData()
		}, true);

		$scope.getData();
	})

	.controller('ZodiacCtrl', function($state, $scope, $ionicModal, $timeout, $ionicScrollDelegate, $location, $http) {
		$scope.sign = '';
		$scope.points = '';
		$scope.point_detail_id = '';

		$scope.getData = function(reload){
			$http.get('./js/content/query/content_' + $scope.lang + '.json')
				.success(function(response){ 
					$scope.sign = '';
					$scope.content = response;
					$scope.error = false;
				})
				.error(function(){
					$scope.error = true;
				});
			if(reload) {
				$state.reload();
			}
		};

		$scope.$on('change_lang', function() {
			$scope.getData(true)
		}, true);

		$scope.showPoints = function(point) {
			$scope.points = {
				"id": point
			};
			$location.hash('tab_head_zodiac');
			$ionicScrollDelegate.anchorScroll();
			$scope.showSection(0, true);
		};

		$scope.showPointDetail = function(point_id) {
			$scope.point_detail_id = point_id;
			$scope.modal.show();		
		};

		$ionicModal.fromTemplateUrl('my-modal-zodiac.html', {
			scope: $scope,
			animation: 'slide-in-up'
		}).then(function(modal) {
			$scope.modal = modal;
		});
		$scope.openModal = function() {
			$scope.modal.show();
		};
		$scope.closeModal = function() {
			$scope.modal.hide();
		};

		$scope.current_tab = 0;

		$scope.showSection = function(index, reload) {
			$timeout(function(){
				$scope.current_tab = index;
				$scope.$broadcast('load_image_zodiac', true);

				if(reload) {
					$scope.showSection(index, false);
				}
			}, 100);
		};

		$scope.resetPage = function() {
			$scope.points = '';
		};

		$scope.getData(false);

	})

	.directive('mapHighlight', ['$timeout', function($timeout) {
		return {
			restrict: 'A',
			link: function($scope, iElm, iAttrs, controller) {
				$scope.$on('load_image', function() {
					$(iElm).css('visibility', 'hidden');
					$timeout(function(){
						$(iElm).find('map').imageMapResize();
						$(iElm).find('img.points-image').maphilight({
							'fill': true,
							'fillColor': 'ff0000',
							'fillOpacity': 0.8,
							'stroke': true,
							'strokeColor': 'ff0000',
							'strokeOpacity': 0.5,
							'strokeWidth': 0,
							'fade': true,
							'alwaysOn': true,
							'shadow': true,
							'shadowRadius': 6,
							'shadowColor': 'ff0000',
							'shadowOpacity': 0.8,
							'shadowPosition': 'outside'
						});
					}, 100);
					$timeout(function(){
						$(iElm).css('visibility', 'visible');
					}, 400);
				}, true);
			}
		};
	}])
	.directive('mapHighlightZodiac', ['$timeout', function($timeout) {
		return {
			restrict: 'A',
			link: function($scope, iElm, iAttrs, controller) {
				$scope.$on('load_image_zodiac', function() {
					$(iElm).css('visibility', 'hidden');
					$timeout(function(){
						$(iElm).find('map').imageMapResize();
						$(iElm).find('img.points-image').maphilight({
							'fill': true,
							'fillColor': 'ff0000',
							'fillOpacity': 0.8,
							'stroke': true,
							'strokeColor': 'ff0000',
							'strokeOpacity': 0.5,
							'strokeWidth': 0,
							'fade': true,
							'alwaysOn': true,
							'shadow': true,
							'shadowRadius': 6,
							'shadowColor': 'ff0000',
							'shadowOpacity': 0.8,
							'shadowPosition': 'outside'
						});
					}, 100);
					$timeout(function(){
						$(iElm).css('visibility', 'visible');
					}, 400);
				}, true);
			}
		};
	}]);
