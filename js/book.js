
class Book {
    constructor(author, language, subject, title) {

        this.author = author;
        this.language = language;
        this.subject = subject;
        this.title = title;
        this.comments = [];
        // TDD alternate 4
        this.assignCategory();

    }

    // function assigning category by generating a random page number between 1-200
    assignCategory() {
        let numPages = Math.floor(Math.random()* 200);
        if (numPages > 100){
            return this.category = 'novel';
        } else {
            return this.category = 'short story';
        }
    }

    render() {
        const li = document.createElement('li');
        li.classList.add('list-item');
        li.textContent = this.title

        // create comment button
        const commentBtn = document.createElement('button');
        commentBtn.setAttribute('id', 'comment-button');
        commentBtn.textContent = 'Comment';
        
        
        //create comment input and submit button, hide them by default
        const commentInput = document.createElement('input');
        const submitButton = document.createElement('button')
        commentInput.type = 'textarea';
        commentInput.setAttribute('placeholder', 'This book...');
        commentInput.setAttribute('max-length', '280');
        submitButton.textContent = 'Add Comment';
        commentInput.style.display = 'none';
        submitButton.style.display = 'none';
        
        // when comment button clicked, show comment input and submit button
        commentBtn.addEventListener('click', () => {
            commentInput.style.display = 'inline-block';
            submitButton.style.display = 'inline-block';

        });

        // when submit button is clicked, add the comment to the book and hide the comment input and submit button
        submitButton.addEventListener('click', () => {
            const commentText = commentInput.value;
            this.comments.push(commentText);
            commentInput.value = '';
            commentInput.style.display = 'none';
            submitButton.style.display = 'none';
            this.renderComments(li);
        });

        // adding comment button, input and submit button to LI
        li.appendChild(commentBtn);
        li.appendChild(commentInput);
        li.appendChild(submitButton);

        return li
    }

    renderComments(li){
        // remove existing comments
        const existingComments = li.querySelectorAll('.comment');
        for (let i = 0; i < existingComments.length; i++) {
            existingComments[i].remove();
        }

        // Render Comments
        for (let i = 0; i < this.comments.length; i++) {
            const comment = this.comments[i];
            const commentElement = document.createElement('p');
            commentElement.classList.add('comment');
            commentElement.textContent = comment;
            li.appendChild(commentElement)
        }
    }
} 

