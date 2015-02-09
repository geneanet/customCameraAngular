# $geneanetCustomCamera

Ce service angular permet de faciliter l'utilisation du plugin cordova [customCamera](https://github.com/geneanet/customCamera).

## Installation

Exécuter :

    bower install https://github.com/geneanet/customCameraAngular.git

Ou ajouter la ligne suivante dans votre bower.json puis exécuter `bower install` :

    "customCameraAngular": "https://github.com/geneanet/customCameraAngular.git"

## Utilisation

### Importer le service

Charger le fichier your/path/customCameraAngular/GeneanetCustomCamera.js dans votre projet.
Dans la déclaration de votre module, ajouter `geneanetCustomCamera` aux dépendances.

### Configuration (Optionnelle)

Plus d'informations sur les options sur [customCamera](https://github.com/geneanet/customCamera).

``` js
angular.module("YourModule").config(["$geneanetCustomCameraProvider",
    function($geneanetCustomCameraProvider) {
        $geneanetCustomCameraProvider.setOptionMiniature(false);
        $geneanetCustomCameraProvider.setOptionSaveInGallery(true);
        $geneanetCustomCameraProvider.setOptionCameraBackgroundColor("#d45f13");
        $geneanetCustomCameraProvider.setOptionCameraBackgroundColorPressed("#145612");
        $geneanetCustomCameraProvider.setOptionQuality(70);
        $geneanetCustomCameraProvider.setOptionOpacity(false);
        $geneanetCustomCameraProvider.optionDefaultFlashIsActived();
        $geneanetCustomCameraProvider.setOptionSwitchFlash(false);
        $geneanetCustomCameraProvider.optionDefaultCameraIsFront();
        $geneanetCustomCameraProvider.setOptionSwitchCamera(false);
    }
]);
```

### Lancement de l'appareil photo

``` js
angular.module("YourModule").controller("YourController", [
    "$geneanetCustomCamera",
    function($geneanetCustomCamera) {
        [...]
        var base64 = $geneanetCustomCamera.encodeBase64FromImg(
            angular.element("#yourPicture"), // JQuery object to present your picture for the background.
            "image/jpg", // Type of image.
            true // remove `data:[^\/]*\/[^\,]*,` at the begin
        );

        $geneanetCustomCamera.startCamera(
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

## Contribuer

Pour contribuer à ce projet, merci de respecter les règles suivantes :
+ **Les bugs, suggestions, etc :** Ils doivent être remontés via le système d'issues de Github. Merci de vérifier que votre sujet n'a pas déjà été traité.
+ **Développement Javascript :** Le code javascript doit être valide avec JSHint.
