document.addEventListener("DOMContentLoaded", () => {

    // Sternebewertung
    document.querySelectorAll('.stars').forEach(starContainer => {
      const id = starContainer.getAttribute('data-id');
      const stars = starContainer.textContent.trim().split('');
      starContainer.innerHTML = stars.map((s, i) => `<span data-star="${i+1}">${s}</span>`).join('');
    
      starContainer.addEventListener('click', e => {
        if (e.target.dataset.star) {
          const rating = e.target.dataset.star;
          document.querySelector(`#rating-count-${id}`).textContent = `Bewertung: ${rating} Sterne`;
    
          starContainer.querySelectorAll('span').forEach(star => {
            star.classList.toggle('active', star.dataset.star <= rating);
          });
        }
      });
    });
    
    // Kommentare
    document.querySelectorAll('.comment-section').forEach(section => {
      const textarea = section.querySelector('textarea');
      const button = section.querySelector('.submit-comment');
      const list = section.querySelector('.comments-list');
    
      button.addEventListener('click', () => {
        const text = textarea.value.trim();
        if (text !== '') {
          const commentDiv = document.createElement('div');
          commentDiv.classList.add('comment', 'p-2', 'bg-light', 'rounded', 'mt-2');
          commentDiv.textContent = text;
          list.appendChild(commentDiv);
          textarea.value = '';
        }
      });
    });

});
  