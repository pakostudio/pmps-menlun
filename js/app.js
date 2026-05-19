let todosLosProductos = [];
let categoriaActiva = 'todas';
let busqueda = '';

const coloresCat = {
  'areas-proceso': { bg: '#E6F1FB', text: '#0C447C' },
  'desinfectantes': { bg: '#FAECE7', text: '#712B13' },
  'cip':           { bg: '#EAF3DE', text: '#27500A' },
  'membranas':     { bg: '#EEEDFE', text: '#3C3489' },
  'alimentos':     { bg: '#FAEEDA', text: '#633806' },
  'especialidades':{ bg: '#FBEAF0', text: '#72243E' },
  'lavanderia':    { bg: '#E1F5EE', text: '#085041' },
  'personal':      { bg: '#F1EFE8', text: '#444441' },
  'comunes':       { bg: '#E6F1FB', text: '#042C53' },
  'mantenimiento': { bg: '#F1EFE8', text: '#2C2C2A' }
};

const iconosCat = {
  'areas-proceso':  '🏭',
  'desinfectantes': '🧪',
  'cip':            '💧',
  'membranas':      '🔬',
  'alimentos':      '🥦',
  'especialidades': '⭐',
  'lavanderia':     '👕',
  'personal':       '🙌',
  'comunes':        '🏢',
  'mantenimiento':  '🔧'
};

async function cargarDatos() {
  try {
    const res = await fetch('./data/productos.json');
    const data = await res.json();
    todosLosProductos = data.productos;
    renderizarFiltros(data.categorias);
    renderizarProductos();
  } catch (e) {
    console.error('Error cargando productos:', e);
  }
}

function renderizarFiltros(categorias) {
  const cont = document.getElementById('filtros');
  if (!cont) return;

  const todas = document.createElement('button');
  todas.className = 'pill active';
  todas.textContent = 'Todos';
  todas.dataset.cat = 'todas';
  todas.addEventListener('click', () => seleccionarCategoria('todas', todas));
  cont.appendChild(todas);

  categorias.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'pill';
    btn.textContent = cat.label;
    btn.dataset.cat = cat.id;
    btn.addEventListener('click', () => seleccionarCategoria(cat.id, btn));
    cont.appendChild(btn);
  });
}

function seleccionarCategoria(id, btn) {
  categoriaActiva = id;
  document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  renderizarProductos();
}

function renderizarProductos() {
  const grid = document.getElementById('productos-grid');
  const counter = document.getElementById('counter');
  if (!grid) return;

  const term = busqueda.toLowerCase().trim();

  const filtrados = todosLosProductos.filter(p => {
    const matchCat = categoriaActiva === 'todas' || p.categoria === categoriaActiva;
    const matchBus = !term ||
      p.nombre.toLowerCase().includes(term) ||
      p.subtitulo.toLowerCase().includes(term) ||
      p.descripcion.toLowerCase().includes(term) ||
      p.tipo.toLowerCase().includes(term);
    return matchCat && matchBus;
  });

  if (counter) {
    counter.innerHTML = `Mostrando <span>${filtrados.length}</span> de <span>${todosLosProductos.length}</span> productos`;
  }

  grid.innerHTML = '';

  if (filtrados.length === 0) {
    grid.innerHTML = `
      <div class="no-resultados">
        <p style="font-size:32px;margin-bottom:12px">🔍</p>
        <p style="font-size:16px;font-weight:600;margin-bottom:6px">Sin resultados</p>
        <p style="font-size:13px">Intenta con otro término o categoría</p>
      </div>`;
    return;
  }

  filtrados.forEach((p, i) => {
    const col = coloresCat[p.categoria] || { bg: '#f1f5f9', text: '#475569' };
    const icono = iconosCat[p.categoria] || '📦';
    const card = document.createElement('div');
    card.className = 'prod-card fade-up';
    card.style.animationDelay = `${i * 40}ms`;
    card.innerHTML = `
      <span class="prod-cat-pill" style="background:${col.bg};color:${col.text}">
        ${p.tipo}
      </span>
      <div class="prod-nombre">${p.nombre}</div>
      <div class="prod-subtitulo">${p.subtitulo}</div>
      <div class="prod-desc">${p.descripcion}</div>
      <div class="prod-footer">
        <span>${icono}</span>
        <span>${p.aplicacion}</span>
      </div>`;
    grid.appendChild(card);
  });
}

function initBuscador() {
  const input = document.getElementById('buscador');
  if (!input) return;
  input.addEventListener('input', e => {
    busqueda = e.target.value;
    renderizarProductos();
  });
}

function initNavSmooth() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

function initScrollReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.mvv-card, .serv-card, .ent-card, .cert-badge').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  cargarDatos();
  initBuscador();
  initNavSmooth();
  setTimeout(initScrollReveal, 100);
});
