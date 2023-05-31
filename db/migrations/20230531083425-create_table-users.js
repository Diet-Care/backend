module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id:{
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
      alamat:{
          type: Sequelize.DataTypes.STRING(255),
      },
      img_profile:{
          type: Sequelize.DataTypes.STRING,
      }
    }, {
      timestamps: false,
  });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
