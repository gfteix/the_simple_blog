import {Request, Response} from "express";
import {Post} from "../model/post";
import * as PostService from "../service/postService";

const db = require("../database/database");

class PostController{

    async index(request: Request, response: Response) {
     
        try{

            let posts: Post[] = [];
            if(request.query.filter){
                const value = request.query.filter
                console.log(request.query.filter)
                posts = await PostService.filterByCategory(value.toString())
    
            }else if(request.query.search){
                const value = request.query.search
                posts = await PostService.search(value.toString())
               
            }else{
                posts = await PostService.listAll();
            }
            response.status(200).render("index", {posts: posts});
        }catch(error){
            response.status(500).send(error);
        }
    }
    async create_page(request: Request, response: Response){
        return response.render("create");
    }
    async create(request: Request, response: Response) {
        try{
            const post = request.body as Post;
            console.log(post);
            await PostService.create(post);
            return response.status(200).redirect("/");
        }catch(error){
            return response.status(500).send(error);
        }
    }
    async editPost(request: Request, response: Response){
        try{
            const postId = Number(request.params.id);
            const posts: Post[] = await PostService.getPost(postId)
            return response.status(200).render("post-edit", {post: posts[0]})
        }catch(error){
            return response.status(500).send(error);
        }   
        
    }
    async post(request: Request, response: Response) {
        try{
            const postId = Number(request.params.id);
            const posts: Post[] = await PostService.getPost(postId)
            console.log(posts);
            return response.status(200).render("post", {post: posts[0]})
        }catch(error){
            return response.status(500).send(error);
        }
    }
    async update(request: Request, response: Response) {
        try{
            const post: Post = {
                id: Number(request.params.id),
                title: request.body.title,
                content: request.body.content,
                category: request.body.category,
                author: request.body.author
            }  
            console.log(post); 
            await PostService.update(post)
            return response.status(200).redirect("/");
        }catch(error){
            return response.status(500).send(error);
        }
    }
    async delete(request: Request, response: Response) {
        try{
            const postId = Number(request.params.id);
            await PostService.remove(postId);
            return response.status(200).redirect("/");
        }catch(error){
            return response.status(500).send(error);
        }
    }
}
export {PostController}
