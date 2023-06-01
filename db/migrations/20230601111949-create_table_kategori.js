module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('kategori', {
      uuid: {
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      id_kategori:{
          type: Sequelize.DataTypes.INTEGER,
      },
      nama_kategori:{
          type: Sequelize.DataTypes.STRING,
      },
      deskripsi_kategori:{
          type: Sequelize.DataTypes.STRING,
      }
    }, {
      timestamps: false,
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('kategori');
  }
};
