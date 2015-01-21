"use strict";

(function(angular) {
    angular.module("geneanetCustomCamera", []);

    angular.module("geneanetCustomCamera").provider("$geneanetCustomCamera", [
        function() {
            var miniature;
            var saveInGallery;
            var cameraBackgroundColor;
            var cameraBackgroundColorPressed;
            var quality;

            /**
             * Set default miniature option.
             * 
             * @param {boolean} newMiniature True : active miniature. False : disabled miniature.
             */
            this.setOptionMiniature = function(newMiniature) {
                miniature = newMiniature;
            };

            /**
             * Set default saveInGallery option.
             * 
             * @param {boolean} newSaveInGallery True : active saveInGallery. False : disabled saveInGallery.
             */
            this.setOptionSaveInGallery = function(newSaveInGallery) {
                saveInGallery = newSaveInGallery;
            };

            /**
             * Set default button camera's background color.
             * 
             * @param {string} newCameraBackgroundColor
             */
            this.setOptionCameraBackgroundColor = function(newCameraBackgroundColor) {
                cameraBackgroundColor = newCameraBackgroundColor;
            };

            /**
             * Set default button camera's background color when it's pressed.
             * 
             * @param {string} newCameraBackgroundColorPressed
             */
            this.setOptionCameraBackgroundColorPressed = function(newCameraBackgroundColorPressed) {
                cameraBackgroundColorPressed = newCameraBackgroundColorPressed;
            };

            /**
             * Set default picture's quality.
             * @param {integer} newQuality Between 0-100.
             */
            this.setOptionQuality = function(newQuality) {
                quality = newQuality;
            };

            /**
             * Create service.
             */
            this.$get = [function(){
                var geneanetCustomCamera = new GeneanetCustomCamera();

                geneanetCustomCamera.setOptionMiniature(miniature);
                geneanetCustomCamera.setOptionSaveInGallery(saveInGallery);
                geneanetCustomCamera.setOptionCameraBackgroundColor(cameraBackgroundColor);
                geneanetCustomCamera.setOptionCameraBackgroundColorPressed(cameraBackgroundColorPressed);
                geneanetCustomCamera.setOptionQuality(quality);

                return geneanetCustomCamera;
            }];
        }
    ]);

    /**
     * GeneanetCustomCamera's constructor.
     */
    function GeneanetCustomCamera() {
        var _miniature;
        var _saveInGallery;
        var _cameraBackgroundColor;
        var _cameraBackgroundColorPressed;
        var _quality;

        this.setOptionMiniature = function(miniature) {
            _miniature = miniature;
        };

        this.getOptionMiniature = function() {
            return _miniature;
        };

        this.setOptionSaveInGallery = function(saveInGallery) {
            _saveInGallery = saveInGallery;
        };

        this.getOptionSaveInGallery = function() {
            return _saveInGallery;
        };

        this.setOptionCameraBackgroundColor = function(cameraBackgroundColor) {
            _cameraBackgroundColor = cameraBackgroundColor;
        };

        this.getOptionCameraBackgroundColor = function() {
            return _cameraBackgroundColor;
        };

        this.setOptionCameraBackgroundColorPressed = function(cameraBackgroundColorPressed) {
            _cameraBackgroundColorPressed = cameraBackgroundColorPressed;
        };

        this.getOptionCameraBackgroundColorPressed = function() {
            return _cameraBackgroundColorPressed;
        };

        this.setOptionQuality = function(quality) {
            _quality = quality;
        };

        this.getOptionQuality = function() {
            return _quality;
        };
    }

    GeneanetCustomCamera.prototype.startCamera = function(imgBackgroundBase64, successFct, failFct, overrideOptions) {
        if (navigator.GeneanetCustomCamera === undefined) {
            throw new GeneanetCustomCameraException("Need GeneanetCustomCamera plugin : https://github.com/geneanet/customCamera");
        }
        
        var options = {};

        options.imgBackgroundBase64 = imgBackgroundBase64;
        options.miniature = this.getOptionMiniature();
        options.saveInGallery = this.getOptionSaveInGallery();
        options.cameraBackgroundColor = this.getOptionCameraBackgroundColor();
        options.cameraBackgroundColorPressed = this.getOptionCameraBackgroundColorPressed();
        options.quality = this.getOptionQuality();

        overrideOptions = overrideOptions ? overrideOptions : {};
        for (var nameOption in overrideOptions) {
            options[nameOption] = overrideOptions[nameOption];
        }

        navigator.GeneanetCustomCamera.startCamera(options, successFct, failFct);
    };

    /**
     * To base64 encode an image from html balise img.
     * 
     * @param {object}  picture    Object to present html balise img.
     * @param {string}  format     Image format.
     * @param {boolean} onlyBase64 Only base 64.
     * 
     * @return {string} Base64 picture.
     */
    GeneanetCustomCamera.prototype.encodeBase64FromImg = function(picture, format, onlyBase64) {
        format = format ? format : "image/jpg";
        
        var canvas = document.createElement("canvas");
        canvas.width = picture.naturalWidth;
        canvas.height = picture.naturalHeight;
        
        var ctx = canvas.getContext("2d");
        ctx.drawImage(picture, 0, 0);

        var base64 = canvas.toDataURL(format);

        if (onlyBase64) {
            return base64.replace(/data:[^\/]*\/[^\,]*,/, "");
        } else {
            return base64;
        }
    };

    /**
     * GeneanetCustomCameraException's constructor.
     */
    function GeneanetCustomCameraException(message) {
        this.message = message;
        this.name = "GeneanetCustomCameraException";
    }
})(window.angular);
