export const showError = (message: string): void => {
    const errorContainer = document.getElementById('error-container')
    if(errorContainer) {
        errorContainer.innerHTML = `
            <div class="alert alert-danger error-message d-flex align-items-center">
                <i class="bi bi-exclamation-triangle-fill me-2"></i>
                <div>${message}</div>
                <button type="button" class="btn-close ms-auto" aria-label="Close"></button>
            </div>
        `
    }
    
    errorContainer?.classList.remove('d-none')

    const closeButton = errorContainer?.querySelector('.btn-close')
    if(closeButton){
        closeButton.addEventListener('click', () => {
            errorContainer?.classList.add('d-none')
        })
    }

    setTimeout(() => {
        errorContainer?.classList.add('d-none')
    }, 5000)
}