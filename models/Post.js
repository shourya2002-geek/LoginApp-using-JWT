const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },

    desc: {
        type: String,
        required: true,
    },

    postPhoto: {
        type: String,
        required: false,
    },

    username: {
        type: String,
        unique: true,
    },


}, { timestamps: true });

// export model user with UserSchema
module.exports = mongoose.model("Post", PostSchema);