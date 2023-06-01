  module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('makanan', {
      uuid: {
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      id_kategori:{
          type: Sequelize.DataTypes.UUID,
          defaultValue: Sequelize.DataTypes.UUIDV4,
          references: {
              model: {
                  tableName: 'kategori'
              },
              key: 'uuid'
          },
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
      },
      tips_makanan:{
          type: Sequelize.DataTypes.STRING(255),
      },
      jumlah_kalori:{
          type: Sequelize.DataTypes.STRING,
      },
      level: {
          type: Sequelize.DataTypes.STRING,
      }
    }, {
      timestamps: false,
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('makanan');
  }
};
