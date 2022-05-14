window.onload = function () {
  SeccionAcercaDeMi();
  CreandoLinkSocical();
  CreandoSkills();
  CreandoResumen();
  CreandoExperianciaLaboral();
  CreandoContactame();
};

function SeccionAcercaDeMi() {
  document.getElementById("lbl_Header_Name").innerText =
    InformacionPersonal.Nombre + " " + InformacionPersonal.Apellidos;
  document.getElementById("lbl_Header_Name_2").innerText =
    InformacionPersonal.Nombre + " " + InformacionPersonal.Apellidos;
  document.getElementById("lbl_AcercaDeMi").innerText =
    InformacionPersonal.AcercaDeMi;
  document.getElementById("lbl_Cargo").innerText = InformacionPersonal.Cargo;
  document.getElementById("lbl_Sec_AcercaDeMi_Genero").innerText =
    InformacionPersonal.Genero;
  document.getElementById("lbl_Sec_AcercaDeMi_WebSite").innerText =
    InformacionPersonal.WebSite;
  document.getElementById("lbl_Sec_AcercaDeMi_Nacionalidad").innerText =
    InformacionPersonal.Nacionalidad;
  document.getElementById("lbl_Sec_AcercaDeMi_Nacimiento").innerText =
    InformacionPersonal.FechaNacimiento;
  document.getElementById("lbl_Sec_AcercaDeMi_Edad").innerText =
    InformacionPersonal.Edad;
  document.getElementById("lbl_Sec_AcercaDeMi_Civil").innerText =
    InformacionPersonal.EstadoCivil;
  document.getElementById("lbl_Sec_AcercaDeMi_Email").innerText =
    InformacionPersonal.Email;
  document.getElementById("lbl_Sec_AcercaDeMi_Telefono").innerText =
    InformacionPersonal.Telefono;
  document.getElementById("lbl_DescripcionCorta").innerText =
    InformacionPersonal.DescripcionCorta;
  document.getElementById("lbl_DescripcionProfesional").innerText =
    InformacionPersonal.DescripcionProfesional;
  document.getElementById("lbl_CorreoContacto").innerText =
    InformacionPersonal.Email;
}

function CreandoLinkSocical() {
  let Social = "";
  if (RedesSociales.twitter != "") {
    Social =
      "<a target='_blank' href='" +
      RedesSociales.twitter +
      "' class='twitter'><i class='bx bxl-twitter'></i></a>";
  }
  if (RedesSociales.facebook != "") {
    Social =
      Social +
      "<a target='_blank' href='" +
      RedesSociales.facebook +
      "' class='facebook'><i class='bx bxl-facebook'></i></a>";
  }
  if (RedesSociales.instagram != "") {
    Social =
      Social +
      "<a target='_blank' href='" +
      RedesSociales.instagram +
      "' class='instagram'><i class='bx bxl-instagram'></i></a>";
  }
  if (RedesSociales.linkedin != "") {
    Social =
      Social +
      "<a target='_blank' href='" +
      RedesSociales.linkedin +
      "' class='linkedin'><i class='bx bxl-linkedin'></i></a>";
  }
  document.getElementById("div_SocialLink").innerHTML = Social;
}

function CreandoSkills() {
  let SkillHTML = "";
  Skills.forEach((Skill) => {
    console.log(SkillHTML);
    SkillHTML =
      SkillHTML +
      ` <div class="col-lg-6" data-aos="fade-up" > <div class="progress">
    <span class="skill">` +
      Skill.Skill +
      ` <i class="val">` +
      Skill.Experiencia +
      ` de experiencia</i></span>
    <div class="progress-bar-wrap">
      <div
        class="progress-bar"
        role="progressbar"
        aria-valuenow="` +
      Skill.Puntaje +
      `"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
    </div>
  </div>`;
  });

  document.getElementById("id_Div_Skills").innerHTML = SkillHTML;
}

function CreandoResumen() {
  document.getElementById("id_Lbl_ResumenShort").innerText =
    Resumen.DescripcionCorta;
  document.getElementById("id_Lbl_NameResumen").innerText =
    InformacionPersonal.Nombre + " " + InformacionPersonal.Apellidos;
  document.getElementById("lbl_ResumenMio").innerText = Resumen.Mi_Resumen;

  let Puntos = "";
  Resumen.Puntos_A_Destacar.forEach((element) => {
    Puntos = Puntos + `<li>` + element + `</li>`;
  });
  document.getElementById("id_ListaDePuntosImportantes").innerHTML = Puntos;

  let Educacion = "";
  Resumen.Educación.forEach((element) => {
    Educacion =
      Educacion +
      ` <div class="resume-item">
    <h4>` +
      element.Escuela +
      `</h4>
    <h5>` +
      element.Periodo +
      `</h5>
    <p>
      <em>` +
      element.Titulo +
      `</em>
    </p>
    <p>
    ` +
      element.DescripcionCorta +
      `
    </p>
  </div>`;
  });

  document.getElementById("id_Div_Educacion").innerHTML = Educacion;
}

function CreandoExperianciaLaboral() {
  var Experiencias = "";

  ExperienciaProfesional.forEach((element) => {
    var Exp =
      `<div class="resume-item">
    <h4>` +
      element.Cargo +
      `</h4>
    <h5>` +
      element.Fecha +
      `</h5>
    <p><em>` +
      element.Empresa +
      `</em></p>
    <ul>
      <li>
      ` +
      element.Funciones[0] +
      `
      </li>
      <li>
      ` +
      element.Funciones[1] +
      `
      </li>
      <li>
      ` +
      element.Funciones[2] +
      `
      </li>
      <li>
      ` +
      element.Funciones[3] +
      `
      </li>
    </ul>
  </div>`;

    Experiencias = Experiencias + Exp;
  });

  document.getElementById("id_Div_Experiencias").innerHTML = Experiencias;
}

function CreandoContactame() {
  document.getElementById("id_lbl_ContactoDescripcion").innerText =
    PorqueDebesContactarme.Descripcion;
  let Motivos = "";
  PorqueDebesContactarme.Motivos.forEach((element) => {
    if (element.Link == "") {
      Motivo =
        ` <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
  <div class="icon"><i class="bi bi-star"></i></div>
  <h4 class="title"><a href="">` +
        element.Titulo +
        `</a></h4>
  <p class="description">
  ` +
        element.DescripcionCorta +
        `
  </p>
</div>`;
    } else {
      Motivo =
        ` <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
  <div class="icon"><i class="bi bi-star"></i></div>
  <h4 class="title"><a href="` +
        element.Link +
        `">` +
        element.Titulo +
        `</a></h4>
  <p class="description">
  ` +
        element.DescripcionCorta +
        `
  </p>
</div>`;
    }

    Motivos = Motivos + Motivo;
  });

  document.getElementById("id_Div_Motivos").innerHTML = Motivos;
}
