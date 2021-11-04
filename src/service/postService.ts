import { Post } from "../model/post";
import * as PostRepository from "../repository/postRepository";

export const create = async (post: Post): Promise<Post> => {
    return PostRepository.create(post);
}
export const listAll = async (): Promise<Post[]> => {
    return PostRepository.listAll();
}
export const getPost = async (id: number): Promise<Post> => {
    return PostRepository.getPost(id);
}
export const update = async (post: Post): Promise<Post> => {
    return PostRepository.update(post);
}
export const remove = async (id: number): Promise<null | void> => {
    if(getPost(id)===null){
        return null;
    }
   PostRepository.remove(id);
}
export const filterByCategory = async (queryFilter: string): Promise<Post[]> => {
    return PostRepository.filterByCategory(queryFilter);
}
export const search = async (querySearch: string): Promise<Post[]> => {
    return PostRepository.search(querySearch);
}