'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    bio: DataTypes.TEXT,
    avatar: DataTypes.STRING,
    faveBread: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Post, { foreignKey: 'userId', onDelete: 'CASCADE', hooks: true })
    User.belongsToMany(models.Subbreaddit, {
      through: 'Subscription',
      foreignKey: 'userId',
      otherKey: 'subId'
    })
    User.hasMany(models.Subscription, {foreignKey: 'userId', onDelete: 'CASCADE', hooks: true})
  };
  return User;
};