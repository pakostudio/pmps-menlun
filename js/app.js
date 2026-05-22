/* ─────────────────────────────────────────────
   PMPS · Portafolio Comercial
   Datos embebidos directamente (sin fetch)
   para máxima compatibilidad con GitHub Pages.
───────────────────────────────────────────── */

const DATOS = {
  "categorias": [
    { "id": "todas",         "label": "Todos" },
    { "id": "areas-proceso", "label": "Áreas de Proceso" },
    { "id": "desinfectantes","label": "Desinfectantes" },
    { "id": "cip",           "label": "Limpieza CIP" },
    { "id": "membranas",     "label": "Membranas" },
    { "id": "alimentos",     "label": "Contacto Alimentos" },
    { "id": "especialidades","label": "Especialidades" },
    { "id": "lavanderia",    "label": "Lavandería" },
    { "id": "personal",      "label": "Control Personal" },
    { "id": "comunes",       "label": "Áreas Comunes" },
    { "id": "mantenimiento", "label": "Mantenimiento Planta" }
  ],
  "productos": [
    { "id":1,"nombre":"NA Super Alka","subtitulo":"Detergente Alcalino Espumante","categoria":"areas-proceso","descripcion":"Detergente alcalino espumante de trabajo pesado, diseñado para la limpieza manual o por espuma en la industria de alimentos y bebidas.","aplicacion":"Áreas de proceso","tipo":"Alcalino" },
    { "id":2,"nombre":"NA Super Foam Alka","subtitulo":"Detergente Alcalino Trabajo Pesado","categoria":"areas-proceso","descripcion":"Detergente alcalino espumante de trabajo pesado para limpieza de suciedades difíciles como grasa animal en ahumadores o parrillas.","aplicacion":"Áreas de proceso","tipo":"Alcalino" },
    { "id":3,"nombre":"CL Alka","subtitulo":"Detergente Alcalino Clorado","categoria":"areas-proceso","descripcion":"Detergente alcalino clorado espumante para limpieza manual o por espuma. No corrosivo en acero inoxidable. Alto nivel de espuma.","aplicacion":"Áreas de proceso","tipo":"Alcalino Clorado" },
    { "id":4,"nombre":"PM Express","subtitulo":"Detergente de Baja Alcalinidad","categoria":"areas-proceso","descripcion":"Detergente de baja alcalinidad ideal para limpieza de superficies con baja carga de suciedad o como aditivo espumante para detergentes alcalinos.","aplicacion":"Áreas de proceso","tipo":"Aditivo Espumante" },
    { "id":5,"nombre":"H3 Foam","subtitulo":"Detergente Ácido Espumante","categoria":"areas-proceso","descripcion":"Detergente ácido formulado para la limpieza de superficies de acero inoxidable. Evita depósitos de suciedad mineral.","aplicacion":"Áreas de proceso","tipo":"Ácido" },
    { "id":6,"nombre":"H3 Super Foam","subtitulo":"Detergente Ácido Abrillantador Espumante","categoria":"areas-proceso","descripcion":"Detergente ácido formulado para limpieza, desincrustación y abrillantado de superficies de acero inoxidable.","aplicacion":"Áreas de proceso","tipo":"Ácido" },
    { "id":7,"nombre":"Clean Enzyme","subtitulo":"Detergente Enzimático","categoria":"areas-proceso","descripcion":"Detergente enzimático ligeramente alcalino. Remueve todo tipo de proteínas. No corrosivo en acero inoxidable.","aplicacion":"Áreas de proceso","tipo":"Enzimático" },
    { "id":8,"nombre":"Oxi Star","subtitulo":"Desinfectante Base Ácido Peracético","categoria":"desinfectantes","descripcion":"Desinfectante a base de ácido peracético efectivo a bajas concentraciones. Amplio espectro contra hongos, esporas, levaduras y bacterias.","aplicacion":"Sanitización general","tipo":"Ácido Peracético" },
    { "id":9,"nombre":"Acid Star","subtitulo":"Desinfectante Ácido","categoria":"desinfectantes","descripcion":"Desinfectante ácido ideal para la industria de alimentos y bebidas.","aplicacion":"Sanitización general","tipo":"Ácido Fosfórico" },
    { "id":10,"nombre":"Bioxi Clor","subtitulo":"Desinfectante Base Dióxido de Cloro","categoria":"desinfectantes","descripcion":"Formulado para uso como aditivo antibacterial de uso directo en alimentos y como desinfectante de superficies.","aplicacion":"Sanitización general","tipo":"Dióxido de Cloro" },
    { "id":11,"nombre":"Iso Quat","subtitulo":"Limpiador Desinfectante de Uso Directo","categoria":"desinfectantes","descripcion":"Base alcohol isopropílico y cuaternarios de amonio 5ª generación. Un solo paso para limpieza y desinfección de superficies en contacto con alimentos.","aplicacion":"Sanitización general","tipo":"Cuaternarios de Amonio" },
    { "id":12,"nombre":"Iso Quat 70","subtitulo":"Limpiador Desinfectante Alto Espectro","categoria":"desinfectantes","descripcion":"Versión de alto espectro del Iso Quat. Base alcohol isopropílico y cuaternarios 5ª generación.","aplicacion":"Sanitización general","tipo":"Cuaternarios de Amonio" },
    { "id":13,"nombre":"Quaternario","subtitulo":"Desinfectante Base Cuaternarios de Amonio","categoria":"desinfectantes","descripcion":"Desinfectante líquido a base de cuaternarios de amonio 5ª generación para industria de cárnicos, alimentos y bebidas.","aplicacion":"Sanitización general","tipo":"Cuaternarios de Amonio" },
    { "id":14,"nombre":"Thermo Quat","subtitulo":"Desinfectante para Termonebulizador","categoria":"desinfectantes","descripcion":"Desinfectante de uso directo para equipos de termonebulizado, diseñado para soportar altas temperaturas.","aplicacion":"Termonebulización","tipo":"Cuaternarios de Amonio" },
    { "id":15,"nombre":"Clor Star","subtitulo":"Desinfectante Base Hipoclorito de Sodio","categoria":"desinfectantes","descripcion":"Desinfectante líquido a base de Hipoclorito de Sodio para industria de cárnicos, alimentos y bebidas.","aplicacion":"Sanitización general","tipo":"Hipoclorito de Sodio" },
    { "id":16,"nombre":"IODO-FOS","subtitulo":"Desinfectante Base Yodo","categoria":"desinfectantes","descripcion":"Desinfectante a base de yodo para uso en industrias lácteas, de alimentos y bebidas.","aplicacion":"Industria láctea","tipo":"Yodo" },
    { "id":17,"nombre":"Sany Wipes","subtitulo":"Toallas Húmedas Desinfectantes","categoria":"desinfectantes","descripcion":"Toallas húmedas desechables con desinfectante. Listas para usar en superficies en contacto con alimentos. Cumple 21 CFR 178.1010 FDA.","aplicacion":"Superficies","tipo":"Toallas" },
    { "id":18,"nombre":"PM 100","subtitulo":"Detergente Alcalino CIP","categoria":"cip","descripcion":"Detergente líquido alcalino para limpieza CIP o por inmersión. Para industria de alimentos, bebidas y lácteos.","aplicacion":"Limpieza CIP","tipo":"Alcalino" },
    { "id":19,"nombre":"PM 101","subtitulo":"Detergente Alcalino Premium CIP","categoria":"cip","descripcion":"Detergente líquido alcalino calidad Premium para limpieza CIP o inundación en industria de alimentos, bebidas y lácteos.","aplicacion":"Limpieza CIP","tipo":"Alcalino Premium" },
    { "id":20,"nombre":"CL Super Alka","subtitulo":"Detergente Alcalino Clorado CIP","categoria":"cip","descripcion":"Detergente líquido alcalino clorado para limpieza CIP o inundación en industria de alimentos, bebidas y lácteos.","aplicacion":"Limpieza CIP","tipo":"Alcalino Clorado" },
    { "id":21,"nombre":"PM 300","subtitulo":"Detergente Ácido Nítrico CIP","categoria":"cip","descripcion":"Detergente a base de ácido nítrico para limpieza de equipos de acero inoxidable por CIP o inundación.","aplicacion":"Limpieza CIP","tipo":"Ácido" },
    { "id":22,"nombre":"PM 301","subtitulo":"Detergente Ácido Nítrico-Fosfórico CIP","categoria":"cip","descripcion":"Detergente a base de ácido nítrico y fosfórico para limpieza de equipos de acero inoxidable por CIP o inundación.","aplicacion":"Limpieza CIP","tipo":"Ácido" },
    { "id":23,"nombre":"PM 320","subtitulo":"Aditivo para Detergentes Alcalinos","categoria":"cip","descripcion":"Aditivo líquido que mejora los resultados de limpieza en industria láctea, alimentos y bebidas.","aplicacion":"Limpieza CIP","tipo":"Aditivo" },
    { "id":24,"nombre":"Aditivo X1","subtitulo":"Aditivo para Remover Sólidos","categoria":"cip","descripcion":"Aditivo líquido concentrado para remover sólidos en sistemas de membranas incluyendo Osmosis Inversa, nano y microfiltración.","aplicacion":"Limpieza CIP / Membranas","tipo":"Aditivo" },
    { "id":25,"nombre":"Anti Foam","subtitulo":"Antiespumante sin Siliconas","categoria":"cip","descripcion":"Antiespumante libre de siliconas para la industria de alimentos y bebidas.","aplicacion":"Limpieza CIP","tipo":"Antiespumante" },
    { "id":26,"nombre":"Step Kleen","subtitulo":"Líquido para Mops","categoria":"cip","descripcion":"Líquido oleoso para mechudos y mops. Atrapa polvo y basura de cualquier superficie sin agua.","aplicacion":"Sanitización en seco","tipo":"Limpieza en seco" },
    { "id":27,"nombre":"Sany Drain","subtitulo":"Desinfectante Sólido para Drenaje","categoria":"cip","descripcion":"Desinfectante sólido de liberación controlada para drenajes y canales de desagüe.","aplicacion":"Mantenimiento drenajes","tipo":"Sólido" },
    { "id":28,"nombre":"Ultra 100","subtitulo":"Detergente Alcalino en Polvo Membranas","categoria":"membranas","descripcion":"Detergente alcalino en polvo con propiedades buffer para membranas de micro, ultra, nanofiltración y osmosis inversa.","aplicacion":"Membranas","tipo":"Alcalino" },
    { "id":29,"nombre":"Ultra 1100","subtitulo":"Detergente Alcalino Membranas","categoria":"membranas","descripcion":"Detergente líquido alcalino para membranas de micro, ultra, nanofiltración y osmosis inversa. Exclusivo industria láctea, farmacéutica y purificación de agua.","aplicacion":"Membranas","tipo":"Alcalino" },
    { "id":30,"nombre":"Ultra 1000","subtitulo":"Detergente Alcalino Clorado Membranas","categoria":"membranas","descripcion":"Detergente alcalino clorado para membranas tolerantes al cloro en ultrafiltración y microfiltración.","aplicacion":"Membranas","tipo":"Alcalino Clorado" },
    { "id":31,"nombre":"Ultra 070","subtitulo":"Detergente Ácido Nítrico Membranas","categoria":"membranas","descripcion":"Detergente líquido base ácido nítrico para limpieza de membranas de micro, ultra, nanofiltración y osmosis inversa.","aplicacion":"Membranas","tipo":"Ácido" },
    { "id":32,"nombre":"Ultra 071","subtitulo":"Detergente Ácido Nítrico-Fosfórico Membranas","categoria":"membranas","descripcion":"Detergente líquido base ácido nítrico y fosfórico para membranas de micro, ultra, nanofiltración y osmosis inversa.","aplicacion":"Membranas","tipo":"Ácido" },
    { "id":33,"nombre":"Ultra Oxi","subtitulo":"Desinfectante para Membranas","categoria":"membranas","descripcion":"Desinfectante base ácido peracético para membranas de micro, ultra, nanofiltración y osmosis inversa.","aplicacion":"Membranas","tipo":"Ácido Peracético" },
    { "id":34,"nombre":"Ultra 010","subtitulo":"Aditivo No Iónico Membranas","categoria":"membranas","descripcion":"Aditivo no iónico concentrado para limpieza de membranas de micro, ultra, nanofiltración y osmosis inversa.","aplicacion":"Membranas","tipo":"Aditivo" },
    { "id":35,"nombre":"Ultra 020","subtitulo":"Aditivo Aniónico Membranas","categoria":"membranas","descripcion":"Aditivo aniónico concentrado para limpieza de membranas de micro, ultra, nanofiltración y osmosis inversa.","aplicacion":"Membranas","tipo":"Aditivo" },
    { "id":36,"nombre":"Ultra Enzyme Liquid","subtitulo":"Aditivo Enzimático Membranas","categoria":"membranas","descripcion":"Aditivo enzimático concentrado para limpieza de membranas de micro, ultra, nanofiltración y osmosis inversa.","aplicacion":"Membranas","tipo":"Enzimático" },
    { "id":37,"nombre":"Ultra Enzyme Liquid HA","subtitulo":"Aditivo Enzimático Alta Actividad","categoria":"membranas","descripcion":"Aditivo enzimático concentrado de alta actividad para limpieza de membranas de micro, ultra, nanofiltración y osmosis inversa.","aplicacion":"Membranas","tipo":"Enzimático" },
    { "id":38,"nombre":"Ultra Fouling","subtitulo":"Antiincrustante Membranas","categoria":"membranas","descripcion":"Antiincrustante de amplio espectro para nanofiltración y osmosis inversa. También para torres de enfriamiento.","aplicacion":"Membranas","tipo":"Antiincrustante" },
    { "id":39,"nombre":"Ultra Preservative","subtitulo":"Conservador Ácido Membranas","categoria":"membranas","descripcion":"Conservador ácido líquido para preservar y conservar en remojo membranas de micro, ultra, nanofiltración y osmosis inversa.","aplicacion":"Membranas","tipo":"Conservador" },
    { "id":40,"nombre":"Kathon WT","subtitulo":"Conservador Antimicrobiano Industrial","categoria":"membranas","descripcion":"Conservador líquido para controlar el crecimiento bacteriano en sistemas de procesos industriales.","aplicacion":"Membranas / Procesos","tipo":"Conservador" },
    { "id":41,"nombre":"Clean Shell","subtitulo":"Detergente Lavado de Huevo","categoria":"alimentos","descripcion":"Detergente ligeramente alcalino para lavado de huevo. No daña el cascarón. Sin Hidróxido de Sodio.","aplicacion":"Industria avícola","tipo":"Contacto directo" },
    { "id":42,"nombre":"Vega Green","subtitulo":"Detergente Lavado de Frutas y Verduras","categoria":"alimentos","descripcion":"Detergente ligeramente alcalino para lavado de frutas y verduras. No contiene Hidróxido de Sodio.","aplicacion":"Industria alimentaria","tipo":"Contacto directo" },
    { "id":43,"nombre":"Vega Green Sc","subtitulo":"Detergente Lavado de Vegetales","categoria":"alimentos","descripcion":"Remueve suciedad característica incluyendo fertilizantes, tierra, larvas e insectos. No daña la corteza.","aplicacion":"Industria alimentaria","tipo":"Contacto directo" },
    { "id":44,"nombre":"Super Green","subtitulo":"Desinfectante Sanitización de Vegetales","categoria":"alimentos","descripcion":"Desinfectante base ácido peracético para control microbiano en frutas y vegetales. Espreado o inmersión.","aplicacion":"Sanitización vegetales","tipo":"Ácido Peracético" },
    { "id":45,"nombre":"Super Booster 100","subtitulo":"Removedor de Biopelícula","categoria":"especialidades","descripcion":"Desinfectante base peróxidos y cuaternarios para biofilm. Trabaja en conjunto con Super Booster 200.","aplicacion":"Eliminación biofilm","tipo":"Peróxidos + Cuaternarios" },
    { "id":46,"nombre":"Super Booster 200","subtitulo":"Aditivo Removedor Biopelícula","categoria":"especialidades","descripcion":"Aditivo líquido que trabaja junto a Super Booster 100 para eliminación efectiva de biofilm.","aplicacion":"Eliminación biofilm","tipo":"Aditivo" },
    { "id":47,"nombre":"Clean Fat","subtitulo":"Desengrasante de Uso Directo","categoria":"especialidades","descripcion":"Desengrasante para remover suciedad de cocinas o industria de alimentos, bebidas y lácteos.","aplicacion":"Desengrase","tipo":"Desengrasante" },
    { "id":48,"nombre":"Frozen Clean","subtitulo":"Detergente para Cuartos Fríos","categoria":"especialidades","descripcion":"Detergente alcalino formulado para remover suciedad sin elevar temperatura. Uso hasta -34°C.","aplicacion":"Cámaras frigoríficas","tipo":"Alcalino" },
    { "id":49,"nombre":"D Scale K 1000","subtitulo":"Desincrustante Lavadora de Botellas","categoria":"especialidades","descripcion":"Producto ácido de rápida acción para remoción de incrustación mineral y óxido en lavadoras de botella.","aplicacion":"Embotelladoras","tipo":"Ácido" },
    { "id":50,"nombre":"Poly Kleen","subtitulo":"Detergente Alcalino para Garrafón","categoria":"especialidades","descripcion":"Detergente líquido alcalino para limpieza de policarbonato y PET en industria embotelladora de agua.","aplicacion":"Embotelladoras","tipo":"Alcalino" },
    { "id":51,"nombre":"Easy Rinse","subtitulo":"Aditivo Ahorro de Agua","categoria":"especialidades","descripcion":"Reduce el número de enjuagues después de limpieza CIP alcalina. Reduce consumo de agua.","aplicacion":"CIP / Ahorro de agua","tipo":"Aditivo" },
    { "id":52,"nombre":"HS-200","subtitulo":"Catalizador de Oxígeno","categoria":"especialidades","descripcion":"Reactivo catalizador contra oxígeno disuelto base Sulfito de Sodio catalizado para agua de alimentación a caldera.","aplicacion":"Tratamiento de aguas","tipo":"Catalizador" },
    { "id":53,"nombre":"PM 101 Textil","subtitulo":"Detergente Alcalino para Ropa","categoria":"lavanderia","descripcion":"Detergente líquido alcalino Premium para lavado industrial de ropa en industria de alimentos y lácteos.","aplicacion":"Lavandería industrial","tipo":"Alcalino" },
    { "id":54,"nombre":"Tex Plus","subtitulo":"Detergente Enzimático para Ropa","categoria":"lavanderia","descripcion":"Detergente ligeramente alcalino con enzimas y emulsificantes para suciedad pesada en plantas de alimentos.","aplicacion":"Lavandería industrial","tipo":"Enzimático" },
    { "id":55,"nombre":"Ultra Solve","subtitulo":"Detergente con Solventes para Ropa","categoria":"lavanderia","descripcion":"Detergente con solventes orgánicos para eliminar suciedad pesada típica de plantas de alimentos.","aplicacion":"Lavandería industrial","tipo":"Solvente" },
    { "id":56,"nombre":"Lava Oxi","subtitulo":"Pre Lavador Base Peróxido","categoria":"lavanderia","descripcion":"Pre lavador para manchas difíciles. Fórmula base peróxido con efecto desinfectante.","aplicacion":"Lavandería industrial","tipo":"Peróxido" },
    { "id":57,"nombre":"PM Textil","subtitulo":"Detergente Clorado Ropa Blanca","categoria":"lavanderia","descripcion":"Detergente alcalino clorado para ropa blanca. Especialmente para prendas de industria cárnica y de alimentos.","aplicacion":"Lavandería industrial","tipo":"Alcalino Clorado" },
    { "id":58,"nombre":"Suavizante para Telas","subtitulo":"Suavizante Industrial","categoria":"lavanderia","descripcion":"Suavizante para acondicionamiento de ropa en la fase final de lavado.","aplicacion":"Lavandería industrial","tipo":"Suavizante" },
    { "id":59,"nombre":"PM Hand","subtitulo":"Jabón para Manos Industrial","categoria":"personal","descripcion":"Jabón de manos sin aroma para remover suciedad típica de la industria de alimentos y bebidas.","aplicacion":"Control de personal","tipo":"Higiene personal" },
    { "id":60,"nombre":"PM Gel","subtitulo":"Gel Desinfectante para Manos","categoria":"personal","descripcion":"Gel desinfectante base alcohol isopropílico para manos libres de virus y bacterias.","aplicacion":"Control de personal","tipo":"Higiene personal" },
    { "id":61,"nombre":"PM Gel Foam","subtitulo":"Gel Desinfectante Espumante Manos","categoria":"personal","descripcion":"Gel desinfectante espumante base alcohol isopropílico para manos.","aplicacion":"Control de personal","tipo":"Higiene personal" },
    { "id":62,"nombre":"Sany Quat","subtitulo":"Desinfectante Sólido para Pisos","categoria":"personal","descripcion":"Desinfectante sólido de liberación prolongada para pisos en áreas de proceso con condiciones húmedas.","aplicacion":"Control de personal","tipo":"Sólido" },
    { "id":63,"nombre":"Glass","subtitulo":"Limpiador de Vidrios y Cristales","categoria":"comunes","descripcion":"Detergente de aplicación directa para vidrios y superficies. Da brillo y protege.","aplicacion":"Áreas comunes","tipo":"Limpiador" },
    { "id":64,"nombre":"Lavatrastes","subtitulo":"Detergente para Comedor","categoria":"comunes","descripcion":"Detergente para limpieza general en comedores y el hogar.","aplicacion":"Áreas comunes","tipo":"Detergente" },
    { "id":65,"nombre":"Flavoring","subtitulo":"Aromatizante Ambiental","categoria":"comunes","descripcion":"Aromatizante ambiental listo para usarse en áreas institucionales, oficinas, hoteles y consultorios.","aplicacion":"Áreas comunes","tipo":"Aromatizante" },
    { "id":66,"nombre":"Multiusos","subtitulo":"Limpiador Multiusos para Superficies","categoria":"comunes","descripcion":"Detergente para limpieza general de pisos, vidrios, mesas, baños. Para oficinas, escuelas y áreas comunes.","aplicacion":"Áreas comunes","tipo":"Multiusos" },
    { "id":67,"nombre":"Abrillantador 740","subtitulo":"Abrillantador Ácido","categoria":"mantenimiento","descripcion":"Abrillantador ácido para limpieza manual. No corrosivo en acero inoxidable a concentración recomendada.","aplicacion":"Mantenimiento planta","tipo":"Ácido" },
    { "id":68,"nombre":"Super Remover","subtitulo":"Removedor de Etiquetas y Adhesivos","categoria":"mantenimiento","descripcion":"Solvente líquido natural que disuelve la mayoría de adhesivos y gomas en industria de alimentos y bebidas.","aplicacion":"Mantenimiento planta","tipo":"Solvente" },
    { "id":69,"nombre":"Translub D","subtitulo":"Lubricante Seco para Transportadores","categoria":"mantenimiento","descripcion":"Lubricante seco para botellas PET, cartón y latas. Para industria de lácteos, bebidas y cerveza.","aplicacion":"Mantenimiento planta","tipo":"Lubricante" },
    { "id":70,"nombre":"Translub S","subtitulo":"Lubricante Húmedo para Transportadores","categoria":"mantenimiento","descripcion":"Lubricante sintético concentrado para botellas FER-PET, NR-PET y vidrio. Para bebidas y cerveza.","aplicacion":"Mantenimiento planta","tipo":"Lubricante" }
  ]
};

/* ── Estado global ── */
let todosLosProductos = [];
let categoriaActiva = 'todas';
let busqueda = '';

const coloresCat = {
  'areas-proceso':  { bg: '#E6F1FB', text: '#0C447C' },
  'desinfectantes': { bg: '#FAECE7', text: '#712B13' },
  'cip':            { bg: '#EAF3DE', text: '#27500A' },
  'membranas':      { bg: '#EEEDFE', text: '#3C3489' },
  'alimentos':      { bg: '#FAEEDA', text: '#633806' },
  'especialidades': { bg: '#FBEAF0', text: '#72243E' },
  'lavanderia':     { bg: '#E1F5EE', text: '#085041' },
  'personal':       { bg: '#F1EFE8', text: '#444441' },
  'comunes':        { bg: '#E6F1FB', text: '#042C53' },
  'mantenimiento':  { bg: '#F1EFE8', text: '#2C2C2A' }
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

/* ── Inicializar con datos embebidos ── */
function cargarDatos() {
  todosLosProductos = DATOS.productos;
  renderizarFiltros(DATOS.categorias.filter(c => c.id !== 'todas'));
  renderizarProductos();
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
    card.style.animationDelay = `${i * 30}ms`;
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
