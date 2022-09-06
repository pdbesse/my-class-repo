const { School, Class, Professor } = require('../models');

const resolvers = {
  Query: {
    schools: async () => {
      // https://mongoosejs.com/docs/populate.html#populating-multiple-paths
      return await School.find({}).populate('classes').populate({
        path: 'classes',
        populate: 'professor'
      });
    },
    classes: async () => {
      return await Class.find({}).populate('professor');
    },
    professors: async () => {
      return await Professor.find({});
    }
  }
};

module.exports = resolvers;
