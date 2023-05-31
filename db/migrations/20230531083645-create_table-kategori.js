module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('kategori', {
      id:{
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nama_kategori:{
          type: Sequelize.DataTypes.STRING,
      },
      deskripsi_kategori:{
          type: Sequelize.DataTypes.STRING,
      },
    }, {
      timestamps: false,
  })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('kategori');
  }
};
