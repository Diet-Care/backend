module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      uuid: {
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      name:{
          type: Sequelize.DataTypes.STRING(255),
      },
      email:{
          type: Sequelize.DataTypes.STRING,
      },
      password:{
          type: Sequelize.DataTypes.STRING(255),
      },
      role:{
          type: Sequelize.DataTypes.ENUM('admin', 'user')
      },
      gender: {
          type: Sequelize.DataTypes.STRING,
      },
      umur : {
          type: Sequelize.DataTypes.INTEGER,
      },
      geografis: {
          type: Sequelize.DataTypes.STRING,
      },
      profesi: {
          type: Sequelize.DataTypes.STRING,
      },
      alamat:{
          type: Sequelize.DataTypes.STRING(255),
      },
      img_profile:{
          type: Sequelize.DataTypes.STRING,
      }
    }, {
      timestamps: false,
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
