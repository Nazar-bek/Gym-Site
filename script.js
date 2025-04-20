// JavaScript for Header Popup Form
const headerButton = document.getElementById('headerButton');
const headerFormPopup = document.getElementById('headerFormPopup');
const closePopup = document.getElementById('closePopup');

headerButton.addEventListener('click', () => {
    headerFormPopup.style.display = 'flex';
});

closePopup.addEventListener('click', () => {
    headerFormPopup.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === headerFormPopup) {
        headerFormPopup.style.display = 'none';
    }
});

// Parallax Effect for Video Section
const bgVideo = document.querySelector('.bg-video');

window.addEventListener('scroll', () => {
    const offset = window.pageYOffset;
    bgVideo.style.transform = `translateY(${offset * 0.5}px)`;
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('.menu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Trainings Section Animation
const trainingItems = document.querySelectorAll('.training-item');

trainingItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.querySelector('.training-info').style.opacity = '1';
        item.querySelector('.training-info').style.transform = 'translateY(0)';
    });

    item.addEventListener('mouseout', () => {
        item.querySelector('.training-info').style.opacity = '0';
        item.querySelector('.training-info').style.transform = 'translateY(100%)';
    });
});

// Team Section Animation
const teamMembers = document.querySelectorAll('.team-member');

teamMembers.forEach(member => {
    member.addEventListener('mouseover', () => {
        member.style.transform = 'scale(1.1)';
    });

    member.addEventListener('mouseout', () => {
        member.style.transform = 'scale(1)';
    });
});

// Function to handle "Join Us" button and form popup
document.addEventListener('DOMContentLoaded', () => {
  const joinUsButton = document.querySelector('.btn-join');
  const formPopup = document.querySelector('.header-form-popup');
  const closeBtn = document.querySelector('.header-form-content .close-btn');

  // Open the form popup
  joinUsButton.addEventListener('click', () => {
      formPopup.style.display = 'flex';
      formPopup.classList.add('fade-in');
  });

  // Close the form popup
  closeBtn.addEventListener('click', () => {
      formPopup.classList.remove('fade-in');
      setTimeout(() => {
          formPopup.style.display = 'none';
      }, 300);
  });

  // Close the form popup when clicking outside the content
  formPopup.addEventListener('click', (e) => {
      if (e.target === formPopup) {
          formPopup.classList.remove('fade-in');
          setTimeout(() => {
              formPopup.style.display = 'none';
          }, 300);
      }
  });
});
