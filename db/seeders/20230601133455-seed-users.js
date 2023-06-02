module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      uuid: 'auy23gu123ue13',
      alamat: 'Jl. rajawali No. 12 medan timur',
      email: 'aliesp241@gmail.com',
      img_profile: null,
      name: 'John Doe',
      password: 'ali12345',
      role: 'admin',
 }], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('People', null, {});
  }
};
