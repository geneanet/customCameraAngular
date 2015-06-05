'use strict';

describe('geneanetCustomCamera', function() {
    beforeEach(module('geneanetCustomCamera'));

    beforeEach(module(function(geneanetCustomCameraProvider) {
        return function() {
            geneanetCustomCameraProvider.setOptionMiniature(false);
        };
    }));

    it('should have the miniature option disabled.', function() {
        inject(function(geneanetCustomCamera) {
            expect(geneanetCustomCamera.getOptionMiniature()).not.toBeTruthy();
        });
    });
});