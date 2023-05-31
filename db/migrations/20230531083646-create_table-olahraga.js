module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('olahraga', {
      id:{
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_kategori:{
        type: Sequelize.DataTypes.INTEGER,
        references: {
            model: {
                tableName: 'kategori'
            },
            key: 'id'
        }
      },
      judul_olahraga:{
          type: Sequelize.DataTypes.STRING,
      },
      deskripsi_singkat:{
          type: Sequelize.DataTypes.STRING,
      },
      deskripsi_lengkap:{
          type: Sequelize.DataTypes.STRING,
      },
      img_olahraga:{
          type: Sequelize.DataTypes.STRING,
      },
      tips_olahraga:{
          type: Sequelize.DataTypes.STRING(255),
      },
      jumlah_kalori:{
          type: Sequelize.DataTypes.STRING,
      }
    }, {
      timestamps: false,
  })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('olahraga');
  }
};
