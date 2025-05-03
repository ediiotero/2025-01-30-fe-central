import { Article, CreateArticleData } from "../models/article";

const API_URL = 'https://jsonplaceholder.typicode.com/posts'

//Get
export const getArticles = async (): Promise<Article[]> => {
    try {
        const response = await fetch(`${API_URL}?_limit=10`)
        return await response.json()
    } catch (error) {
        throw error
    }
}

//Post
export const createArticle = async (articleData: CreateArticleData): Promise<Article> => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(articleData)
        })

        const newArticle = await response.json()
        console.log('New article created:', newArticle)
        return newArticle
    } catch (error) {
        console.error('Error creating article', error)
        throw error
    }
}