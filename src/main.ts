import { konamiCode } from './konami';
import './style.css'

konamiCode(() => {
  const img = document.createElement('img');
  img.src = 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExemJzbW12ZGswdDVkbG1xb3Q3OWpxN3h4dDJldWNkOG94OXhobzlvaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vVzH2XY3Y0Ar6/giphy.gif';
  img.style.position = 'fixed';
  img.style.bottom = '0';
  img.style.right = '0';
  img.style.zIndex = '9999';
  img.style.width = '200px';
  img.style.height = 'auto';
  document.body.appendChild(img);
});
