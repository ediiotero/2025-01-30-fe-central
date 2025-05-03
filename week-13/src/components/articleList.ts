import { Article } from "../models/article";

export const renderArticleList = (articles: Article[]): void => {
    const listContainer = document.getElementById('article-list-container') as HTMLDivElement
    listContainer.innerHTML = ''

    const listTitle = document.createElement('h3')
    listTitle.className = 'mb-4'
    listTitle.textContent = 'Recent Articles'
    listContainer.appendChild(listTitle)

    if(articles.length === 0) {
        const emptyMessage = document.createElement('div');
        emptyMessage.className = 'alert alert-info text-center';
        emptyMessage.textContent = 'No articles found.';
        listContainer.appendChild(emptyMessage);
        return;
    }

    articles.forEach(article => {
        const articleCard = document.createElement('div');
        articleCard.className = 'card mb-3';
        
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        
        const title = document.createElement('h5');
        title.className = 'card-title';
        title.textContent = article.title;
        
        const body = document.createElement('p');
        body.className = 'card-text';
        body.textContent = article.body;
        
        cardBody.appendChild(title);
        cardBody.appendChild(body);
        articleCard.appendChild(cardBody);
        listContainer.appendChild(articleCard);
      });
}