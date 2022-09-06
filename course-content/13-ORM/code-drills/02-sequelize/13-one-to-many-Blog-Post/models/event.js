module.exports = function (sequelize, DataTypes) {
  var Event = sequelize.define("Event", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

  // associating Events table to Users and UserEvents
  Event.associate = models => {
    // Each Event belongs to A User
    models.Event.belongsTo(models.User, { as: "host" })
    // Each Event can have many UserEvents
    models.Event.hasMany(models.UserEvent, {
      // this deletes all associated UserEvents when an Event is deleted
      onDelete: "cascade"
    })
  }
  return Event;
}