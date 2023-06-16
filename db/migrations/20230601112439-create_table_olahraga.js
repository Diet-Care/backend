module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('olahraga', {
      uuid: {
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      judul:{
          type: Sequelize.DataTypes.TEXT,
      },
      deskripsi_singkat:{
          type: Sequelize.DataTypes.TEXT,
      },
      deskripsi_lengkap:{
          type: Sequelize.DataTypes.TEXT,
      },
      img:{
          type: Sequelize.DataTypes.STRING,
          allowNull: true,
      },
      tips:{
          type: Sequelize.DataTypes.TEXT,
      },
      jumlah_kalori:{
          type: Sequelize.DataTypes.TEXT,
      },
      level: {
          type: Sequelize.DataTypes.STRING,
      },
      kategori: {
          type: Sequelize.DataTypes.ENUM('makanan', 'olahraga'),
      }
    }, {
      timestamps: false,
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('olahraga');
  }
};
