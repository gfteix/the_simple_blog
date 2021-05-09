import {Request, Response} from "express";
import {Post} from "../model/Post";

const db = require("../database/database");

class PostController{

    async index(request: Request, response: Response) {
      
        const post = new Post();
        let allPosts;
        if(request.query.filter){
            const value = request.query.filter
            console.log(request.query.filter)
            allPosts = await post.filter(value.toString())

        }else if(request.query.search){
            const value = request.query.search
            allPosts = await post.search(value.toString())
           
        }else{
            allPosts = await post.get()
        }

        return response.status(200).render("index", {posts: allPosts})
    }
    async create_page(request: Request, response: Response){
        return response.render("create");
    }
    async create(request: Request, response: Response) {
        const post = new Post();

        await post.create(request.body.title,
            request.body.content,
            request.body.category,
            request.body.author 
            );

            return response.redirect("/");

    }
    async post(request: Request, response: Response) {
        const post = new Post();
        const postId = Number(request.params.id);

        const data = await post.returnPost(postId)

        return response.status(200).render("post", {post: data})

    }
    async show(request: Request, response: Response) {
        const post = new Post();
        const postId = Number(request.params.id);
        let data = await post.returnPost(postId);

        return response.status(200).render("post-edit", {post: data})

        
    }
    async update(request: Request, response: Response) {
        const post = new Post();
        const postId = Number(request.params.id);

        await post.update(postId, request.body.title,
            request.body.content,
            request.body.category,
            request.body.author)

        return response.redirect("/");

    }
    async delete(request: Request, response: Response) {
        const post = new Post();

        const postId = Number(request.params.id);
        await post.delete(postId)

        return response.redirect("/");
    }
}

export {PostController}
