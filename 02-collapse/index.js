const content = document.querySelector('.collapsible__content');
const btn = document.querySelector('.collapsible__button');
const hide = btn.querySelector('.collapsible__action--visible')
const show = btn.querySelector('.collapsible__action--hidden')

show.classList.remove('collapsible__action--hidden');
show.style.display = 'none'

btn.addEventListener('click', () => {
  show.classList.contains('collapsible__action--hidden') ? (
    show.classList.remove('collapsible__action--hidden'),
    show.style.display = 'none', 
    content.animate([
      // keyframes
        { transform: 'translateY(-100px)' },
        {opacity : '0'},
        {opacity: '1'},
        { transform: 'translateY(0)' },
      ], {
        // timing options
        duration: 500,
        fill: 'forwards',
      }
    )
  ) : (
    show.classList.add('collapsible__action--hidden'),
    show.style.display = 'block'
  )
  hide.classList.contains('collapsible__action--visible') ? (
    hide.classList.remove('collapsible__action--visible'),
    hide.style.display = 'none',
    content.animate([
      // keyframes
        { transform: 'translateY(0)' },
        { opacity: '1'},
        { opacity: '0'},
        { transform: 'translateY(-100px)' },
      ], {
        // timing options
        duration: 500,
        fill: 'forwards',
      }
    )
  ) : (
    hide.classList.add('collapsible__action--visible'),
    hide.style.display = 'block'
  )
})
