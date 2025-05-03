import { getArticles } from "./api/articleApi";
import { renderArticleList } from "./components/articleList";
import { renderArticleForm } from "./components/articleForm";
import { showError } from "./utils/uiUtils";

export const initApp = async (): Promise<void> => {
    const app = document.getElementById('app') as HTMLDivElement;
    app.innerHTML = '';

    const container = document.createElement('div')
    container.className = 'container py-5'

    const header = document.createElement('header')
    header.className = 'text-center mb-5'
    const title = document.createElement('h1')
    title.className = 'header-title mb-3'
    title.textContent = 'Article Submission'
    header.appendChild(title)

    const row = document.createElement('div')
    row.className = 'row justify-content-center'

    const col = document.createElement('div')
    col.className = 'col-lg-8'

    const errorContainer = document.createElement('div')
    errorContainer.id = 'error-container'
    errorContainer.className = 'mb-4 d-none'

    const formContainer = document.createElement('div')
    formContainer.id = 'article-form-container'
    formContainer.className = 'mb-4'

    const listContainer = document.createElement('div')
    listContainer.id = 'article-list-container'

    col.appendChild(errorContainer)
    col.appendChild(formContainer)
    col.appendChild(listContainer)
    row.appendChild(col)
    container.appendChild(header)
    container.appendChild(row)

    app.appendChild(container)

    try {
     const articles = await getArticles()
     renderArticleForm()
     renderArticleList(articles)
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      showError(errorMessage);
    }
  };