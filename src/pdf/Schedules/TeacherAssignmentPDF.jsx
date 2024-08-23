import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import "../../styles/Montserrat-Regular-normal.js";
import "../../styles/Montserrat-Italic-italic.js";
import "../../styles/Montserrat-Bold-bold.js";
import "../../styles/Montserrat-BoldItalic-bolditalic.js";
import Button from "../../ui/Button.jsx";
import Spinner from "../../ui/Spinner.jsx";
import { useRoles } from "../../features/roles/useRoles.js";
import { useStateRoles } from "../../features/stateRoles/useStateRoles.js";
import calculateSemesterGroup from "../../helpers/calculateSemesterGroup.js";

function TeacherAssignmentPDF({
  groupedSubjects,
  uniqueTeacherSchedule,
  currentWorker,
}) {
  const { isLoading: isLoadingRoles, roles } = useRoles();
  const { isLoading: isLoadingStateRoles, stateRoles } = useStateRoles();

  let totalHours = 4;

  const groupData = (array, key) => {
    return array.reduce((result, currentValue) => {
      // Obtén el valor de la propiedad por la que vamos a agrupar
      const groupKey = currentValue[key];

      // Si el grupo aún no existe, créalo
      if (!result[groupKey]) {
        result[groupKey] = [];
      }

      // Agrega el elemento actual al grupo correspondiente
      result[groupKey].push(currentValue);

      return result;
    }, {});
  };

  console.log(groupedSubjects, uniqueTeacherSchedule);

  // console.log(currentWorker);

  const generatePDF = () => {
    const doc = new jsPDF("p", "px", "letter");

    // Header

    const logoEnub = new Image();
    logoEnub.src = "/enub.jpg";
    doc.addImage(logoEnub, "JPG", 380, 10, 50, 50);

    const logoSetab = new Image();
    logoSetab.src = "/setab.jpeg";
    doc.addImage(logoSetab, "JPEG", 30, 5, 60, 60);

    doc.autoTable({
      willDrawPage: function (data) {
        // Header
        doc.autoTable({
          styles: {
            halign: "center",
            font: "Montserrat-BoldItalic",
            fontStyle: "bolditalic",
          },
          body: [["", "APRENDER PARA ENSEÑAR", ""]],
          theme: "plain",
        });
      },
      didDrawPage: function (data) {
        // Footer
        doc.setFontSize(10);

        // jsPDF 1.4+ uses getHeight, <1.4 uses .height
        var pageSize = doc.internal.pageSize;
        var pageHeight = pageSize.height
          ? pageSize.height
          : pageSize.getHeight();

        doc.setFont("Montserrat-Regular");
        doc.text("Periférico S/N", data.settings.margin.left, pageHeight - 60);
        doc.text(
          "Col. Las Flores. CP. 86930",
          data.settings.margin.left,
          pageHeight - 50
        );
        doc.text(
          "Teléfono (934) 344 04 77, 344 04 88",
          data.settings.margin.left,
          pageHeight - 40
        );
        doc.text(
          "Balancán, Tabasco",
          data.settings.margin.left,
          pageHeight - 30
        );
        doc.text(
          "escuela.normalurbana@correo.setab.gob.mx",
          data.settings.margin.left,
          pageHeight - 20
        );
      },
      margin: { top: 70 },
    });

    // Get current date
    const options = { day: "numeric", month: "long", year: "numeric" };
    const today = new Date();
    const formattedDate = today.toLocaleDateString("es-ES", options);

    const infoDoc = [
      [
        {
          content: "DEPENDENCIA: ESCUELA NORMAL URBANA",
          styles: { font: "Montserrat-Bold" },
        },
      ],

      [
        {
          content: "SECCIÓN: ADMINISTRACIÓN",
          styles: { font: "Montserrat-Bold" },
        },
      ],
      [
        {
          content: "MESA: SUBDIRECCIÓN ACADEMICA.",
          styles: { font: "Montserrat-Bold" },
        },
      ],
      [
        {
          content: "OFICIO Nº: SDAC/ENU/085/2023-2024",
          styles: { font: "Montserrat-Bold" },
        },
      ],
      [
        {
          content: "Asunto: Asignación de carga horaria",
          styles: { font: "Montserrat-Bold" },
        },
      ],
      [`Balancán, Tabasco a ${formattedDate}`],
    ];

    doc.autoTable({
      styles: {
        halign: "right",
        valign: "middle",
        font: "Montserrat-Regular",
        fontSize: 9,
      },
      body: infoDoc,
      theme: "plain",
      startY: doc.lastAutoTable.finalY,
    });

    // Info of teacher
    doc.autoTable({
      styles: {
        valign: "middle",
        font: "Montserrat-Regular",
        fontSize: 10,
      },
      body: [
        [
          {
            content: `MTRO(A). ${currentWorker[0].name}`,
            styles: { font: "Montserrat-Bold" },
          },
        ],
        [
          {
            content: "DOCENTE DE LA ESCUELA NORMAL URBANA",
            styles: { font: "Montserrat-Bold" },
          },
        ],
        [
          {
            content: "PRESENTE",
            styles: { font: "Montserrat-Bold" },
          },
        ],
      ],
      theme: "plain",
      startY: doc.lastAutoTable.finalY - 3,
    });

    doc.autoTable({
      styles: {
        align: "justify",
        valign: "middle",
        font: "Montserrat-Regular",
        fontSize: 10,
      },
      body: [
        [
          "En apego de los lineaminetos que establecen la regulación de las Actividades sustantivas que debe realizar todo profesor adscrito a una Institución de Educación Superior (IES), y con base a su nombramiento como profesor de la Escuela Normal Urbana, en cumplimiento a las atribuciones conferidas a esta subdirección, me permito hacer la asignación de su carga horaria para el presente semestre. Misma que deberá desempeñar con el sentido de responsbilidad y compromiso que siempre ha demostrado en cada una de las tareas que se le han  encomendado.",
        ],
      ],
      theme: "plain",
      startY: doc.lastAutoTable.finalY,
    });

    // Sumar horas de asignaturas impartidas

    Object.keys(groupedSubjects).map(
      (subject) => (totalHours += groupedSubjects[subject].length * 2)
    );

    uniqueTeacherSchedule.map(
      (schedule) => (totalHours += schedule.quantity * 2)
    );

    doc.autoTable({
      styles: {
        halign: "center",
        valign: "middle",
        font: "Montserrat-Regular",
        fontSize: 7,
      },
      headStyles: {
        fillColor: [0, 0, 0],
        font: "Montserrat-Bold",
      },
      columnStyles: {
        0: { cellWidth: 66 },
        1: { cellWidth: 66 },
        2: { cellWidth: 66 },
        3: { cellWidth: 66 },
        4: { cellWidth: 66 },
        5: { cellWidth: 66 },
      },
      footStyles: {
        fillColor: [0, 0, 0],
        font: "Montserrat-Bold",
      },
      head: [
        [
          "NOMBRE DEL CURSO",
          "LICENCIATURA",
          "SEMESTRE Y GRUPO",
          "DURACIÓN EN SEMANA",
          "HORAS POR SEMESTRE",
          "HRS. SEMANALES DEDICADAS AL CURSO, ACTIVIDAD O COMISIÓN",
        ],
      ],
      body: Object.keys(groupedSubjects).map((subject) => {
        return [
          groupedSubjects[subject][0].subjects.name.toUpperCase(),
          groupedSubjects[subject][0].groups.degrees.code,
          `${Object.keys(groupData(groupedSubjects[subject], "group_id")).map(
            (group) => {
              return `   ${calculateSemesterGroup(
                groupData(groupedSubjects[subject], "group_id")[group][0].groups
                  .year_of_admission
              )}° " ${
                groupData(groupedSubjects[subject], "group_id")[group][0].groups
                  .letter
              }"`;
            }
          )}`,
          groupedSubjects[subject].length * 2,
          "",
          groupedSubjects[subject].length * 2,
        ];
      }),
      theme: "grid",
      startY: doc.lastAutoTable.finalY,
    });

    doc.autoTable({
      styles: {
        halign: "center",
        valign: "middle",
        font: "Montserrat-Regular",
        fontSize: 7,
      },
      headStyles: {
        fillColor: [0, 0, 0],
        font: "Montserrat-Bold",
      },
      columnStyles: {
        0: { cellWidth: 66 },
        1: { cellWidth: 66 },
        2: { cellWidth: 66 },
        3: { cellWidth: 66 },
        4: { cellWidth: 66 },
        5: { cellWidth: 66 },
      },
      footStyles: {
        fillColor: [0, 0, 0],
        font: "Montserrat-Bold",
      },
      body: uniqueTeacherSchedule.map(({ name, quantity }) => {
        return [name, "", "", "", "", quantity * 2];
      }),
      theme: "grid",
      startY: doc.lastAutoTable.finalY - 3,
    });

    doc.autoTable({
      styles: {
        halign: "center",
        valign: "middle",
        font: "Montserrat-Regular",
        fontSize: 7,
      },
      headStyles: {
        fillColor: [0, 0, 0],
        font: "Montserrat-Bold",
      },
      columnStyles: {
        0: { cellWidth: 66 },
        1: { cellWidth: 264 },
        2: { cellWidth: 66 },
      },
      footStyles: {
        fillColor: [0, 0, 0],
        font: "Montserrat-Bold",
      },
      body: [
        ["TUTORÍA", "", "1"],
        ["ACTO CÍVICO", "LUNES Y FECHAS CONMEMORATIVAS", "1"],
        [
          "ACADEMIA",
          "(GENERAL, LICENCIATURA, SEMESTRE Y TRAYECTO FORMATIVO)",
          "2",
        ],
      ],
      foot: [["TOTAL", "", `${totalHours} HRS`]],
      theme: "grid",
      startY: doc.lastAutoTable.finalY,
    });

    doc.autoTable({
      styles: {
        halign: "center",
        valign: "middle",
        font: "Montserrat-Regular",
        fontSize: 10,
      },
      body: [["Atentamente"]],
      theme: "plain",
      startY: doc.lastAutoTable.finalY,
    });

    doc.autoTable({
      styles: {
        halign: "center",
        valign: "middle",
        font: "Montserrat-Regular",
        fontSize: 10,
      },
      body: [[roles[0].workers.name], ["Subdirector Académico"]],
      theme: "plain",
    });

    doc.output("dataurlnewwindow");
  };
  return (
    <Button variation="secondary" onClick={generatePDF}>
      Generar asignación horaria del maestro
    </Button>
  );
}

export default TeacherAssignmentPDF;
