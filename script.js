function toggleSection(sectionId) {
  var section = document.getElementById(sectionId);
  section.classList.toggle('active');
  var content = section.nextElementSibling;
  if (content.style.maxHeight) {
      content.style.maxHeight = null;
  } else {
      content.style.maxHeight = content.scrollHeight + 'px';
  }
}
