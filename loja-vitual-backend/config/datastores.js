/**
 * Datastores
 * (sails.config.datastores)
 *
 * A set of datastore configurations which tell Sails where to fetch or save
 * data when you execute built-in model methods like `.find()` and `.create()`.
 *
 *  > This file is mainly useful for configuring your development database,
 *  > as well as any additional one-off databases used by individual models.
 *  > Ready to go live?  Head towards `config/env/production.js`.
 *
 * For more information on configuring datastores, check out:
 * https://sailsjs.com/config/datastores
 */
// let _url = require('url').parse(process.env.DATABASE_URL);
module.exports.datastores = {


  /***************************************************************************
  *                                                                          *
  * Your app's default datastore.                                            *
  *                                                                          *
  * Sails apps read and write to local disk by default, using a built-in     *
  * database adapter called `sails-disk`.  This feature is purely for        *
  * convenience during development; since `sails-disk` is not designed for   *
  * use in a production environment.                                         *
  *                                                                          *
  * To use a different db _in development_, follow the directions below.     *
  * Otherwise, just leave the default datastore as-is, with no `adapter`.    *
  *                                                                          *
  * (For production configuration, see `config/env/production.js`.)          *
  *                                                                          *
  ***************************************************************************/

  // default: {

  //   /***************************************************************************
  //   *                                                                          *
  //   * Want to use a different database during development?                     *
  //   *                                                                          *
  //   * 1. Choose an adapter:                                                    *
  //   *    https://sailsjs.com/plugins/databases                                 *
  //   *                                                                          *
  //   * 2. Install it as a dependency of your Sails app.                         *
  //   *    (For example:  npm install sails-mysql --save)                        *
  //   *                                                                          *
  //   * 3. Then pass it in, along with a connection URL.                         *
  //   *    (See https://sailsjs.com/config/datastores for help.)                 *
  //   *                                                                          *
  //   ***************************************************************************/
  //   adapter: 'sails-postgresql',
  //   // url: 'postgresql://postgres:admin@123@localhost:5432/loja-virtual',
  //   // url: 'postgres://splfaklcaaqetu:f2f64fedb88dd629798962a27e48193504a4288239717c6f2ccbd67bb11e9b3c@ec2-107-21-126-193.compute-1.amazonaws.com:5432/d65sn1id6ee71g'
  //   host: 'ec2-107-21-126-193.compute-1.amazonaws.com',
  //   port: 5432,
  //   user: 'splfaklcaaqetu',
  //   password: 'f2f64fedb88dd629798962a27e48193504a4288239717c6f2ccbd67bb11e9b3c',
  //   database: 'd65sn1id6ee71g',
  //   pool: false,
  //   ssl: true
  // },

  localPostgres: {
    adapter: 'sails-postgresql',
    url: 'postgresql://postgres:admin@123@localhost:5432/loja-virtual'
  },

  producao: {
    adapter: 'sails-postgresql',
    host: 'ec2-107-21-126-193.compute-1.amazonaws.com',
    port: 5432,
    user: 'splfaklcaaqetu',
    password: 'f2f64fedb88dd629798962a27e48193504a4288239717c6f2ccbd67bb11e9b3c',
    database: 'd65sn1id6ee71g',
    pool: false,
    ssl: true
  }
};
