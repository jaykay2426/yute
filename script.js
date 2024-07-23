document.addEventListener('DOMContentLoaded', () => {
  // Toggle wishlist icon
  const wishlistIcons = document.querySelectorAll('.wishlist i');
  
  wishlistIcons.forEach(icon => {
      icon.addEventListener('click', () => {
          if (icon.classList.contains('fa-regular')) {
              icon.classList.remove('fa-regular');
              icon.classList.add('fa-solid');
          } else {
              icon.classList.remove('fa-solid');
              icon.classList.add('fa-regular');
          }
      });
  });

  // Subscribe form functionality
  const subscribeForm = document.querySelector('.footer-subscribe form');
  subscribeForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const emailInput = subscribeForm.querySelector('input[type="email"]');
      const email = emailInput.value.trim();
      
      if (validateEmail(email)) {
          alert('Thank you for subscribing!');
          emailInput.value = '';
      } else {
          alert('Please enter a valid email address.');
      }
  });

  function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
  }
});




document.addEventListener('DOMContentLoaded', () => {
  const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

  const wishlistList = document.getElementById('wishlist-list');

  function renderWishlist() {
      wishlistList.innerHTML = '';
      wishlist.forEach((item, index) => {
          const productCard = document.createElement('div');
          productCard.classList.add('product-card');

          productCard.innerHTML = `
              <img src="${item.image}" alt="Product Image">
              <div class="product-info">
                  <h2>${item.name}</h2>
                  <p>${item.description}</p>
              </div>
              <div class="wishlist">
                  <i class="fa-regular fa-heart" data-index="${index}"></i>
              </div>
              <span class="preorder">${item.preorder}</span>
          `;

          wishlistList.appendChild(productCard);
      });
  }

  function addToWishlist(product) {
      wishlist.push(product);
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
      renderWishlist();
  }

  document.querySelectorAll('.wishlist i').forEach(icon => {
      icon.addEventListener('click', (e) => {
          const index = e.target.getAttribute('data-index');
          wishlist.splice(index, 1);
          localStorage.setItem('wishlist', JSON.stringify(wishlist));
          renderWishlist();
      });
  });

  renderWishlist();
});

// Assuming you have a way to trigger add to wishlist from another page
function handleAddToWishlist(product) {
  const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  wishlist.push(product);
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
}
























document.addEventListener('DOMContentLoaded', function () {
  const wishlistIcons = document.querySelectorAll('.add-to-wishlist');
  const wishlistContainer = document.getElementById('wishlist-container');

  // Load wishlist from localStorage
  loadWishlist();

  wishlistIcons.forEach(icon => {
      icon.addEventListener('click', function () {
          const productCard = icon.closest('.product-card');
          const productId = productCard.dataset.id;
          const productName = productCard.dataset.name;
          const productDescription = productCard.dataset.description;
          const productImage = 'url(/inspire.jpg)'; // Use the inspire.jpg image for wishlist

          addToWishlist({ id: productId, name: productName, description: productDescription, image: productImage });
      });
  });

  function addToWishlist(product) {
      let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
      const isProductInWishlist = wishlist.some(item => item.id === product.id);

      if (!isProductInWishlist) {
          wishlist.push(product);
          localStorage.setItem('wishlist', JSON.stringify(wishlist));
          displayWishlist();
      }
  }

  function removeFromWishlist(productId) {
      let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
      wishlist = wishlist.filter(item => item.id !== productId);
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
      displayWishlist();
  }

  function displayWishlist() {
      wishlistContainer.innerHTML = '';
      const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

      wishlist.forEach(product => {
          const productElement = document.createElement('div');
          productElement.classList.add('wishlist-item');
          productElement.innerHTML = `
              <div class="wishlist-image" style="background-image: ${product.image};"></div>
              <div class="product-info">
                  <h2>${product.name}</h2>
                  <p>${product.description}</p>
              </div>
              <button class="remove-from-wishlist" data-id="${product.id}">Remove</button>
          `;

          wishlistContainer.appendChild(productElement);
      });

      document.querySelectorAll('.remove-from-wishlist').forEach(button => {
          button.addEventListener('click', function () {
              const productId = button.dataset.id;
              removeFromWishlist(productId);
          });
      });
  }

  function loadWishlist() {
      displayWishlist();
  }
});


















document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navbarLeft = document.querySelector('.navbar-left');
    
    menuIcon.addEventListener('click', function() {
        navbarLeft.classList.toggle('active');
        
        // Toggle between hamburger and times icon
        if (navbarLeft.classList.contains('active')) {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-times');
        } else {
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        }
    });
});











