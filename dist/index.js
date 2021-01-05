/**
 * As webpack has only experimental ESM module export
 * and it`s very unstable and tricky to run we are
 * applying a workaournd to export the package as desired
 * We might have to migrate to rollup later
 */
module.exports = { ...require('./photon-preact') };