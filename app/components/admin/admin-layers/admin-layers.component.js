/**
 * Created by CMatyas on 15.12.2015.
 */

/*globals angular:true*/
;(function () {
  'use strict'

  angular.module('biloAtlas').component('adminLayers', {
    templateUrl: 'app/components/admin/admin-layers/admin-layers.component.html',
    controller: function (LayerData, $routeParams) {
      LayerData.getLayers().then(function (layers) {
        this.layers = layers
      }.bind(this))
    }
  })
})()