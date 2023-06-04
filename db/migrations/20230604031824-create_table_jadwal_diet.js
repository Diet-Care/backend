module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('jadwal_diet', {
      uuid: {
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      uuid_user: {
          type: Sequelize.DataTypes.UUID,
          defaultValue: Sequelize.DataTypes.UUIDV4,
          references: {
              model: {
                  tableName: 'users'
              },
              key: 'uuid'
          },
      },
      uuid_olahraga: {
          type: Sequelize.DataTypes.UUID,
          defaultValue: Sequelize.DataTypes.UUIDV4,
          references: {
              model: {
                  tableName: 'olahraga'
              },
              key: 'uuid'
          },
      },
      uuid_makanan: {
          type: Sequelize.DataTypes.UUID,
          defaultValue: Sequelize.DataTypes.UUIDV4,
          references: {
              model: {
                  tableName: 'makanan'
              },
              key: 'uuid'
          },
      },
      level: {
          type: Sequelize.DataTypes.STRING,
      },
      tgl_mulai: {
          type: Sequelize.DataTypes.DATE,
      },
      tgl_selesai: {
          type: Sequelize.DataTypes.DATE,
      }
    }, {
      timestamps: false,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('jadwal_diet');
  }
};
