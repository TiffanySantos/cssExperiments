document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('button').forEach(button => {
    button.onclick = function () {
      const animation = button.getAttribute('data-animate')
      const animo = document.querySelector('h1')
      if (animo.className !== animation) {
        animo.className = animation
        animo.style.animationPlayState = 'running'
      } else if (animo.className === animation) {
        animo.className = 'stop'
      }
    }
  })
})
