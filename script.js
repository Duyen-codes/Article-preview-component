shareBtn = document.querySelector('.share-btn');
socialWrapper = document.querySelector('.social-wrapper')
shareIcon = document.querySelector('.share-icon')

shareBtn.addEventListener('click', () => {
    shareBtn.classList.toggle('active');
    socialWrapper.classList.toggle('active');
    shareIcon.classList.toggle('active');

})