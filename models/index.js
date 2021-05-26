const User = require('./User');
const Project = require('./Project');


module.exports = { User, Project };
const User = require('./User');
const Comment = require('./comment');
const Project = require('./Project');
const { post } = require('../controllers');

Post.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
    foreignKey: 'postId', 
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

module.exports = {
    User,
    Comment,
    Project
};

