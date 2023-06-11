const { Comment_makanan, Makanan } = require("../db/models");
const { notfound, created, servererror, ok } = require("./statuscode");

require("dotenv").config;

const handleCommentMakananAll = async (req, res) => {
    const comment_makanan = await Comment_makanan.findAll({
        include: {
            model: Makanan,
            as: 'makanan'
        }
    });
    const response = {
        data: comment_makanan,
    }
    res.status(created).json(response);
    return;
};

const handleCommentMakananById = async(req, res) => {
    const uuid = req.params.id;
    const comment_makanan = await Comment_makanan.findAll({
        where: {
            uuid: uuid
        }
    });
    let response = {
        data: comment_makanan
    }
    if(!comment_makanan){
        res.status(notfound);
        res.json({
            message: "Comment not Found"
        });
        return;
    }
    res.status(created).json(response);
    return;
};

const handleCreateCommentMakanan = async(req,res) => {
    const body = req.body;
    try {
        const newComment = await Comment_makanan.create({
            id_olahraga: body.id_olahraga,
            bintang: body.bintang,
            comment_review: body.comment_review
        });
        response = {
            data: newComment,
        };
        res.status(created).json(response);
    } catch (error){
        response = {
            status: "ERROR",
            message: error.message
        }
       return res.status(servererror).json(response);
    };
}

const handleUpdateCommentMakanan = async function(req, res){
    let response = {}
    const comment_makanan = Comment_makanan.findOne({
        where: {
            uuid: req.params.id
        }
    });

    if(!comment_makanan){
        response = {
            status: "SUCCESS",
            message: "Comment not Found"
        }
        return;
    }else{
        comment_makanan.bintang = req.body.bintang
        comment_makanan.comment_review
        comment_makanan.save()
        response = {
            status: "SUCCESS",
            message: "Comment Updated",
            data: comment_makanan
        }
    }
    res.status(created).json(response);
    return;
};

const handleDeleteComentMakananById = async function(req, res){
    const uuid = req.params.id;
    try {
        const deleteCommentMakanan = Comment_makanan.destroy({
            where: {
                uuid: uuid
            },
        });
        if(deleteCommentMakanan){
            return res.tatus(ok).json({
                message: "Comment Has Been Deleted"
            });
        }else{
            return res.status(notfound).json({
                errot: "Comment Not Found"
            });
        }
    }catch (error){
        console.error(error);
        return res.status(servererror).json({
            error: 'Server Error',
            message: error.message
        });
    }
}

const handleDeleteAllCommentMakanan = async function(req, res){
    try {
        await Comment_makanan.destroy({
            where: {},
            truncate: true,
        });
        return res.status(ok).send();
    } catch (error){
        return res.status(servererror).json({
            error: 'Server Error',
            message: error.message
        });
    }
};


module.exports = {
    handleCommentMakananAll,
    handleCommentMakananById,
    handleCreateCommentMakanan,
    handleUpdateCommentMakanan,
    handleDeleteAllCommentMakanan,
    handleDeleteComentMakananById
}