// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// Currently,
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/guides/plugins
// https://on.cypress.io/guides/configuration#section-global
// ***********************************************************

/**
*  This function is called when a project is opened or re-opened (e.g. due to
*  the project's config changing)
*/
module.exports = (register, config) => {
  /**
  *  `register` is used to hook into various events in the Cypress lifecycle
  *  `config` is the resolved Cypress config
  */

  /**
  * Registering 'on:spec:file:preprocessor' will override the default
  * preprocessing. This includes watching the spec file, so the plugin
  * you register needs to handle that too.
  *
  * TODO: add link to doc with preprocessor plugin details
  */
  // register('on:spec:file:preprocessor', (filePath, options, util) => {
  //   return filePath
  // })
}