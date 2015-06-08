'use strict';

describe('Configuration geneanetCustomCamera', function() {
    beforeEach(module('geneanetCustomCamera'));

    beforeEach(function() {
        navigator.GeneanetCustomCamera = {
            FlashModes: {
                ACTIVE: 0,
                DISABLE: 1,
                AUTO: 2
            },
            CameraFacings: {
                BACK: 0,
                FRONT: 1
            }
        };
    });

    afterEach(function() {
        navigator.GeneanetCustomCamera = undefined;
    });

    it('should have options values as values set by the provider', function() {
        var optionMiniature = false;
        var optionSaveInGallery = true;
        var optionCameraBackgroundColor = '#012345';
        var optionCameraBackgroundColorPressed = '#678901';
        var optionQuality = 12;
        var optionOpacity = false;
        var optionSwitchFlash = true;
        var optionSwitchCamera = false;

        // init service
        module(function(geneanetCustomCameraProvider) {
            return function() {
                geneanetCustomCameraProvider.setOptionMiniature(optionMiniature);
                geneanetCustomCameraProvider.setOptionSaveInGallery(optionSaveInGallery);
                geneanetCustomCameraProvider.setOptionCameraBackgroundColor(optionCameraBackgroundColor);
                geneanetCustomCameraProvider.setOptionCameraBackgroundColorPressed(optionCameraBackgroundColorPressed);
                geneanetCustomCameraProvider.setOptionQuality(optionQuality);
                geneanetCustomCameraProvider.setOptionOpacity(optionOpacity);
                geneanetCustomCameraProvider.setOptionSwitchFlash(optionSwitchFlash);
                geneanetCustomCameraProvider.setOptionSwitchCamera(optionSwitchCamera);
            };
        });

        inject(function(geneanetCustomCamera) {
            expect(geneanetCustomCamera.getOptionMiniature()).toEqual(optionMiniature);
            expect(geneanetCustomCamera.getOptionSaveInGallery()).toEqual(optionSaveInGallery);
            expect(geneanetCustomCamera.getOptionCameraBackgroundColor()).toEqual(optionCameraBackgroundColor);
            expect(geneanetCustomCamera.getOptionCameraBackgroundColorPressed()).toEqual(optionCameraBackgroundColorPressed);
            expect(geneanetCustomCamera.getOptionQuality()).toEqual(optionQuality);
            expect(geneanetCustomCamera.getOptionOpacity()).toEqual(optionOpacity);
            expect(geneanetCustomCamera.getOptionSwitchFlash()).toEqual(optionSwitchFlash);
            expect(geneanetCustomCamera.getOptionSwitchCamera()).toEqual(optionSwitchCamera);
        });
    });

    it('should have the flash disabled by default', function() {
        module(function(geneanetCustomCameraProvider) {
            return function() {
                geneanetCustomCameraProvider.optionDefaultFlashIsDisabled();
            };
        });

        inject(function(geneanetCustomCamera) {
            expect(geneanetCustomCamera.getOptionDefaultFlash()).toEqual(navigator.GeneanetCustomCamera.FlashModes.DISABLE);
        });
    });

    it('should have the flash actived by default', function() {
        module(function(geneanetCustomCameraProvider) {
            return function() {
                geneanetCustomCameraProvider.optionDefaultFlashIsActived();
            };
        });

        inject(function(geneanetCustomCamera) {
            expect(geneanetCustomCamera.getOptionDefaultFlash()).toEqual(navigator.GeneanetCustomCamera.FlashModes.ACTIVE);
        });
    });

    it('should have the flash in the auto mode by default', function() {
        module(function(geneanetCustomCameraProvider) {
            return function() {
                geneanetCustomCameraProvider.optionDefaultFlashIsAuto();
            };
        });

        inject(function(geneanetCustomCamera) {
            expect(geneanetCustomCamera.getOptionDefaultFlash()).toEqual(navigator.GeneanetCustomCamera.FlashModes.AUTO);
        });
    });

    it('should use the back camera by default', function() {
        module(function(geneanetCustomCameraProvider) {
            return function() {
                geneanetCustomCameraProvider.optionDefaultCameraIsBack();
            };
        });

        inject(function(geneanetCustomCamera) {
            expect(geneanetCustomCamera.getOptionDefaultCamera()).toEqual(navigator.GeneanetCustomCamera.CameraFacings.BACK);
        });
    });

    it('should use the front camera by default', function() {
        module(function(geneanetCustomCameraProvider) {
            return function() {
                geneanetCustomCameraProvider.optionDefaultCameraIsFront();
            };
        });

        inject(function(geneanetCustomCamera) {
            expect(geneanetCustomCamera.getOptionDefaultCamera()).toEqual(navigator.GeneanetCustomCamera.CameraFacings.FRONT);
        });
    });
});

