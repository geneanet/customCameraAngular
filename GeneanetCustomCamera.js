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
            var opacity;
            var defaultFlash;
            var switchFlash;
            var defaultCamera;
            var switchCamera;

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
             * Set default opacity option.
             * @param {boolean} newOpacity True : active opacity, false disable
             */
            this.setOptionOpacity = function(newOpacity) {
                opacity = newOpacity;
            };

            /**
             * Set default flash on disabled.
             */
            this.optionDefaultFlashIsDisabled = function() {
                defaultFlash = navigator.GeneanetCustomCamera.FlashModes.DISABLE;
            };

            /**
             * Set default flash on active.
             */
            this.optionDefaultFlashIsActived = function() {
                defaultFlash = navigator.GeneanetCustomCamera.FlashModes.ACTIVE;
            };

            /**
             * Set default flash on auto.
             */
            this.optionDefaultFlashIsAuto = function() {
                defaultFlash = navigator.GeneanetCustomCamera.FlashModes.AUTO;
            };

            /**
             * Set default value for switchflash option.
             * @param {boolean} newSwitchFlash True : active button to switch flash, false disable
             */
            this.setOptionSwitchFlash = function(newSwitchFlash) {
                switchFlash = newSwitchFlash;
            };

            /**
             * Set back camera as default camera.
             */
            this.optionDefaultCameraIsBack = function() {
                defaultCamera = navigator.GeneanetCustomCamera.CameraFacings.BACK;
            };

            /**
             * Set front camera as default camera.
             */
            this.optionDefaultCameraIsFront = function() {
                defaultCamera = navigator.GeneanetCustomCamera.CameraFacings.FRONT;
            };

            /**
             * Set default value for switchcamera option.
             */
            this.setOptionSwitchCamera = function(newSwitchCamera) {
                switchCamera = newSwitchCamera;
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
                geneanetCustomCamera.setOptionOpacity(opacity);
                geneanetCustomCamera.setOptionDefaultFlash(defaultFlash);
                geneanetCustomCamera.setOptionSwitchFlash(switchFlash);
                geneanetCustomCamera.setOptionDefaultCamera(defaultCamera);
                geneanetCustomCamera.setOptionSwitchCamera(switchCamera);

                return geneanetCustomCamera;
            }];
        }
    ]);

    /**
     * GeneanetCustomCamera's constructor.
     */
    function GeneanetCustomCamera() {
        // boolean.
        var _miniature;
        // boolean.
        var _saveInGallery;
        // string.
        var _cameraBackgroundColor;
        // string.
        var _cameraBackgroundColorPressed;
        // integer.
        var _quality;
        // boolean.
        var _opacity;
        // integer.
        var _defaultFlash;
        // boolean.
        var _switchFlash;
        // integer.
        var _defaultCamera;
        // boolean.
        var _switchCamera;

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

        this.setOptionOpacity = function(opacity) {
            _opacity = opacity;
        };

        this.getOptionOpacity = function() {
            return _opacity;
        };

        this.setOptionDefaultFlash = function(defaultFlash) {
            _defaultFlash = defaultFlash;
        };

        this.getOptionDefaultFlash = function() {
            return _defaultFlash;
        };

        this.setOptionSwitchFlash = function(switchFlash) {
            _switchFlash = switchFlash;
        };

        this.getOptionSwitchFlash = function() {
            return _switchFlash;
        };

        this.setOptionDefaultCamera = function(defaultCamera) {
            _defaultCamera = defaultCamera;
        };

        this.getOptionDefaultCamera = function() {
            return _defaultCamera;
        };

        this.setOptionSwitchCamera = function(switchCamera) {
            _switchCamera = switchCamera;
        };

        this.getOptionSwitchCamera = function() {
            return _switchCamera;
        };
    }

    /**
     * To start custom camera.
     * 
     * @param {string}   imgBackgroundBase64                 Image for background.
     * @param {string}   imgBackgroundBase64OtherOrientation Image for background in other size. If it is null, imgBackgroundBase64 is used.
     * @param {Function} successFct                          Success callback.
     * @param {Function} failFct                             Fail callback.
     * @param {Object}   overrideOptions                     Object to override options.
     */
    GeneanetCustomCamera.prototype.startCamera = function(imgBackgroundBase64, imgBackgroundBase64OtherOrientation, successFct, failFct, overrideOptions) {
        if (navigator.GeneanetCustomCamera === undefined) {
            throw new GeneanetCustomCameraException("Need GeneanetCustomCamera plugin : https://github.com/geneanet/customCamera");
        }
        
        var options = {};

        options.imgBackgroundBase64 = imgBackgroundBase64;
        options.imgBackgroundBase64OtherOrientation = imgBackgroundBase64OtherOrientation;
        options.miniature = this.getOptionMiniature();
        options.saveInGallery = this.getOptionSaveInGallery();
        options.cameraBackgroundColor = this.getOptionCameraBackgroundColor();
        options.cameraBackgroundColorPressed = this.getOptionCameraBackgroundColorPressed();
        options.quality = this.getOptionQuality();
        options.opacity = this.getOptionOpacity();
        options.defaultFlash = this.getOptionDefaultFlash();
        options.switchFlash = this.getOptionSwitchFlash();
        options.defaultCamera = this.getOptionDefaultCamera();
        options.switchCamera = this.getOptionSwitchCamera();

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
