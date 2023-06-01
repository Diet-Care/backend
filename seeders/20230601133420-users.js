'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        uuid : 'auadwbakcwau',
        alamat: 'Jl. rajawali',
        name: 'admin',
        email: 'admin@gmail.com',
        img_profile: null,
        password: 'Kucing12',
        role: 'admin'
      },
      
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
