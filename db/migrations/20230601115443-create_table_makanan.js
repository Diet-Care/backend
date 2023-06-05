  module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('makanan', {
      uuid: {
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      judul_makanan:{
          type: Sequelize.DataTypes.STRING,
      },
      deskripsi_singkat:{
          type: Sequelize.DataTypes.STRING,
      },
      deskripsi_lengkap:{
          type: Sequelize.DataTypes.STRING(255),
      },
      img_makanan:{
          type: Sequelize.DataTypes.STRING,
          allowNull: true,
      },
      tips_makanan:{
          type: Sequelize.DataTypes.STRING(255),
      },
      jumlah_kalori:{
          type: Sequelize.DataTypes.STRING,
      },
      level: {
          type: Sequelize.DataTypes.STRING,
      },
      kategori:{
          type: Sequelize.DataTypes.ENUM('makanan', 'olahraga'),
      }
    }, {
      timestamps: false,
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('makanan');
  }
};
