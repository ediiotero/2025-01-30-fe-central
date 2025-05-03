import { createArticle } from '../api/articleApi';
import { CreateArticleData } from '../models/article';
import { showError } from '../utils/uiUtils';
import { getArticles } from '../api/articleApi';
import { renderArticleList } from './articleList';


export const renderArticleForm = (): void => {
    const formContainer = document.getElementById('article-form-container') as HTMLDivElement;
    formContainer.innerHTML = '';
    
    const form = document.createElement('form');
    form.className = 'article-form card p-4 mb-4';
    form.id = 'create-article-form';
    
    const formTitle = document.createElement('h3');
    formTitle.className = 'mb-3 text-primary';
    formTitle.textContent = 'Submit New Article';
    
    const titleGroup = document.createElement('div');
    titleGroup.className = 'mb-3';

    const titleLabel = document.createElement('label');
    titleLabel.htmlFor = 'article-title';
    titleLabel.className = 'form-label';
    titleLabel.textContent = 'Title';
    
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.className = 'form-control';
    titleInput.id = 'article-title';
    titleInput.placeholder = 'Enter article title';
    titleInput.required = true;
    
    titleGroup.appendChild(titleLabel);
    titleGroup.appendChild(titleInput);

    const bodyGroup = document.createElement('div');
    bodyGroup.className = 'mb-3';
    
    const bodyLabel = document.createElement('label');
    bodyLabel.htmlFor = 'article-body';
    bodyLabel.className = 'form-label';
    bodyLabel.textContent = 'Content';
    
    const bodyInput = document.createElement('textarea');
    bodyInput.className = 'form-control';
    bodyInput.id = 'article-body';
    bodyInput.placeholder = 'Enter article content';
    bodyInput.rows = 5;
    bodyInput.required = true;
    
    bodyGroup.appendChild(bodyLabel);
    bodyGroup.appendChild(bodyInput);

    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.className = 'btn btn-primary';
    submitBtn.innerHTML = '<i class="bi bi-send"></i> Submit Article';
    
    form.appendChild(formTitle);
    form.appendChild(titleGroup);
    form.appendChild(bodyGroup);
    form.appendChild(submitBtn);

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const titleValue = (document.getElementById('article-title') as HTMLInputElement).value.trim();
        const bodyValue = (document.getElementById('article-body') as HTMLTextAreaElement).value.trim();
        
        if (!titleValue || !bodyValue) {
          showError('Title and content are required');
          return;
        }
        
        const newArticle: CreateArticleData = {
          title: titleValue,
          body: bodyValue,
          userId: 1
        };
        
        try {
          await createArticle(newArticle);
          form.reset();
          
          const articles = await getArticles();
          renderArticleList(articles);
          
          // Show success message
          const successAlert = document.createElement('div');
          successAlert.className = 'alert alert-success mt-3';
          successAlert.textContent = 'Article submitted successfully! (Note: This is a mock API, so no actual data is saved)';
          form.appendChild(successAlert);
          
          setTimeout(() => {
            successAlert.remove();
          }, 5000);
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : 'Failed to create article';
          showError(errorMessage);
        }
      });
      
      formContainer.appendChild(form);
}