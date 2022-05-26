'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subbreaddit = sequelize.define('Subbreaddit', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    bannerImg: DataTypes.STRING
  }, {});
  Subbreaddit.associate = function(models) {
    // associations can be defined here
    Subbreaddit.hasMany(models.Post, {foreignKey: 'subId', onDelete: 'CASCADE', hooks: true})
    Subbreaddit.belongsToMany(models.User, {
      through: 'Subscription',
      foreignKey: 'subId',
      otherKey: 'userId'
    })
  };
  return Subbreaddit;
};