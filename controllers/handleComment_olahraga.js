const { Comment_olahraga, Olahraga } = require("../db/models");
require("dotenv").config;
const { created, ok, notfound, bad, servererror } = require("./statuscode");

const handleCommentOlahragaAll = async (req, res) => {
    const comment_olahraga = await Comment_olahraga.findAll({
        include: {
            model: Olahraga,
            as: 'olahraga'
        }
    });
    const response = {
        meta: {
            total: comment_olahraga.length
        },
        data: comment_olahraga,
    }
    res.status(created).json(response);
    return;
};

const handleCommentOlahragaById = async (req, res) => {
    const uuid = req.params.id;
    const comment_olahraga = await Comment_olahraga.findAll({
        where: {
            uuid: uuid
        }
    });
    let response = {
        data: comment_olahraga
    }
    if(!comment_olahraga){
        res.status(notfound);
        res.json({
            message: 'Comment not Found'
        });
        return;
    }
    res.status(created).json(response)
    return
};

const handleCreateCommentOlahraga = async function(req, res) {
    let response = {}
    try {
    const newComment = await Comment_olahraga.create({
        id_olahraga: req.params.id,
        bintang: req.body.bintang,
        comment_review: req.body.deskripsi_review
    });

    response = {
        status: "SUCCESS",
        message: "Create New Comment",
        data: newComment
    }
    return res.status(created).json(response);
} catch(error) {
    response = {
        status: "ERROR",
        message: error.message
    }
       return res.status(bad).json(response)
    }
}

const handleUpdateCommentOlahraga = async function(req,res) {
    let response = {};
    const uuid = req.params.id;
    const findcomment = Comment_olahraga.findOne({
        where: {
            uuid: uuid
        }
    });

    if(!findcomment){
        response = {
            message: "Comment not Found"
        }
        return res.status(notfound).json(response);
    } else {
        const bintang = req.body.bintang;
        const comment_review = req.body.comment_review
        
        const updatecomment =await Comment_olahraga.update({
            bintang : bintang,
            comment_review : comment_review,
        },
        {
            where: {
                uuid : uuid
            }
        });
        response = {
            status: "SUCCESS",
            message: "Update Comment",
            data: updatecomment
        }
    }
    res.status(created).json(response)
    return
}

const handleDeleteCommentOlahragaById = async function(req, res){
    const uuid = req.params.id;

    try {
        const deleteCommentOlahraga = await Comment_olahraga.destroy({
            where: {
                uuid: uuid
            },
        });
        if(deleteCommentOlahraga){
            return res.status(ok).json({
                message: "Comment Has Been Deleted"
            });
        }else{
            return res.status(notfound).json({
                error: 'Comment not Found'
            });
        }
    }catch (error){
        return res.status(servererror).json({
            message: error.message
        });
    }
}

const handleDeleteAllCommentOlahraga = async function(req, res){
    try {
        await Comment_olahraga.destroy({
            where: {},
            truncate: true,
        });
        return res.status(ok).json({message : "succesfuly delete all"});
    } catch (error){
        return res.status(servererror).json({
            message: error.message
        });
    }
};

module.exports = {
    handleCreateCommentOlahraga,
    handleCommentOlahragaAll,
    handleCommentOlahragaById,
    handleUpdateCommentOlahraga,
    handleDeleteCommentOlahragaById,
    handleDeleteAllCommentOlahraga
}