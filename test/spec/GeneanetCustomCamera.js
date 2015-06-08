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