document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.querySelector(".signup-form");
    const passwordInput = signupForm.querySelector("input[type='password'][placeholder='Password']");
    const confirmPasswordInput = signupForm.querySelector("input[type='password'][placeholder='Confirm Password']");
    const submitButton = signupForm.querySelector("button[type='submit']");

    signupForm.addEventListener("submit", function (event) {
        if (passwordInput.value !== confirmPasswordInput.value) {
            event.preventDefault();
            alert("Passwords do not match. Please check and try again.");
        }
    });
});
















document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.querySelector(".signup-form");
    const passwordInputs = signupForm.querySelectorAll("input[type='password']");
    const togglePasswordIcons = signupForm.querySelectorAll(".toggle-password");
    const submitButton = signupForm.querySelector("button[type='submit']");

    // Password match check
    signupForm.addEventListener("submit", function (event) {
        if (passwordInputs[0].value !== passwordInputs[1].value) {
            event.preventDefault();
            alert("Passwords do not match. Please check and try again.");
        }
    });

    // Toggle password visibility
    togglePasswordIcons.forEach(icon => {
        icon.addEventListener("click", function () {
            const input = this.previousElementSibling;
            if (input.type === "password") {
                input.type = "text";
                this.classList.remove("fa-eye");
                this.classList.add("fa-eye-slash");
            } else {
                input.type = "password";
                this.classList.remove("fa-eye-slash");
                this.classList.add("fa-eye");
            }
        });
    });
});





document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.querySelector(".signup-form");
    const passwordInputs = signupForm.querySelectorAll("input[type='password']");
    const togglePasswordIcons = signupForm.querySelectorAll(".toggle-password");
    const submitButton = signupForm.querySelector("button[type='submit']");

    // Password validation function
    function validatePassword(password) {
        const minLength = 8;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);

        return password.length >= minLength && hasUpperCase && hasLowerCase && hasNumber;
    }

    // Password match and validation check
    signupForm.addEventListener("submit", function (event) {
        const password = passwordInputs[0].value;
        const confirmPassword = passwordInputs[1].value;

        if (password !== confirmPassword) {
            event.preventDefault();
            alert("Passwords do not match. Please check and try again.");
        } else if (!validatePassword(password)) {
            event.preventDefault();
            alert("Password must be at least 8 characters long, contain a mix of uppercase and lowercase letters, and include at least one number.");
        }
    });

    // Toggle password visibility
    togglePasswordIcons.forEach(icon => {
        icon.addEventListener("click", function () {
            const input = this.previousElementSibling;
            if (input.type === "password") {
                input.type = "text";
                this.classList.remove("fa-eye");
                this.classList.add("fa-eye-slash");
            } else {
                input.type = "password";
                this.classList.remove("fa-eye-slash");
                this.classList.add("fa-eye");
            }
        });
    });
});














document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector(".login-form");
    const passwordInput = loginForm.querySelector("input[type='password']");

    // Password validation function
    function validatePassword(password) {
        const minLength = 8;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);

        return password.length >= minLength && hasUpperCase && hasLowerCase && hasNumber;
    }

    // Password validation check
    loginForm.addEventListener("submit", function (event) {
        const password = passwordInput.value;

        if (!validatePassword(password)) {
            event.preventDefault();
            alert("Password must be at least 8 characters long, contain a mix of uppercase and lowercase letters, and include at least one number.");
        }
    });
});












document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector(".login-form");
    const passwordInput = loginForm.querySelector("input[type='password']");
    const errorMessage = document.getElementById("error-message");

    // Password validation function
    function validatePassword(password) {
        const minLength = 8;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);

        if (password.length < minLength) {
            return "Password must be at least 8 characters long.";
        }
        if (!hasUpperCase) {
            return "Password must contain at least one uppercase letter.";
        }
        if (!hasLowerCase) {
            return "Password must contain at least one lowercase letter.";
        }
        if (!hasNumber) {
            return "Password must contain at least one number.";
        }
        return "";
    }

    // Password validation check
    loginForm.addEventListener("submit", function (event) {
        const password = passwordInput.value;
        const error = validatePassword(password);

        if (error) {
            event.preventDefault();
            errorMessage.textContent = error;
            errorMessage.style.display = "block";
        } else {
            errorMessage.style.display = "none";
        }
    });
});





// Add this JavaScript to your script.js file

document.getElementById('reset-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Display the alert message
    var alertMessage = document.getElementById('alert-message');
    alertMessage.style.display = 'block';
    
    // Simulate an asynchronous operation (e.g., sending a reset password email)
    setTimeout(function() {
        alertMessage.style.display = 'none';
        alert('Password reset link has been sent to your email.');
        // Optionally, redirect to another page or perform other actions here
    }, 3000); // Adjust the delay as needed
});
