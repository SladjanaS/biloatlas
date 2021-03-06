/**
 * @author Christian Matyas
 */
/*globals angular:true*/

;(function () {
  'use strict'

  /**
   * @ng
   * @class biloAtlas.RegionData
   * @memberof biloAtlas
   * @description Service that provides information about regions
   */
  angular.module('biloAtlas')
    .factory('RegionData', function ($http, ServiceConfig) {
      var webRoot = ServiceConfig.url + 'Regions/'

      /**
       * @name getRegionById
       * @function
       * @param {int} id - The ID of the region.
       * @return Region object as promise
       */
      function getRegionById (id) {
        return $http.get(webRoot + id, {cache: true}).then(
          function (response) {
            return response.data
          },
          function (error) { console.log(error) }
        )
      }

      /**
       * @name getRegions
       * @function
       * @return List of regions as promise
       */
      function getRegions () {
        return $http.get(webRoot, {cache: true}).then(
          function (response) {
            return response.data
          },
          function (error) { console.log(error) })
      }

      /**
       * Public API
       */
      return {
        getRegions: getRegions,
        getRegionById: getRegionById
      }
    })
})()
