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
        status : "SUCCESS",
        message: "Get All Sports Comment",
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
        status: "SUCCESS",
        message: "Get Comment Detail",
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
        comment_review: req.body.comment_review
    });

    response = {
        status: "SUCCESS",
        message: "Create New Comment",
        data: newComment
    }
    return res.status(ok).json(response);
} catch(error) {
    response = {
        status: "ERROR",
        message: error.message
    }
       return res.status(bad).json(response)
    }
}

const handleUpdateCommentOlahraga = async function(req,res) {
    try {
        const uuid = req.params.id;
        const body = req.body; 

        const comment_olahraga = await Comment_olahraga.findOne({
            where: {
                uuid: uuid
            }
        });

        if(!comment_olahraga){
            return res.status(notfound).json({
                message: "Message You Looking For Is Not Found"
            });
        }
        const id_olahraga = body.id_olahraga;
        const bintang = body.bintang;
        const comment_review = body.comment_review;

        const updatecommentolahraga = await Comment_olahraga.update({
            id_olahraga: id_olahraga,
            bintang: bintang,
            comment_review: comment_review,
        }, {
            where: {
                uuid: uuid
            }
        });

        if(updatecommentolahraga){
            response = {
                status: "SUCCESS",
                message: "Update Success",
            }
            return res.status(created).json(response);
        }
    } catch (error) {
        return res.status(servererror).json({
            error: error.message
        });
    };
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
            error: 'Server error',
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
            error: 'Server Error',
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