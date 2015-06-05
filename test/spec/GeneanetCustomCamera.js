'use strict';

describe('geneanetCustomCamera', function() {
    beforeEach(module('geneanetCustomCamera'));

    it('should have options values as values set by the provider', function() {
        var optionMiniature = false;
        var optionSaveInGallery = true;
        var optionCameraBackgroundColor = '#012345';
        var optionCameraBackgroundColorPressed = '#678901';
        var optionQuality = '12';
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

        // @TODO: test set default flash
    });
});