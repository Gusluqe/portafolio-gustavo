/* Skills */
const skillsTech = document.querySelector('.skills-tech')

const skills = [
  {
    path: 'https://res.cloudinary.com/dfc7m5ola/image/upload/v1705068791/bash_herg5r.svg',
    name: 'Bash',
  },
  {
    path: 'https://res.cloudinary.com/dfc7m5ola/image/upload/v1705068793/vsc_m9yr7b.svg',
    name: 'VS Code',
  },
  {
    path: 'https://res.cloudinary.com/dfc7m5ola/image/upload/v1705068791/html_q6pvb3.svg',
    name: 'HTML',
  },
  {
    path: 'https://res.cloudinary.com/dfc7m5ola/image/upload/v1705069308/logo-css-3-2048_dkollb.png',
    name: 'CSS',
  },
  {
    path: 'https://res.cloudinary.com/dfc7m5ola/image/upload/v1705068791/javascript_u1zqf9.svg',
    name: 'JavaScript',
  },
  {
    path: 'https://res.cloudinary.com/dfc7m5ola/image/upload/v1705068793/react_ufwyeu.svg',
    name: 'JavaScript',
  }
]

let html = ''

for (const skill of skills) {
  html += `
  <div class='skill'>
    <img src='${skill.path}' alt='${skill.name}'>
    <h3>${skill.name}</h3>
  </div>
`
}

skillsTech.innerHTML = html

/* NavBar */
const navbar = document.querySelector('.nav')
const menu = document.querySelector('.nav-menu')
const links = document.querySelectorAll('.list-link')

navbar.addEventListener('click', function (e) {
  if (e.target.closest('.btn-open')) {
    menu.classList.toggle('show-menu')
  }

  if (e.target.closest('.btn-close')) {
    menu.classList.remove('show-menu')
  }

  if (e.target.closest('.list-link')) {
    menu.classList.remove('show-menu')
  }

  if (e.target.closest('.list-link')) {
    for (const link of links) {
      link.parentElement.classList.remove('active')
    }

    e.target.parentElement.classList.add('active')
  }
})

/* Light Mode */
const btnLight = document.querySelector('.btn-theme')

// Comprobar si el modo light está activado
// getItem -> Obtener datos del localStorage
const theme = window.localStorage.getItem('theme')

if (theme) {
  document.body.classList.add('light')
  changeTheme(true)
} else {
  document.body.classList.remove('light')
  changeTheme(false)
}

btnLight.addEventListener('click', function () {
  document.body.classList.toggle('light')

  if (document.body.classList.contains('light')) {
    changeTheme(true)
  } else {
    changeTheme(false)
  }
})

function changeTheme (bool) {
  if (bool) {
    btnLight.firstElementChild.classList.remove('bxs-moon')
    btnLight.firstElementChild.classList.add('bxs-sun')
    // setItem -> Almacenar datos en el localStorage
    window.localStorage.setItem('theme', 'light')
  } else {
    btnLight.firstElementChild.classList.remove('bxs-sun')
    btnLight.firstElementChild.classList.add('bxs-moon')
    // removeItem -> Eliminar datos del localStorage
    window.localStorage.removeItem('theme')
  }
}
