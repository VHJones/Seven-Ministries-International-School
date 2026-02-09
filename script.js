// Mobile menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
  
  // Close mobile menu when clicking on a link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if(targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if(targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if(window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // Tab functionality
  document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons and content
      document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
      });
      document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
      });
      
      // Add active class to clicked button
      button.classList.add('active');
      
      // Show corresponding content
      const tabId = button.getAttribute('data-tab');
      document.getElementById(`${tabId}-form`).classList.add('active');
    });
  });
  
  // General form validation and submission
  const generalForm = document.getElementById('general-enrollment-form');
  const generalFormSuccess = document.getElementById('general-form-success');
  
  generalForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Reset errors
    document.querySelectorAll('[id$="-error"]').forEach(el => {
      el.style.display = 'none';
    });
    
    // Validate form
    let isValid = true;
    
    const childName = document.getElementById('child-name');
    const childAge = document.getElementById('child-age');
    const dob = document.getElementById('dob');
    const address = document.getElementById('address');
    const parentName = document.getElementById('parent-name');
    const phone = document.getElementById('phone');
    const email = document.getElementById('email');
    const country = document.getElementById('country');
    const program = document.getElementById('program');
    
    if(!childName.value.trim()) {
      document.getElementById('child-name-error').style.display = 'block';
      isValid = false;
    }
    
    if(childAge.value < 3 || childAge.value > 18) {
      document.getElementById('child-age-error').style.display = 'block';
      isValid = false;
    }
    
    if(!dob.value) {
      document.getElementById('dob-error').style.display = 'block';
      isValid = false;
    }
    
    if(!address.value.trim()) {
      document.getElementById('address-error').style.display = 'block';
      isValid = false;
    }
    
    if(!parentName.value.trim()) {
      document.getElementById('parent-name-error').style.display = 'block';
      isValid = false;
    }
    
    if(!phone.value.trim()) {
      document.getElementById('phone-error').style.display = 'block';
      isValid = false;
    }
    
    if(!email.value.trim() || !isValidEmail(email.value)) {
      document.getElementById('email-error').style.display = 'block';
      isValid = false;
    }
    
    if(!country.value) {
      document.getElementById('country-error').style.display = 'block';
      isValid = false;
    }
    
    if(!program.value) {
      document.getElementById('program-error').style.display = 'block';
      isValid = false;
    }
    
    if(isValid) {
      // Show success message
      generalFormSuccess.style.display = 'block';
      generalForm.reset();
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        generalFormSuccess.style.display = 'none';
      }, 5000);
    }
  });
  
  // After School form validation and submission
  const afterSchoolForm = document.getElementById('after-school-enrollment-form');
  const afterSchoolFormSuccess = document.getElementById('after-school-form-success');
  
  afterSchoolForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Reset errors
    document.querySelectorAll('[id$="-error"]').forEach(el => {
      el.style.display = 'none';
    });
    
    // Validate form
    let isValid = true;
    
    const childFName = document.getElementById('as-child-fname');
    const childSName = document.getElementById('as-child-sname');
    const currentSchool = document.getElementById('as-current-school');
    const asDob = document.getElementById('as-dob');
    const asAddress = document.getElementById('as-address');
    const asParentName = document.getElementById('as-parent-name');
    const asPhone = document.getElementById('as-phone');
    const asProgram = document.getElementById('as-program');
    
    if(!childFName.value.trim()) {
      document.getElementById('as-child-fname-error').style.display = 'block';
      isValid = false;
    }
    
    if(!childSName.value.trim()) {
      document.getElementById('as-child-sname-error').style.display = 'block';
      isValid = false;
    }
    
    if(!currentSchool.value.trim()) {
      document.getElementById('as-current-school-error').style.display = 'block';
      isValid = false;
    }
    
    if(!asDob.value) {
      document.getElementById('as-dob-error').style.display = 'block';
      isValid = false;
    }
    
    if(!asAddress.value.trim()) {
      document.getElementById('as-address-error').style.display = 'block';
      isValid = false;
    }
    
    if(!asParentName.value.trim()) {
      document.getElementById('as-parent-name-error').style.display = 'block';
      isValid = false;
    }
    
    if(!asPhone.value.trim()) {
      document.getElementById('as-phone-error').style.display = 'block';
      isValid = false;
    }
    
    if(!asProgram.value) {
      document.getElementById('as-program-error').style.display = 'block';
      isValid = false;
    }
    
    if(isValid) {
      // Show success message
      afterSchoolFormSuccess.style.display = 'block';
      afterSchoolForm.reset();
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        afterSchoolFormSuccess.style.display = 'none';
      }, 5000);
    }
  });
  
  // Post-Secondary form validation and submission
  const postSecondaryForm = document.getElementById('post-secondary-enrollment-form');
  const psFormSuccess = document.getElementById('ps-form-success');
  
  postSecondaryForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Reset errors
    document.querySelectorAll('[id$="-error"]').forEach(el => {
      el.style.display = 'none';
    });
    
    // Validate form
    let isValid = true;
    
    const psFirstName = document.getElementById('ps-first-name');
    const psLastName = document.getElementById('ps-last-name');
    const psPhone = document.getElementById('ps-phone');
    const psBackground = document.getElementById('ps-background');
    const psProgram = document.getElementById('ps-program');
    
    if(!psFirstName.value.trim()) {
      document.getElementById('ps-first-name-error').style.display = 'block';
      isValid = false;
    }
    
    if(!psLastName.value.trim()) {
      document.getElementById('ps-last-name-error').style.display = 'block';
      isValid = false;
    }
    
    if(!psPhone.value.trim()) {
      document.getElementById('ps-phone-error').style.display = 'block';
      isValid = false;
    }
    
    if(!psBackground.value) {
      document.getElementById('ps-background-error').style.display = 'block';
      isValid = false;
    }
    
    if(!psProgram.value) {
      document.getElementById('ps-program-error').style.display = 'block';
      isValid = false;
    }
    
    if(isValid) {
      // Show success message
      psFormSuccess.style.display = 'block';
      postSecondaryForm.reset();
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        psFormSuccess.style.display = 'none';
      }, 5000);
    }
  });
  
  function isValidEmail(email) {
    const emailRegex = /^[\w\.-]+@[\w\.-]+\.[\w]+$/;
    return emailRegex.test(email);
  }
  
  // Animation on scroll
  function animateOnScroll() {
    const elements = document.querySelectorAll('.card, .curriculum-card, .contact-item');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if(elementPosition < screenPosition) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  }
  
  // Set initial styles for animation
  document.querySelectorAll('.card, .curriculum-card, .contact-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });
  
  window.addEventListener('scroll', animateOnScroll);
  // Trigger once on load
  window.addEventListener('load', animateOnScroll);

const slides = document.querySelectorAll('.slide');

  