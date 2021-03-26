class MiNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<ul>
        <li>
          <a href="index.html">
            <span class=
                "material-icons">
              home
            </span>
            Inicio
          </a>
        </li>
        <li>
          <a href="dispositivo.html">
            <span class=
                "material-icons">
              location_searching
            </span>
            GPS
          </a>
        </li>
        <li>
          <a href="hitorial.html">
            <span class=
                "material-icons">
              attach_file
            </span>
            Archivos
          </a>
        </li>`;
  }
}
customElements.define(
  "mi-nav", MiNav);