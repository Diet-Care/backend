module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('kontak', {
      uuid: {
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      name:{
        type: Sequelize.DataTypes.STRING,
      },
      email: {
        type: Sequelize.DataTypes.STRING,
      },
      pesan: {
        type: Sequelize.DataTypes.STRING,
      },
    }, {
      timestamps: false,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('kontak');
  }
};
