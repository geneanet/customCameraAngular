# geneanetCustomCamera

This angular service is for ease the use of the [customCamera](https://github.com/geneanet/customCamera) cordova plugin.

## Installation

Execute :

    bower install https://github.com/geneanet/customCameraAngular.git

Or add the following line in your bower.json, then execute `bower install` :

    "customCameraAngular": "https://github.com/geneanet/customCameraAngular.git"

## Utilisation

### Import the service

Upload the file your/path/customCameraAngular/src/GeneanetCustomCamera.js to your project. Add `geneanetCustomCamera` to your dependencies in the module declaration.

### Configuration (Optional)

More about [customCamera](https://github.com/geneanet/customCamera).

``` js
angular.module("YourModule").config(["geneanetCustomCameraProvider",
    function(geneanetCustomCameraProvider) {
        geneanetCustomCameraProvider.setOptionMiniature(false);
        geneanetCustomCameraProvider.setOptionSaveInGallery(true);
        geneanetCustomCameraProvider.setOptionCameraBackgroundColor("#d45f13");
        geneanetCustomCameraProvider.setOptionCameraBackgroundColorPressed("#145612");
        geneanetCustomCameraProvider.setOptionQuality(70);
        geneanetCustomCameraProvider.setOptionOpacity(false);
        geneanetCustomCameraProvider.optionDefaultFlashIsActived();
        geneanetCustomCameraProvider.setOptionSwitchFlash(false);
        geneanetCustomCameraProvider.optionDefaultCameraIsFront();
        geneanetCustomCameraProvider.setOptionSwitchCamera(false);
    }
]);
```

### Starting the camera

``` js
angular.module("YourModule").controller("YourController", [
    "geneanetCustomCamera",
    function(geneanetCustomCamera) {
        [...]
        var base64 = geneanetCustomCamera.encodeBase64FromImg(
            angular.element("#yourPicture"), // JQuery object to present your picture for the background.
            "image/jpg", // Type of image.
            true // remove `data:[^\/]*\/[^\,]*,` at the begin
        );

        geneanetCustomCamera.startCamera(
            base64,
            null, // other base64 to other side. If null, use first parameter.
            function(data) {
                window.console.log("success");
                angular.element("#yourNewPicture").attr("src", "data:image/jpeg;base64,"+data);
            },
            function(code, message) {
                window.console.log("fail");
                window.console.log(code);
                window.console.log(message);
            },
            {
                quality: 100 // override quality option for the execution. Can override all options.
            }
        );
    }
]);
```

## Contribute

To contribute to this project, please read the following :
+ **Bugs, suggestion, etc. :** Must be declared in Github. Please search the threads before starting a new topic.
+ **Développement Javascript :** Must compiles with JSHint coding rules.
