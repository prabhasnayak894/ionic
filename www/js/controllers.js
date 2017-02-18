angular.module('starter.controllers', [])
  .controller('AppCtrl', function($scope, $ionicModal, $timeout) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});
  })

  .controller('LinksCtrl', function($scope, $ionicScrollDelegate, $ionicModal, $location) {
    $scope.content = {
      "query": {
        "title": "Search",
        "description": "You can also search for specific health related problems and get to know its healing points below."
      },
      "science": {
        "title": "Science",
        "description": "Welcome to the world of <b>Acupressure</b> points on hands and feet. Learn the science behind it by clicking below"
      },
      "features": {
        "title": "Features",
        "description": "There are various advantages of <b>Acupressure</b>. Understand the various features and good things about it by clicking below"
      },
      "instruments": {
        "title": "Instruments",
        "description": "Inorder to apply appropriate pressure to your pressure points, you can use any one of the  intruments given in the link below."
      },
      "faqs": {
        "title": "FAQs",
        "description": "You can also go through our FAQs to get answers to your queries related to <b>Acupressure"
      },
      "zodiacsigns": {
        "title": "Zodiac Signs",
        "description": "check what your zodiac sign says about you health" //to be changed
      }
    };

    $scope.goToPage = function(link) {
      $location.path("app/" + link);
    };
  })

  .controller('QueryCtrl', function($scope, $ionicScrollDelegate, $ionicModal, $timeout) {
    $scope.points = '';
    $scope.point_detail_id = '';

    $scope.content = {
      "points": {
        "1": {
          "title": "Little toe",
          "description": "<p>Little toe is an energy center. When litte toe is pressed, the body gets charged with heat and we immediately obtain energy. It is helpful whenever sombody gets excessively tired or becomes unconsious.</p>",
          "associated_with": ["Energy center", "Energy", "tired", "Unconsious"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "poly",
              "value": "64, 121, 71, 124, 77, 130, 80, 137, 81, 148, 73, 145, 68, 138, 65, 130"
            }, {
              "type": "poly",
              "value": "42, 136, 46, 129, 50, 126, 54, 123, 54, 132, 53, 141, 51, 148, 47, 152, 42, 156, 41, 148, 40, 142"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "poly",
              "value": "348,100,357,110,361,122,360,134,350,125,346,112"
            }, {
              "type": "poly",
              "value": "335,97,324,105,319,116,319,124,330,116,336,107"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "poly",
              "value": "23,143,27,149,27,159,23,168,18,174,18,154"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "poly",
              "value": "370,126,375,138,376,152,369,145,367,134"
            }]
          }]
        },
        "2": {
          "title": "The web between the little toe and the fourth toe",
          "description": "<p>When pressure is applied to this web, the ear remains healthy.</p>",
          "associated_with": ["Ear", "Ear drums"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "93, 187, 13"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "305,161,13"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "79,283,18"
            }, {
              "type": "poly",
              "value": "48,142,46,156,49,165,57,171,55,155"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "318,257,14"
            }, {
              "type": "poly",
              "value": "346,126,349,134,348,144,339,152,340,135"
            }]
          }]
        },
        "3": {
          "title": "Web between the fourth and third(middle) toe and the fourth toe",
          "description": "Applying pressure to this web as well as the fourth toe helps maintain the eyes in good health and prevent using spectacles",
          "associated_with": ["Eye", "Eyesight", "Spectacles", "Sight"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "131, 157, 13"
            }, {
              "type": "poly",
              "value": "91, 72, 84, 82, 79, 94, 81, 110, 90, 100, 94, 85"
            }, {
              "type": "poly",
              "value": "103, 70, 104, 81, 109, 91, 121, 101, 118, 83"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "263,132,13"
            }, {
              "type": "poly",
              "value": "306,49,317,62,320,74,318,85,307,76,303,62"
            }, {
              "type": "poly",
              "value": "291,47,293,56,290,67,280,75,272,79,277,59"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "214,258,17"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "184,229,15"
            }]
          }]
        },
        "4": {
          "title": "Third toe",
          "description": "This is a very important toe from the perspective of maintaining the psychological balance. Apply pressure to this toe to get rid of diseases such as blood pressure, diabetes that are associated with mind, and to reduce other psychological ailments such as depression, madness, lust and jealousy. This toe is important for curing any injury and stopping bleeding.",
          "associated_with": ["Psychological wellbeing", "blood pressure", "diabetes", "stop bleeding", "Mental instability", "Mind", "Depression", "Madness", "Lust", "Jealousy"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "poly",
              "value": "149, 38, 150, 51, 157, 64, 166, 70, 166, 56, 159, 44"
            }, {
              "type": "poly",
              "value": "135, 40, 127, 52, 124, 67, 125, 78, 136, 65, 139, 54"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "poly",
              "value": "257, 20, 266, 27, 270, 35, 273, 45, 272, 56, 263, 50, 257, 40"
            }, {
              "type": "poly",
              "value": "244,20,243,35,237,45,227,51,229,34"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "poly",
              "value": "92,53,94,67,91,79,82,87,83,70"
            }, {
              "type": "poly",
              "value": "115,54,114,70,117,80,124,87,123,70"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "poly",
              "value": "304,49,310,58,313,70,313,76,303,66,301,55"
            }, {
              "type": "poly",
              "value": "281,50,284,57,281,70,273,78,274,65,276,56"
            }]
          }]
        },
        "5": {
          "title": "Web between third and the second toe",
          "description": "Applying pressure here increases the body resistance. Apply pressure to this point whenever there is any infection.",
          "associated_with": ["Energy that prevents diseases", "prevent diseases", "infection", "Improve immunity"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "175, 135, 13"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "216,114,13"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "142,262,19"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "257,237,15"
            }]
          }]
        },
        "6": {
          "title": "Second toe",
          "description": "This point is associated with neck and nose.",
          "associated_with": ["Neck", "Nose", "Stiff neck"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "198, 74, 13"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "191,55,15"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "poly",
              "value": "163,15,166,29,162,40,154,48,155,31"
            }, {
              "type": "poly",
              "value": "187,15,195,28,197,43,197,48,186,37,185,22"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "poly",
              "value": "237,17,243,25,246,42,237,35,235,25"
            }, {
              "type": "poly",
              "value": "215,17,218,26,207,43,208,28"
            }]
          }]
        },
        "7": {
          "title": "Second toe",
          "description": "This point is associated with sinus close to nose.",
          "associated_with": ["Sinus", "Sinus close to nose", "Sinus headache"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "poly",
              "value": "190, 17, 177, 32, 174, 49, 174, 58, 187, 51, 194, 32"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "poly",
              "value": "201,4,214,12,219,24,220,35,220,39,203,30,200,14"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "poly",
              "value": "240,52,242,65,237,77,228,85,232,62"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "poly",
              "value": "166,46,175,56,177,66,177,74,166,63,163,51"
            }]
          }]
        },
        "8": {
          "title": "Second toe",
          "description": "This point is associated with sinus close to eyes.",
          "associated_with": ["Sinus", "Sinus close to eyes", "Sinus headache"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "poly",
              "value": "205, 14, 205, 30, 207, 42, 222, 56, 224, 39, 217, 24"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "poly",
              "value": "187,3,188,19,182,33,170,40,171,19"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "poly",
              "value": "263,54,271,68,273,87,261,76,260,59"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "poly",
              "value": "145,48,147,60,144,70,135,76,136,63"
            }]
          }]
        },
        "9": {
          "title": "Web between the second toe and the big toe",
          "description": "This point is associated with throat related problems.",
          "associated_with": ["Throat", "Soar throat", "Throat itching"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "218, 140, 11"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "170,116,13"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "263,349,17"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "134,316,15"
            }]
          }]
        },
        "10": {
          "title": "Web between the second toe and the big toe",
          "description": "This point is associated with tonsisls related problems.",
          "associated_with": ["Tonsil"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "237, 142, 11"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "150,122,13"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "280,355,17"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "117,325,16"
            }]
          }]
        },
        "11": {
          "title": "Big toe",
          "description": "Big toe is associated with the head. On its inner side, meaning the side of the second toe, there are points associated with temple, ear and mumps.",
          "associated_with": ["Temple", "Ear", "Mumps", "Head"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "poly",
              "value": "238, 29, 246, 46, 245, 67, 239, 79, 229, 84, 229, 60, 232, 41"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "poly",
              "value": "155,18,147,33,146,46,149,59,161,68,164,42"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "poly",
              "value": "346,231,341,248,327,262,317,266,330,245"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "poly",
              "value": "56,203,73,219,83,235,68,229,59,216"
            }]
          }]
        },
        "12": {
          "title": "Big toe",
          "description": "This point is associated with  muscles of eyeball. It is helpful to those who are squint-eyed.",
          "associated_with": ["Eye Muscles", "Eye", "Squint eyed", "Eyeball"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "246, 25, 13"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "144,16,15"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "354,231,14"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "48,204,14"
            }]
          }]
        },
        "13": {
          "title": "Big toe",
          "description": "The outer side of the big toe has points associated with curvical spondylosis.",
          "associated_with": ["Curvical spondylosis", "spondylosis", "Curvical"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "poly",
              "value": "287, 11, 297, 30, 303, 54, 304, 86, 298, 109, 293, 122, 304, 127, 313, 97, 317, 65, 312, 41, 298, 17"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "poly",
              "value": "106,7,94,37,89,60,92,89,97,107,85,111,79,83,77,58,85,30"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "poly",
              "value": "376,233,365,250,356,272,350,295,352,310,356,313,368,275,379,246"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "poly",
              "value": "26,204,35,215,45,239,48,265,45,277,40,283,32,243,24,219"
            }]
          }]
        },
        "14": {
          "title": "Big toe",
          "description": "This point is associated with pineal and pitutary glands. In ailments such as insomnia, pain in the neck, apply pressure to this point.",
          "associated_with": ["Pineal gland", "Pitutary glands", "sleep", "Pineal", "Pitutary", "Insomnia", "Neck"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "poly",
              "value": "302, 59, 316, 57, 315, 86, 303, 86"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "poly",
              "value": "77,48,89,48,89,75,76,74"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "poly",
              "value": "361,257,372,262,362,291,351,286"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "poly",
              "value": "40,227,47,255,35,259,28,231"
            }]
          }]
        },
        "15": {
          "title": "Big toe",
          "description": "The root of the big toe(where it joins the feet) is also associated with neck",
          "associated_with": ["Joints of the neck", "neck"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "267, 129, 13"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "121,115,14"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "310,352,17"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "84,321,18"
            }]
          }]
        },
        "16": {
          "title": "Mound between the second and the third toe",
          "description": "This point is associated with lungs and thymus glands. This point is helpful in all ailments of children upto 12 years. This point is termed as God's point.",
          "associated_with": ["thymus glands", "Lungs", "thymus"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "176, 240, 11"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "215,218,16"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "214,333,17"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "182,304,17"
            }]
          }]
        },
        "16a": {
          "title": "Mound between the second and the third toe",
          "description": "This point is associated with pitta related ailment so also in dry cough.",
          "associated_with": ["Pitta"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "176, 258, 12"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "214,239,16"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "188,359,17"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "208,331,16"
            }]
          }]
        },
        "17": {
          "title": "Below fifth toe",
          "description": "This point is associated with outer portion of the shoulder.",
          "associated_with": ["Outer portion of the shoulder", "shoulder"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "poly",
              "value": "52, 211, 57, 215, 61, 224, 64, 238, 64, 258, 62, 275, 56, 283, 45, 285, 45, 259, 46, 238"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "poly",
              "value": "350,187,342,196,338,231,344,255,351,264,359,265,359,219"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "poly",
              "value": "28,336,35,343,44,365,44,388,39,407"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "poly",
              "value": "370,311,367,352,364,380,357,367,357,336,361,317"
            }]
          }]
        },
        "18": {
          "title": "Below fifth toe",
          "description": "This point is associated with the inner portion of the shoulder.",
          "associated_with": ["Inner portion of the shoulder", "shoulder"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "poly",
              "value": "300, 160, 303, 179, 306, 210, 304, 240, 298, 266, 290, 285, 284, 279, 282, 248, 286, 200, 289, 178"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "poly",
              "value": "87,142,96,154,101,186,102,222,100,255,93,269,80,231,79,188,85,157"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "poly",
              "value": "339,372,329,406,323,420,314,435,316,404,327,382"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "poly",
              "value": "54,339,69,358,77,385,77,405,75,409,66,391,57,355"
            }]
          }]
        },
        "19": {
          "title": "Shoulder blade",
          "description": "This point is associated with scapula.",
          "associated_with": ["Shoulder blade", "Scapula", "Shoulder"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "poly",
              "value": "220, 156, 214, 184, 213, 197, 214, 226, 216, 238, 218, 253, 217, 252, 212, 183"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "poly",
              "value": "168,134,177,167,177,197,170,233,176,204,177,172"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "poly",
              "value": "181,386,171,423,167,451,169,495,166,456,172,416"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "poly",
              "value": "214,356,223,379,228,406,231,444,229,416,225,385"
            }]
          }]
        },
        "20": {
          "title": "Point 20",
          "description": "This point is associated with stomach.",
          "associated_with": ["Stomach"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "256, 311, 26"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "121,293,28"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "248,386,13"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "146,358,14"
            }]
          }]
        },
        "21": {
          "title": "point 21",
          "description": "This point is associated with thyroid glands.",
          "associated_with": ["Thyroid glands", "Thyroid"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "227, 283, 15"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "157,265,16"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "198,422,16"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "196,397,18"
            }]
          }]
        },
        "22": {
          "title": "Point 22",
          "description": "This point is associated with kidney.",
          "associated_with": ["Kidney"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "174, 285, 15"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "215,266,17"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "166,475,17"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "229,456,16"
            }]
          }]
        },
        "23a": {
          "title": "Point 23A",
          "description": "This point is associated with liver(On the right palm).",
          "associated_with": ["Liver(On the right palm)", "Liver"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "91, 285, 19"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "85,392,19"
            }]
          }]
        },
        "23b": {
          "title": "Point 23B",
          "description": "This point is associated with heart(On the left palm).",
          "associated_with": ["Heart(On the left palm)", "Heart"],
          "images": [{
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "310,264,15"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "poly",
              "value": "316,365,18"
            }]
          }]
        },
        "24": {
          "title": "24",
          "description": "This point is associated with pancreas.",
          "associated_with": ["Pancreas"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "102,322,15"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "296,306,17"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "204,368,16"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "192,342,18"
            }]
          }]
        },
        "25": {
          "title": "Point 25",
          "description": "This point is the energy center of the body. It can be compared with a torage battery. For this equipment to function properly, the battery has to be charged adequately, similar for the body to function properly, this energy center has to be in good condition.",
          "associated_with": ["Energy center", "Energy"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "101,397,13"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "298,389,15"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "117,432,18"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "282,403,19"
            }]
          }]
        },
        "26": {
          "title": "Point 26",
          "description": "This point is associated with knees and veins of the legs.",
          "associated_with": ["Knees", "Veins of legs"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "130,406,14"
            }, {
              "type": "circle",
              "value": "175,406,17"
            }, {
              "type": "circle",
              "value": "229,407,16"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "152,398,19"
            }, {
              "type": "circle",
              "value": "211,400,20"
            }, {
              "type": "circle",
              "value": "263,400,20"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "79,313,17"
            }, {
              "type": "circle",
              "value": "139,297,18"
            }, {
              "type": "circle",
              "value": "211,290,15"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "189,262,16"
            }, {
              "type": "circle",
              "value": "256,273,16"
            }, {
              "type": "circle",
              "value": "319,287,17"
            }]
          }]
        },
        "27": {
          "title": "Point 27",
          "description": "This point is associated with adrenal glands.",
          "associated_with": ["Adrenal glands", "Adrenal"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "249, 380, 14"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "130, 368, 15"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "200,233,15"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "200,233,15"
            }]
          }]
        },
        "28a": {
          "title": "Point 28A",
          "description": "This point is associated with gall bladder(On the right palm).",
          "associated_with": ["Gall bladder(On the right palm)", "Gall bladder"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "102, 477, 15"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "89,471,18"
            }]
          }]
        },
        "28b": {
          "title": "Point 28B",
          "description": "This point is associated with Spleen(On the left palm).",
          "associated_with": ["Spleen(On the left palm)", "Spleen"],
          "images": [{
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "cirlce",
              "value": "297,478,17"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "309,449,17"
            }]
          }]
        },
        "29": {
          "title": "Point 29",
          "description": "This point is associated with large intestines.",
          "associated_with": ["Large intestines"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "174,515,16"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "208,525,29"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "257,449,16"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "133,425,16"
            }]
          }]
        },
        "30": {
          "title": "Point 30",
          "description": "This point is associated with small intestines.",
          "associated_with": ["Small intestines"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "232,516,13"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "149,526,22"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "271,420,16"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "121,393,16"
            }]
          }]
        },
        "31": {
          "title": "Point 31",
          "description": "This point is associated with waist.",
          "associated_with": ["Waist"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "254,515,13"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "118,524,21"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "250,484,14"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "140,462,18"
            }]
          }]
        },
        "32": {
          "title": "Point 32",
          "description": "This point is associated with knee, ankle bone and outer side of the waist.",
          "associated_with": ["Outer side of the waist", "Knee", "Ankle bone", "Ankle", "waist"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "poly",
              "value": "78,523,95,547,106,577,109,612,110,633,106,650,88,625,79,598,76,564"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "poly",
              "value": "328,538,309,568,296,608,291,650,296,701,323,659,332,612,330,570"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "poly",
              "value": "54,480,63,485,72,498,79,517,80,528,76,539"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "poly",
              "value": "348,462,341,490,336,502,327,525,322,512,327,488,335,471"
            }]
          }]
        },
        "33": {
          "title": "Point 33",
          "description": "This point is associated with urinary track, waist, ankle bone and inner side of the knee.",
          "associated_with": ["Urinary", "Urinary track", "Waist", "Inner side of the knee", "knee", "Ankle bone", "Ankle"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "poly",
              "value": "257,520,238,548,231,580,227,616,234,652,252,621,258,579,259,537"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "poly",
              "value": "117,530,131,548,147,597,149,637,143,701,123,668,115,623"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "poly",
              "value": "249,536,250,525,257,509,268,498,279,491,284,491,260,525,255,528"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "poly",
              "value": "104,468,123,480,136,499,140,513,139,521,130,508"
            }]
          }]
        },
        "34": {
          "title": "Point 34",
          "description": "This point is associated with cancer, infection and bleeding.",
          "associated_with": ["Cancer", "Infection", "Bleeding"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "229,651,13"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "145,693,14"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "178,516,16"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "215,499,19"
            }]
          }]
        },
        "35": {
          "title": "Point 35",
          "description": "This point is associated with cancer, anus diseases and piles",
          "associated_with": ["Cancer", "Anus diseases", "Anus", "Piles"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "poly",
              "value": "109,654,138,644,169,642,192,644,208,647,229,656,203,675,176,680,124,666,123,666"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "poly",
              "value": "291,704,256,692,207,686,171,692,144,703,165,721,192,735,217,738,250,734,279,718"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "178,516,16"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "215,499,19"
            }]
          }]
        },
        "36": {
          "title": "Point 36",
          "description": "This point is associated with testes and ovaries.",
          "associated_with": ["Testes", "Ovaries"],
          "images": [{
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "92,586,18"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "310,583,18"
            }]
          }]
        },
        "37": {
          "title": "Point 37",
          "description": "This point is associated with prostrate gland.",
          "associated_with": ["Prostrate gland", "Prostrate"],
          "images": [{
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "235,550,15"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "153,539,14"
            }]
          }]
        },
        "38": {
          "title": "Point 38",
          "description": "This point is associated with uterus.",
          "associated_with": ["Uterus"],
          "images": [{
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "232,573,15"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "153,565,13"
            }]
          }]
        },
        "39": {
          "title": "Point 39",
          "description": "This point is associated with penis.",
          "associated_with": ["Penis"],
          "images": [{
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "234,597,15"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "152,590,13"
            }]
          }]
        },
        "40": {
          "title": "Point 40",
          "description": "This point is associated with urinary track.",
          "associated_with": ["Urinary track", "Urinary"],
          "images": [{
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "233,618,17"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "153,616,15"
            }]
          }]
        },
        "41": {
          "title": "Point 41",
          "description": "This point is associated with vata.",
          "associated_with": ["Vata"],
          "images": [{
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "237, 510, 13"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "153,493,14"
            }]
          }]
        }
      }
    };

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
    };

    $scope.cancelAutoComplete = function(callback) {
      $scope.points = '';
      $scope.query = '';
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
  })

  .controller('ScienceCtrl', function($scope) {
    $scope.content = {
      "science": [{
          "id": 1,
          "title": "Flow of chetana within the body and pressure-points",
          "description": "<p>Chetana means the aspect of Divine consciousness that governs the functioning of the mind and body.</p><p>There is a constant flow of chetana in our body similar to flow of electric current. Just like the wire and switch in an electrical cicuit, there are paths of chetana flow and specific points in circuit of the flow of chetana. By applying pressure to these points, the flow of chetana in our body can be controlled. These points are called pressure-points, and are associated with specific organs in the body.</p>"
        },
        {
          "id": 2,
          "title": "Deseases are caused due to obstacles in the path of chetana",
          "description": "<p>Whenever there are obstacles in the flow of chetana, which always keeps flowing, problems arise in the functionaing of the organs than lead to diseases. In most cases it is the inappropriate diet and habits that bring about obstacles in the function of chetana.</p>"
        },
        {
          "id": 3,
          "title": "Acupressure eliminates the obstacle in the path of chetana, which results in the elimination of the diseases",
          "description": "<p>God has created an amazing system of curing diseases in the human body without the aid of medicines. Upon applying pressure to the specific points that control the flow of chetana, an immediate signal is sent to the brain for elimination of disease. Accordingly, the entire body begins to function on its own to remove the obstacles in the flow of chetana, and the disease is cured.</p>"
        },
        {
          "id": 4,
          "title": "Acupressure and Reflexelogy",
          "description": "<p>In Acupressure therapy, pressure-points on the entire body are used for diagnosing and treating a disease. Reflexelogy is very much a branch of Acupressure therapy. The only difference is that in Reflexelogy the pressure-points on the palms and sole are used for diagnosis and treatment. Reflexelogy is also known as 'Zone therapy'.</p>"
        }
      ]
    };
  })

  .controller('FeaturesCtrl', function($scope) {
    $scope.content = {
      "features": [{
          "id": 1,
          "title": "Self-treatment without the use of medicines",
          "description": "<p>This method of treatment uses no medicines. A is patient diagnosed and treated only by application of pressure to the pressure-points on the body. The best part of this treatment is that the patient can treat himself.</p>"
        },
        {
          "id": 2,
          "title": "Beneficial for all",
          "description": "<p>This treatment is extremely beneficial for the people in all fields and for all age groups. By practicing Acupressure regularly, everyone can increase his/her capacity and thereby be happy in life in thr tue sense.</p>"
        },
        {
          "id": 3,
          "title": "Helpful in maintaining the balanc of vata, pitta and kapha",
          "description": "<p>According to Ayurveda (One of the four upa-Vedas of Atharvaveda, which teaches good health depends on the balance of vata[Gas], pitta[Bile] and kapha[Phlegm]), himan body has three doshas(Defeciencies of flaws) in the form of vata, pitta and kapha. Whenever there is an imbalance of any one or more, they pollute the entire body, hence, they are termed doshas. Whwnever the three are in balance state, the individual is healthy. When the balance is disturbed, diseases overwhelm our body.</p><ul><li>Vata: Vata is essential for all the movements within the body. When the balance of vat is disturbed, it becomes sluggies, it shrinks. There are muscle cramps, the individual slows down and muscle pain starts.</li><li>Pitta: Pitta is essential for digestion. If the balance of pitta is disturbed, indigestion is the result. Diseases such as kidney stones, skin diseases, burning sensation, giddiness, excessive sweating, abscess, gangrene are result of imbalanced pitta. Many a times ailments such as headache, erache, dry cough, asthma, pain in knee joints or arthritis, imbalance of pitta is underlying cause.</li><li>Kapha: Kapha plays a role of lubricant in humab body. Wet cough, asthma, as also ailments of the throat and chet are signs of imbalance of kapha.</li></ul>"
        },
        {
          "id": 4,
          "title": "Assistance in improving digestion",
          "description": "<p>balance of vata, pitta and kapha primarily depends on digestive system. Acupressure helps improve digestive system. Inthe present day situations, over-eating seems to be the cause of most of the diseases. Acupressure every day brings about control over eating, which inturm prevents accumulation of unwanted fat, besides, it also curbs greed, lust in the mind.</p>"
        }
      ]
    };
  })

  .controller('InstrumentsCtrl', function($scope) {
    $scope.content = {
      "instruments": [{
          "id": 1,
          "title": "Jimmy",
          "description": "<p>This instrument is in a shape of a writing pen. It has two sections - one with circular rings and other with pyramid-shaped spikes. Those who cannot sustain the pressure of the spiked portion should be treated with the ring section. if an individual point has to be pressed, use the small or the big section of the Jimmy. To treat the fingers and toes, use the spiked section of the Jimmy.</p>",
          "image": "img/instruments/jimmy.jpg"
        },
        {
          "id": 2,
          "title": "Magic strip",
          "description": "<p>This strip is an alternative to the Jimmy. It can be manufactured from a wooden flat-bar. The magic strip is pointed in front, rounded at the back and has pyramid-shaped spikes. This strip can also be used like a Jimmy. Its spikes can be used for applying pressure better than a Jimmy, and this helps obtain good results in a short duration.</p>",
          "image": "img/instruments/magic_strip.jpg"
        },
        {
          "id": 3,
          "title": "Roller",
          "description": "<p>A roller is spiked, 6 to 8 inches long, has a diameter of about 1 inch. This is helpful in pressing many pressure-points at the same time. It is easy to use the roller on the palms and soles.</p>",
          "image": "img/instruments/roller.jpg"
        },
        {
          "id": 4,
          "title": "Magic square",
          "description": "<p>Magic square with 1, 2 and 3 rollers are helpful for children, middle aged and aged individuals. One has to merely stand on these squares and apply pressure forcefully. This square has simplified Acupressure to a great extent.</p>",
          "image": "img/instruments/magic_square.jpg"
        }
      ]
    };
  })

  .controller('FaqsCtrl', function($scope) {
    $scope.content = {
      "faqs": [{
          "id": 1,
          "title": "Who can be treated with Acupressure?",
          "description": "<p>Age is no bar for Acupressure treatment. Anyone, from a toddler to the aged can be treated. The recovery is quick in children, whereas, in elders it can take slightly longer.</p>"
        },
        {
          "id": 2,
          "title": "Duration and frequency of the treatment?",
          "description": "<p>Acupressure treatment should be administered regularly till the patient is cured. Continuing the treatment even aftre getting cured helps in remaining healthy. Ideally, the  treatment should be administered twice a day, morning or evening or upon waking up in the morning and before going to bed at night. In an emergency, this treatment can be administered at any time, even after meals. There is no restriction of time for Acupressure treatment.</p>"
        },
        {
          "id": 3,
          "title": "How and how much pressure to apply during the treatment?",
          "description": "<p>Press at a point for a second, release and repeat. Apply sustainable pressure. Gradually, as the tolerance level of the patient increases, increase the pressure.</p>"
        },
        {
          "id": 4,
          "title": "For how long should a point be pressed?",
          "description": "<p>If an area is very painfull, apply pressure for 2 minutes(120 counts) and for normal area, 10 seconds(10 counts) are enough. In a few days, as the condition improves, the pain will subside. Keep reducing the duration accordingly.</p>"
        },
        {
          "id": 5,
          "title": "What precautions should be taken when using Acupressure instruments?",
          "description": "<p>Acupressure instruments are best used on the palms and soles only. Do not use the spiked instruments on other parts of the body. Since, the spikes are likely tpo harm the tender skin.</p>"
        },
        {
          "id": 6,
          "title": "Everyone, specially those who have severe distress due to negative energies should perform Acupressure therapy while chanting God's name",
          "description": "<p>Distressing enregy is emmityted byt he fingers of people who have severe distress due to negative energies. When Acupressure therapy is performed with these fingers the distressing energy is transmitted into the body. In kalyug today, the attacks of negative energies have increased to such an extent that almost every individual suffers from mild to sever distress. Hence, everyone should perform Acupressure therapy by chanting God's name.</p>"
        }
      ]
    };
  })

  .controller('ZodiacCtrl', function($scope, $ionicScrollDelegate, $location) {
    console.log('ZodiacCtrl initialized');
    $scope.sign = 'Aries';
    $scope.showPoints = false;
    $scope.zodiacSigns = {
      'Aries': {
        'info': 'Stubborn with his views, overenthusiastic',
        'date':'21 March - 19 April',
        'aliments': 'Waist and backache, aliments of skin and digestive system',
        'pressurepoints': ['9', '10', '16', '16a', '28a', '28b', 'point on the shoulder']
      },
      'Taurus': {
        'info': 'Hard working, but not awarded adequately',
        'date':'20 April - 20 May',
        'aliments': 'Aliments of the ear, common cold, giddiness, acidity',
        'pressurepoints': ['9', '10', '11', '28a', '28b']
      },
      'Gemini': {
        'info': 'Do not takes things seriously',
        'date':'21 May - 20 June',
        'aliments': 'Common cold, pain in joints and arthritis',
        'pressurepoints': ['9', '10', '27', '28', '28b', 'point on the shoulder']
      },
      'Cancer': {
        'info': 'Emotional, worrying and psychologicaly weak',
        'date':'21 June - 22 July',
        'aliments': 'Stomach related aliments intensify after the age of 60',
        'pressurepoints': ['4', '20', '28a', '28b', '29', '30']
      },
      'Leo': {
        'info': 'Principled, temperamental, long lasting anger, firmness of the mind',
        'date':'23 July - 22 August',
        'aliments': 'Aliments associated with digestion, giddiness, acidity, skin diseases such as psoriasis',
        'pressurepoints': ['20', '28a', '28b', '29', '30', '34', '35']
      },
      'Virgo': {
        'info': 'Talkative and diftrusting others, excessively analytical attitude',
        'date':'23 August - 22 September',
        'aliments': 'Common cold and psychological aliments',
        'pressurepoints': ['4', '9', '10', '21', '27', '31', 'point on the shoulder']
      },
      'Libra': {
        'info': 'Politicians by nature',
        'aliments': 'Aliments of thyroid, throat and digestive system',
        'date':'23 September - 22 October',
        'pressurepoints': ['9', '10', '21', '28', 'point on the shoulder']
      },
      'Scorpio': {
        'info': 'Hurrying things, boldness, stable in difficult situations',
        'date':'23 October - 21 November',
        'aliments': 'Pain in the waist and back, aliments of skin and digestive system ',
        'pressurepoints': ['9', '10', '16', '16a', '28a', '28b', 'point on the shoulder']
      },
      'Sagittarius': {
        'info': 'Coward, bashful and emotional by temperament',
        'date':'22 November - 21 December',
        'aliments': 'Pain in the back and waist, aliments of skin and digestive system',
        'pressurepoints': ['9', '10', '16','16a', '28a', '28b', 'point on the shoulder']
      },
      'Capricorn': {
        'info': 'Tasteful eaters, lazy and forgetful',
        'date':'22 December - 19 January',
        'aliments': 'Aliments caused by infections',
        'pressurepoints': ['9', '10', '28a', '28b', 'point on the shoulder']
      },
      'Aquarius': {
        'info': 'Suspicious nature, over analytical and investigative temperament, reserved(not expressing the feelings)',
        'date':'20 January - 18 February',
        'aliments': 'Common cold, obesity, psychological aliments',
        'pressurepoints': ['9', '10', '21', '27', '31', 'point on the shoulder']
      },
      'Pisces': {
        'info': "Keeping things in mind for long time, remaining in one's own shell, stubborness",
        'date':'19 February - 20 March',
        'aliments': 'Acidity, addiction in men, aggravation of psychological problems and knee joint pain',
        'pressurepoints': ['4', '16', '16a', '28a', '28b', '33', '34', '35']
      }
    };

    $scope.content = {
      "points": {
        "1": {
          "title": "Little toe",
          "description": "<p>Little toe is an energy center. When litte toe is pressed, the body gets charged with heat and we immediately obtain energy. It is helpful whenever sombody gets excessively tired or becomes unconsious.</p>",
          "associated_with": ["Energy center", "Energy", "tired", "Unconsious"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "poly",
              "value": "64, 121, 71, 124, 77, 130, 80, 137, 81, 148, 73, 145, 68, 138, 65, 130"
            }, {
              "type": "poly",
              "value": "42, 136, 46, 129, 50, 126, 54, 123, 54, 132, 53, 141, 51, 148, 47, 152, 42, 156, 41, 148, 40, 142"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "poly",
              "value": "348,100,357,110,361,122,360,134,350,125,346,112"
            }, {
              "type": "poly",
              "value": "335,97,324,105,319,116,319,124,330,116,336,107"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "poly",
              "value": "23,143,27,149,27,159,23,168,18,174,18,154"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "poly",
              "value": "370,126,375,138,376,152,369,145,367,134"
            }]
          }]
        },
        "2": {
          "title": "The web between the little toe and the fourth toe",
          "description": "<p>When pressure is applied to this web, the ear remains healthy.</p>",
          "associated_with": ["Ear", "Ear drums"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "93, 187, 13"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "305,161,13"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "79,283,18"
            }, {
              "type": "poly",
              "value": "48,142,46,156,49,165,57,171,55,155"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "318,257,14"
            }, {
              "type": "poly",
              "value": "346,126,349,134,348,144,339,152,340,135"
            }]
          }]
        },
        "3": {
          "title": "Web between the fourth and third(middle) toe and the fourth toe",
          "description": "Applying pressure to this web as well as the fourth toe helps maintain the eyes in good health and prevent using spectacles",
          "associated_with": ["Eye", "Eyesight", "Spectacles", "Sight"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "131, 157, 13"
            }, {
              "type": "poly",
              "value": "91, 72, 84, 82, 79, 94, 81, 110, 90, 100, 94, 85"
            }, {
              "type": "poly",
              "value": "103, 70, 104, 81, 109, 91, 121, 101, 118, 83"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "263,132,13"
            }, {
              "type": "poly",
              "value": "306,49,317,62,320,74,318,85,307,76,303,62"
            }, {
              "type": "poly",
              "value": "291,47,293,56,290,67,280,75,272,79,277,59"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "214,258,17"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "184,229,15"
            }]
          }]
        },
        "4": {
          "title": "Third toe",
          "description": "This is a very important toe from the perspective of maintaining the psychological balance. Apply pressure to this toe to get rid of diseases such as blood pressure, diabetes that are associated with mind, and to reduce other psychological ailments such as depression, madness, lust and jealousy. This toe is important for curing any injury and stopping bleeding.",
          "associated_with": ["Psychological wellbeing", "blood pressure", "diabetes", "stop bleeding", "Mental instability", "Mind", "Depression", "Madness", "Lust", "Jealousy"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "poly",
              "value": "149, 38, 150, 51, 157, 64, 166, 70, 166, 56, 159, 44"
            }, {
              "type": "poly",
              "value": "135, 40, 127, 52, 124, 67, 125, 78, 136, 65, 139, 54"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "poly",
              "value": "257, 20, 266, 27, 270, 35, 273, 45, 272, 56, 263, 50, 257, 40"
            }, {
              "type": "poly",
              "value": "244,20,243,35,237,45,227,51,229,34"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "poly",
              "value": "92,53,94,67,91,79,82,87,83,70"
            }, {
              "type": "poly",
              "value": "115,54,114,70,117,80,124,87,123,70"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "poly",
              "value": "304,49,310,58,313,70,313,76,303,66,301,55"
            }, {
              "type": "poly",
              "value": "281,50,284,57,281,70,273,78,274,65,276,56"
            }]
          }]
        },
        "5": {
          "title": "Web between third and the second toe",
          "description": "Applying pressure here increases the body resistance. Apply pressure to this point whenever there is any infection.",
          "associated_with": ["Energy that prevents diseases", "prevent diseases", "infection", "Improve immunity"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "175, 135, 13"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "216,114,13"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "142,262,19"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "257,237,15"
            }]
          }]
        },
        "6": {
          "title": "Second toe",
          "description": "This point is associated with neck and nose.",
          "associated_with": ["Neck", "Nose", "Stiff neck"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "198, 74, 13"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "191,55,15"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "poly",
              "value": "163,15,166,29,162,40,154,48,155,31"
            }, {
              "type": "poly",
              "value": "187,15,195,28,197,43,197,48,186,37,185,22"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "poly",
              "value": "237,17,243,25,246,42,237,35,235,25"
            }, {
              "type": "poly",
              "value": "215,17,218,26,207,43,208,28"
            }]
          }]
        },
        "7": {
          "title": "Second toe",
          "description": "This point is associated with sinus close to nose.",
          "associated_with": ["Sinus", "Sinus close to nose", "Sinus headache"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "poly",
              "value": "190, 17, 177, 32, 174, 49, 174, 58, 187, 51, 194, 32"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "poly",
              "value": "201,4,214,12,219,24,220,35,220,39,203,30,200,14"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "poly",
              "value": "240,52,242,65,237,77,228,85,232,62"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "poly",
              "value": "166,46,175,56,177,66,177,74,166,63,163,51"
            }]
          }]
        },
        "8": {
          "title": "Second toe",
          "description": "This point is associated with sinus close to eyes.",
          "associated_with": ["Sinus", "Sinus close to eyes", "Sinus headache"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "poly",
              "value": "205, 14, 205, 30, 207, 42, 222, 56, 224, 39, 217, 24"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "poly",
              "value": "187,3,188,19,182,33,170,40,171,19"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "poly",
              "value": "263,54,271,68,273,87,261,76,260,59"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "poly",
              "value": "145,48,147,60,144,70,135,76,136,63"
            }]
          }]
        },
        "9": {
          "title": "Web between the second toe and the big toe",
          "description": "This point is associated with throat related problems.",
          "associated_with": ["Throat", "Soar throat", "Throat itching"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "218, 140, 11"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "170,116,13"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "263,349,17"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "134,316,15"
            }]
          }]
        },
        "10": {
          "title": "Web between the second toe and the big toe",
          "description": "This point is associated with tonsisls related problems.",
          "associated_with": ["Tonsil"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "237, 142, 11"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "150,122,13"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "280,355,17"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "117,325,16"
            }]
          }]
        },
        "11": {
          "title": "Big toe",
          "description": "Big toe is associated with the head. On its inner side, meaning the side of the second toe, there are points associated with temple, ear and mumps.",
          "associated_with": ["Temple", "Ear", "Mumps", "Head"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "poly",
              "value": "238, 29, 246, 46, 245, 67, 239, 79, 229, 84, 229, 60, 232, 41"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "poly",
              "value": "155,18,147,33,146,46,149,59,161,68,164,42"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "poly",
              "value": "346,231,341,248,327,262,317,266,330,245"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "poly",
              "value": "56,203,73,219,83,235,68,229,59,216"
            }]
          }]
        },
        "12": {
          "title": "Big toe",
          "description": "This point is associated with  muscles of eyeball. It is helpful to those who are squint-eyed.",
          "associated_with": ["Eye Muscles", "Eye", "Squint eyed", "Eyeball"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "246, 25, 13"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "144,16,15"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "354,231,14"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "48,204,14"
            }]
          }]
        },
        "13": {
          "title": "Big toe",
          "description": "The outer side of the big toe has points associated with curvical spondylosis.",
          "associated_with": ["Curvical spondylosis", "spondylosis", "Curvical"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "poly",
              "value": "287, 11, 297, 30, 303, 54, 304, 86, 298, 109, 293, 122, 304, 127, 313, 97, 317, 65, 312, 41, 298, 17"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "poly",
              "value": "106,7,94,37,89,60,92,89,97,107,85,111,79,83,77,58,85,30"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "poly",
              "value": "376,233,365,250,356,272,350,295,352,310,356,313,368,275,379,246"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "poly",
              "value": "26,204,35,215,45,239,48,265,45,277,40,283,32,243,24,219"
            }]
          }]
        },
        "14": {
          "title": "Big toe",
          "description": "This point is associated with pineal and pitutary glands. In ailments such as insomnia, pain in the neck, apply pressure to this point.",
          "associated_with": ["Pineal gland", "Pitutary glands", "sleep", "Pineal", "Pitutary", "Insomnia", "Neck"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "poly",
              "value": "302, 59, 316, 57, 315, 86, 303, 86"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "poly",
              "value": "77,48,89,48,89,75,76,74"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "poly",
              "value": "361,257,372,262,362,291,351,286"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "poly",
              "value": "40,227,47,255,35,259,28,231"
            }]
          }]
        },
        "15": {
          "title": "Big toe",
          "description": "The root of the big toe(where it joins the feet) is also associated with neck",
          "associated_with": ["Joints of the neck", "neck"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "267, 129, 13"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "121,115,14"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "310,352,17"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "84,321,18"
            }]
          }]
        },
        "16": {
          "title": "Mound between the second and the third toe",
          "description": "This point is associated with lungs and thymus glands. This point is helpful in all ailments of children upto 12 years. This point is termed as God's point.",
          "associated_with": ["thymus glands", "Lungs", "thymus"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "176, 240, 11"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "215,218,16"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "214,333,17"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "182,304,17"
            }]
          }]
        },
        "16a": {
          "title": "Mound between the second and the third toe",
          "description": "This point is associated with pitta related ailment so also in dry cough.",
          "associated_with": ["Pitta"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "176, 258, 12"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "214,239,16"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "188,359,17"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "208,331,16"
            }]
          }]
        },
        "17": {
          "title": "Below fifth toe",
          "description": "This point is associated with outer portion of the shoulder.",
          "associated_with": ["Outer portion of the shoulder", "shoulder"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "poly",
              "value": "52, 211, 57, 215, 61, 224, 64, 238, 64, 258, 62, 275, 56, 283, 45, 285, 45, 259, 46, 238"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "poly",
              "value": "350,187,342,196,338,231,344,255,351,264,359,265,359,219"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "poly",
              "value": "28,336,35,343,44,365,44,388,39,407"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "poly",
              "value": "370,311,367,352,364,380,357,367,357,336,361,317"
            }]
          }]
        },
        "18": {
          "title": "Below fifth toe",
          "description": "This point is associated with the inner portion of the shoulder.",
          "associated_with": ["Inner portion of the shoulder", "shoulder"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "poly",
              "value": "300, 160, 303, 179, 306, 210, 304, 240, 298, 266, 290, 285, 284, 279, 282, 248, 286, 200, 289, 178"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "poly",
              "value": "87,142,96,154,101,186,102,222,100,255,93,269,80,231,79,188,85,157"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "poly",
              "value": "339,372,329,406,323,420,314,435,316,404,327,382"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "poly",
              "value": "54,339,69,358,77,385,77,405,75,409,66,391,57,355"
            }]
          }]
        },
        "19": {
          "title": "Shoulder blade",
          "description": "This point is associated with scapula.",
          "associated_with": ["Shoulder blade", "Scapula", "Shoulder"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "poly",
              "value": "220, 156, 214, 184, 213, 197, 214, 226, 216, 238, 218, 253, 217, 252, 212, 183"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "poly",
              "value": "168,134,177,167,177,197,170,233,176,204,177,172"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "poly",
              "value": "181,386,171,423,167,451,169,495,166,456,172,416"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "poly",
              "value": "214,356,223,379,228,406,231,444,229,416,225,385"
            }]
          }]
        },
        "20": {
          "title": "Point 20",
          "description": "This point is associated with stomach.",
          "associated_with": ["Stomach"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "256, 311, 26"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "121,293,28"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "248,386,13"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "146,358,14"
            }]
          }]
        },
        "21": {
          "title": "point 21",
          "description": "This point is associated with thyroid glands.",
          "associated_with": ["Thyroid glands", "Thyroid"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "227, 283, 15"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "157,265,16"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "198,422,16"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "196,397,18"
            }]
          }]
        },
        "22": {
          "title": "Point 22",
          "description": "This point is associated with kidney.",
          "associated_with": ["Kidney"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "174, 285, 15"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "215,266,17"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "166,475,17"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "229,456,16"
            }]
          }]
        },
        "23a": {
          "title": "Point 23A",
          "description": "This point is associated with liver(On the right palm).",
          "associated_with": ["Liver(On the right palm)", "Liver"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "91, 285, 19"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "85,392,19"
            }]
          }]
        },
        "23b": {
          "title": "Point 23B",
          "description": "This point is associated with heart(On the left palm).",
          "associated_with": ["Heart(On the left palm)", "Heart"],
          "images": [{
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "310,264,15"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "poly",
              "value": "316,365,18"
            }]
          }]
        },
        "24": {
          "title": "24",
          "description": "This point is associated with pancreas.",
          "associated_with": ["Pancreas"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "102,322,15"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "296,306,17"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "204,368,16"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "192,342,18"
            }]
          }]
        },
        "25": {
          "title": "Point 25",
          "description": "This point is the energy center of the body. It can be compared with a torage battery. For this equipment to function properly, the battery has to be charged adequately, similar for the body to function properly, this energy center has to be in good condition.",
          "associated_with": ["Energy center", "Energy"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "101,397,13"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "298,389,15"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "117,432,18"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "282,403,19"
            }]
          }]
        },
        "26": {
          "title": "Point 26",
          "description": "This point is associated with knees and veins of the legs.",
          "associated_with": ["Knees", "Veins of legs"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "130,406,14"
            }, {
              "type": "circle",
              "value": "175,406,17"
            }, {
              "type": "circle",
              "value": "229,407,16"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "152,398,19"
            }, {
              "type": "circle",
              "value": "211,400,20"
            }, {
              "type": "circle",
              "value": "263,400,20"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "79,313,17"
            }, {
              "type": "circle",
              "value": "139,297,18"
            }, {
              "type": "circle",
              "value": "211,290,15"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "189,262,16"
            }, {
              "type": "circle",
              "value": "256,273,16"
            }, {
              "type": "circle",
              "value": "319,287,17"
            }]
          }]
        },
        "27": {
          "title": "Point 27",
          "description": "This point is associated with adrenal glands.",
          "associated_with": ["Adrenal glands", "Adrenal"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "249, 380, 14"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "130, 368, 15"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "200,233,15"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "200,233,15"
            }]
          }]
        },
        "28a": {
          "title": "Point 28A",
          "description": "This point is associated with gall bladder(On the right palm).",
          "associated_with": ["Gall bladder(On the right palm)", "Gall bladder"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "102, 477, 15"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "89,471,18"
            }]
          }]
        },
        "28b": {
          "title": "Point 28B",
          "description": "This point is associated with Spleen(On the left palm).",
          "associated_with": ["Spleen(On the left palm)", "Spleen"],
          "images": [{
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "cirlce",
              "value": "297,478,17"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "309,449,17"
            }]
          }]
        },
        "29": {
          "title": "Point 29",
          "description": "This point is associated with large intestines.",
          "associated_with": ["Large intestines"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "174,515,16"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "208,525,29"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "257,449,16"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "133,425,16"
            }]
          }]
        },
        "30": {
          "title": "Point 30",
          "description": "This point is associated with small intestines.",
          "associated_with": ["Small intestines"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "232,516,13"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "149,526,22"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "271,420,16"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "121,393,16"
            }]
          }]
        },
        "31": {
          "title": "Point 31",
          "description": "This point is associated with waist.",
          "associated_with": ["Waist"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "254,515,13"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "118,524,21"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "250,484,14"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "140,462,18"
            }]
          }]
        },
        "32": {
          "title": "Point 32",
          "description": "This point is associated with knee, ankle bone and outer side of the waist.",
          "associated_with": ["Outer side of the waist", "Knee", "Ankle bone", "Ankle", "waist"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "poly",
              "value": "78,523,95,547,106,577,109,612,110,633,106,650,88,625,79,598,76,564"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "poly",
              "value": "328,538,309,568,296,608,291,650,296,701,323,659,332,612,330,570"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "poly",
              "value": "54,480,63,485,72,498,79,517,80,528,76,539"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "poly",
              "value": "348,462,341,490,336,502,327,525,322,512,327,488,335,471"
            }]
          }]
        },
        "33": {
          "title": "Point 33",
          "description": "This point is associated with urinary track, waist, ankle bone and inner side of the knee.",
          "associated_with": ["Urinary", "Urinary track", "Waist", "Inner side of the knee", "knee", "Ankle bone", "Ankle"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "poly",
              "value": "257,520,238,548,231,580,227,616,234,652,252,621,258,579,259,537"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "poly",
              "value": "117,530,131,548,147,597,149,637,143,701,123,668,115,623"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "poly",
              "value": "249,536,250,525,257,509,268,498,279,491,284,491,260,525,255,528"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "poly",
              "value": "104,468,123,480,136,499,140,513,139,521,130,508"
            }]
          }]
        },
        "34": {
          "title": "Point 34",
          "description": "This point is associated with cancer, infection and bleeding.",
          "associated_with": ["Cancer", "Infection", "Bleeding"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "229,651,13"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "circle",
              "value": "145,693,14"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "178,516,16"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "215,499,19"
            }]
          }]
        },
        "35": {
          "title": "Point 35",
          "description": "This point is associated with cancer, anus diseases and piles",
          "associated_with": ["Cancer", "Anus diseases", "Anus", "Piles"],
          "images": [{
            "path": "./img/points/right_sole.jpg",
            "coords": [{
              "type": "poly",
              "value": "109,654,138,644,169,642,192,644,208,647,229,656,203,675,176,680,124,666,123,666"
            }]
          }, {
            "path": "./img/points/left_sole.jpg",
            "coords": [{
              "type": "poly",
              "value": "291,704,256,692,207,686,171,692,144,703,165,721,192,735,217,738,250,734,279,718"
            }]
          }, {
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "178,516,16"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "215,499,19"
            }]
          }]
        },
        "36": {
          "title": "Point 36",
          "description": "This point is associated with testes and ovaries.",
          "associated_with": ["Testes", "Ovaries"],
          "images": [{
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "92,586,18"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "310,583,18"
            }]
          }]
        },
        "37": {
          "title": "Point 37",
          "description": "This point is associated with prostrate gland.",
          "associated_with": ["Prostrate gland", "Prostrate"],
          "images": [{
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "235,550,15"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "153,539,14"
            }]
          }]
        },
        "38": {
          "title": "Point 38",
          "description": "This point is associated with uterus.",
          "associated_with": ["Uterus"],
          "images": [{
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "232,573,15"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "153,565,13"
            }]
          }]
        },
        "39": {
          "title": "Point 39",
          "description": "This point is associated with penis.",
          "associated_with": ["Penis"],
          "images": [{
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "234,597,15"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "152,590,13"
            }]
          }]
        },
        "40": {
          "title": "Point 40",
          "description": "This point is associated with urinary track.",
          "associated_with": ["Urinary track", "Urinary"],
          "images": [{
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "233,618,17"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "153,616,15"
            }]
          }]
        },
        "41": {
          "title": "Point 41",
          "description": "This point is associated with vata.",
          "associated_with": ["Vata"],
          "images": [{
            "path": "./img/points/right_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "237, 510, 13"
            }]
          }, {
            "path": "./img/points/left_palm.jpg",
            "coords": [{
              "type": "circle",
              "value": "153,493,14"
            }]
          }]
        }
      }
    };
    $scope.setSign = function(){
      $scope.showPoints = false;
    };
    $scope.gotToBottom = function(page) {
      $scope.showPoints = true;
      $location.hash(page); //set the location hash
      var handle = $ionicScrollDelegate.$getByHandle('myPageDelegate');
      handle.anchorScroll(true);
    };

  })

  .directive('mapHighlight', ['$timeout', function($timeout) {
    return {
      restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
      link: function($scope, iElm, iAttrs, controller) {
        $scope.$watchCollection('points', function(newCollection, oldCollection) {
          $timeout(function() {
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

        }, true);
      }
    };
  }]);;
