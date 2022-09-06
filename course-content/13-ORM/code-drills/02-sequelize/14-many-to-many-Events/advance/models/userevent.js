
module.exports = function (sequelize, DataTypes) {
  var UserEvent = sequelize.define("UserEvent", {
  });

  // associate UserEvents with Users and Events
  UserEvent.associate = models => {
    // Each UserEvent belongs to one User
    models.UserEvent.belongsTo(models.User, { onDelete: "cascade" });
    // and One Event
    models.UserEvent.belongsTo(models.Event, { onDelete: "cascade" });
  }

  return UserEvent;
}