describe('geneanetCustomCamera.encodeBase64FromImg', function() {
    var geneanetCustomCamera;

    beforeEach(function() {   
        module('geneanetCustomCamera');

        inject(function(_geneanetCustomCamera_) {
            geneanetCustomCamera = _geneanetCustomCamera_;
        });
    });

    it('should exist and it\'s a function', function() {
        var encodeBase64FromImg = geneanetCustomCamera.encodeBase64FromImg;
        
        expect(encodeBase64FromImg).toBeDefined();
        expect(encodeBase64FromImg).toEqual(jasmine.any(Function));
    });

    it('should return the base64 of image', function() {
        var img = document.createElement('img');
        var base64 = geneanetCustomCamera.encodeBase64FromImg(img);

        expect(base64).toEqual(jasmine.any(String));
        expect(base64.length).not.toEqual(0);
    });

    it('should return the base64 of image without the starting: data:.*,', function() {
        var img = document.createElement('img');
        var base64 = geneanetCustomCamera.encodeBase64FromImg(img, null, true);

        expect(base64).toEqual(jasmine.any(String));
        expect(base64.length).toEqual(0);
    });
});

describe('geneanetCustomCamera.startCamera', function() {
    var geneanetCustomCamera;

    beforeEach(function() {   
        module('geneanetCustomCamera');

        inject(function(_geneanetCustomCamera_) {
            geneanetCustomCamera = _geneanetCustomCamera_;
        });
    });

    it('should throw a GeneanetCustomCameraException exception', function() {
        expect(geneanetCustomCamera.startCamera).toThrowError(geneanetCustomCamera.getException());
    });

    it('should have any configurations keys if the service is not configured', function() {
        navigator.GeneanetCustomCamera = jasmine.createSpyObj('GeneanetCustomCamera', ['startCamera']);

        geneanetCustomCamera.startCamera();

        expect(navigator.GeneanetCustomCamera.startCamera).toHaveBeenCalledWith(jasmine.objectContaining({}), undefined, undefined);
    });

    it('should have every configurations keys', function() {
        navigator.GeneanetCustomCamera = jasmine.createSpyObj('GeneanetCustomCamera', ['startCamera']);

        var optionMiniature = jasmine.any(Boolean);
        var optionSaveInGallery = jasmine.any(Boolean);
        var optionCameraBackgroundColor = jasmine.any(String);
        var optionCameraBackgroundColorPressed = jasmine.any(String);
        var optionQuality = jasmine.any(Number);
        var optionOpacity = jasmine.any(Boolean);
        var optionDefaultFlash = jasmine.any(Number);
        var optionSwitchFlash = jasmine.any(Boolean);
        var optionDefaultCamera = jasmine.any(Number);
        var optionSwitchCamera = jasmine.any(Boolean);
        var base64Background = jasmine.any(String);
        var base64BackgroundOtherOrientation = jasmine.any(String);

        // configuration service
        geneanetCustomCamera.setOptionMiniature(optionMiniature);
        geneanetCustomCamera.setOptionSaveInGallery(optionSaveInGallery);
        geneanetCustomCamera.setOptionCameraBackgroundColor(optionCameraBackgroundColor);
        geneanetCustomCamera.setOptionCameraBackgroundColorPressed(optionCameraBackgroundColorPressed);
        geneanetCustomCamera.setOptionQuality(optionQuality);
        geneanetCustomCamera.setOptionOpacity(optionOpacity);
        geneanetCustomCamera.setOptionDefaultFlash(optionDefaultFlash);
        geneanetCustomCamera.setOptionSwitchFlash(optionSwitchFlash);
        geneanetCustomCamera.setOptionDefaultCamera(optionDefaultCamera);
        geneanetCustomCamera.setOptionSwitchCamera(optionSwitchCamera);

        // run the method
        geneanetCustomCamera.startCamera(base64Background, base64BackgroundOtherOrientation);

        // check all parameters are valid.
        expect(navigator.GeneanetCustomCamera.startCamera).toHaveBeenCalledWith(
            jasmine.objectContaining({
                imgBackgroundBase64: base64Background,
                imgBackgroundBase64OtherOrientation: base64BackgroundOtherOrientation,
                miniature: optionMiniature,
                saveInGallery: optionSaveInGallery,
                cameraBackgroundColor: optionCameraBackgroundColor,
                cameraBackgroundColorPressed: optionCameraBackgroundColorPressed,
                quality: optionQuality,
                opacity: optionOpacity,
                defaultFlash: optionDefaultFlash,
                switchFlash: optionSwitchFlash,
                defaultCamera: optionDefaultCamera,
                switchCamera: optionSwitchCamera
            }),
            undefined,
            undefined
        );
    });

    it('should have the quality configuration is equal the value used in override object', function() {
        navigator.GeneanetCustomCamera = jasmine.createSpyObj('GeneanetCustomCamera', ['startCamera']);

        var optionQuality = jasmine.any(Number);

        // run the method
        geneanetCustomCamera.startCamera(undefined, undefined, undefined, undefined, {quality: optionQuality});

        // check all parameters are valid.
        expect(navigator.GeneanetCustomCamera.startCamera).toHaveBeenCalledWith(
            jasmine.objectContaining({
                quality: optionQuality
            }),
            undefined,
            undefined
        );
    });

    it('should have functions for callbacks', function() {
        navigator.GeneanetCustomCamera = jasmine.createSpyObj('GeneanetCustomCamera', ['startCamera']);

        var successCallback = jasmine.any(Function);
        var failCallback = jasmine.any(Function);

        // run the method
        geneanetCustomCamera.startCamera(undefined, undefined, successCallback, failCallback);

        // check all parameters are valid.
        expect(navigator.GeneanetCustomCamera.startCamera).toHaveBeenCalledWith(
            jasmine.objectContaining({}),
            successCallback,
            failCallback
        );
    });
});