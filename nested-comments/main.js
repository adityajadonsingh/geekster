document.addEventListener("DOMContentLoaded", function () {
    const commentWrapper = document.querySelector(".comment-wrapper");
  
    // Load comments from local storage on page load
    loadComments();
  
    // Function to save comments to local storage
    function saveComments() {
      const commentsData = [];
      document.querySelectorAll(".main-comment").forEach((commentElement) => {
        commentsData.push(serializeComment(commentElement));
      });
      localStorage.setItem("comments", JSON.stringify(commentsData));
    }
  
    // Function to load comments from local storage
    function loadComments() {
      const commentsData = JSON.parse(localStorage.getItem("comments") || "[]");
      commentsData.forEach((commentData) => {
        const commentElement = createCommentElement(commentData, false);
        commentWrapper.appendChild(commentElement);
      });
    }
  
    // Function to serialize comment data (recursively for replies)
    function serializeComment(commentElement) {
      const username = commentElement.querySelector(".username").textContent;
      const date = commentElement.querySelector(".date").textContent;
      const text = commentElement.querySelector(".user-comment p").textContent;
      const replies = [];
      commentElement.querySelectorAll(":scope > .text-box > .main-comment").forEach((reply) => {
        replies.push(serializeComment(reply));
      });
      return { username, date, text, replies };
    }
  
    // Function to create a new comment or reply element from data
    function createCommentElement(commentData, isReply = false) {
      const { username, date, text, replies } = commentData;
  
      const mainComment = document.createElement("div");
      mainComment.classList.add("main-comment");
  
      if (isReply) mainComment.classList.add("ms-4");
  
      mainComment.innerHTML = `
        <div class="img-box">
          <div class="image">
            <img src="./images/user.png" alt="User Image">
          </div>
        </div>
        <div class="text-box ms-3">
          <div class="user-info">
            <span class="username d-block">${username}</span>
            <span class="date">${date}</span>
          </div>
          <div class="user-comment mb-2">
            <p>${text}</p>
          </div>
          <button class="reply-btn"><i class="bi bi-reply-fill me-2"></i><span>Reply</span></button>
          <button class="edit-btn ms-2"><i class="bi bi-pencil-fill me-2"></i><span>Edit</span></button>
        </div>
      `;
  
      // Add event listeners for reply and edit buttons
      const replyBtn = mainComment.querySelector(".reply-btn");
      replyBtn.addEventListener("click", () => addReplyInput(mainComment));
  
      const editBtn = mainComment.querySelector(".edit-btn");
      editBtn.addEventListener("click", () => editComment(mainComment));
  
      // Recursively create and append replies
      replies.forEach((replyData) => {
        const replyElement = createCommentElement(replyData, true);
        mainComment.querySelector(".text-box").appendChild(replyElement);
      });
  
      return mainComment;
    }
  
    // Function to add a reply input area to a comment
    function addReplyInput(commentElement) {
        if (commentElement.querySelector(".reply-input")) return;
      
        const replyInput = document.createElement("div");
        replyInput.classList.add("reply-input", "mt-3");
      
        replyInput.innerHTML = `
          <input type="text" class="form-control mb-2" placeholder="Your name" maxlength="50" />
          <textarea class="form-control" maxlength="250" placeholder="Type your reply..."></textarea>
          <div class="d-flex justify-content-between mt-2">
            <small class="text-muted char-counter">0/250</small>
            <button class="btn btn-primary btn-sm post-reply-btn">Post Reply</button>
          </div>
        `;
      
        // Append reply input inside the text-box div
        commentElement.querySelector(".text-box").appendChild(replyInput);
      
        const usernameInput = replyInput.querySelector("input[type='text']");
        const textarea = replyInput.querySelector("textarea");
        const charCounter = replyInput.querySelector(".char-counter");
      
        // Update character counter for the reply text area
        textarea.addEventListener("input", () => {
          charCounter.textContent = `${textarea.value.length}/250`;
        });
      
        const postReplyBtn = replyInput.querySelector(".post-reply-btn");
        postReplyBtn.addEventListener("click", () => {
          const username = usernameInput.value.trim() || "Anonymous"; // Default to "Anonymous" if no name is entered
          const replyText = textarea.value.trim();
      
          if (replyText) {
            const replyData = {
              username,
              date: new Date().toLocaleDateString(),
              text: replyText,
              replies: []
            };
            const replyElement = createCommentElement(replyData, true);
            commentElement.querySelector(".text-box").appendChild(replyElement);
            replyInput.remove();
            saveComments();
          } else {
            alert("Please enter a reply message.");
          }
        });
      }
      
  
    // Function to edit a comment or reply
    function editComment(commentElement) {
      const commentTextElement = commentElement.querySelector(".user-comment p");
      const currentText = commentTextElement.textContent;
  
      const editInput = document.createElement("div");
      editInput.classList.add("edit-input", "mt-3");
  
      editInput.innerHTML = `
        <textarea class="form-control" maxlength="250">${currentText}</textarea>
        <div class="d-flex justify-content-between mt-2">
          <small class="text-muted char-counter">${currentText.length}/250</small>
          <button class="btn btn-primary btn-sm save-edit-btn">Save</button>
        </div>
      `;
  
      commentTextElement.replaceWith(editInput);
  
      const textarea = editInput.querySelector("textarea");
      const charCounter = editInput.querySelector(".char-counter");
      textarea.addEventListener("input", () => {
        charCounter.textContent = `${textarea.value.length}/250`;
      });
  
      const saveEditBtn = editInput.querySelector(".save-edit-btn");
      saveEditBtn.addEventListener("click", () => {
        const editedText = textarea.value.trim();
        if (editedText) {
          const updatedCommentText = document.createElement("p");
          updatedCommentText.textContent = editedText;
          editInput.replaceWith(updatedCommentText);
          saveComments();
        }
      });
    }
  
    // Add a new top-level comment with username input
    document.querySelector(".new-comment").addEventListener("click", () => {
      const newCommentText = prompt("Enter your comment (max 250 characters):", "");
      const username = prompt("Enter your name:", "Anonymous");
      
      if (newCommentText && newCommentText.length <= 250 && username) {
        const newCommentData = {
          username: username,
          date: new Date().toLocaleDateString(),
          text: newCommentText,
          replies: []
        };
        const newComment = createCommentElement(newCommentData);
        commentWrapper.appendChild(newComment);
        saveComments();
      }
    });
  });
  