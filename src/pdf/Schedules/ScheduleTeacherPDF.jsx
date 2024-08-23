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
import filterHourGroup from "./filterHourGroup.js";
import filterHourActivity from "./filterHourActivity.js";

function ScheduleTeacherPDF({ schedulesScholar, scheduleTeacher }) {
  const { isLoading: isLoadingRoles, roles } = useRoles();
  const { isLoading: isLoadingStateRoles, stateRoles } = useStateRoles();

  let numberLEPRIM = 0,
    numberLEPREES = 0;

  let titleDegrees;

  // console.log(schedulesScholar, scheduleTeacher);

  schedulesScholar.map((schedule) => {
    if (schedule.groups.degrees.code == "LEPRIM") {
      numberLEPRIM++;
    } else if (schedule.groups.degrees.code == "LEPREES") {
      numberLEPREES++;
    }
  });

  if (numberLEPRIM > 0 && numberLEPREES > 0) {
    titleDegrees = "EDUCACIÓN PRIMARIA Y PREESCOLAR";
  } else if (numberLEPRIM > 0) {
    titleDegrees = "EDUCACIÓN PRIMARIA";
  } else if (numberLEPREES > 0) {
    titleDegrees = "EDUCACIÓN PREESCOLAR";
  }

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
      margin: { top: 50 },
    });

    const infoGroup = [
      [
        "ESCUELA NORMAL URBANA",
        `PERIODO ESCOLAR: ${schedulesScholar[0].semesters.school_year}`,
      ],
      [`LICENCIATURA EN ${titleDegrees}`, `PLAN: 2022`],
      [`DOCENTE: ${schedulesScholar[0].workers.name}`, `TURNO: MATUTINO`],
    ];

    doc.autoTable({
      styles: {
        valign: "middle",
        font: "Montserrat-Bold",
        fontSize: 9,
      },
      body: infoGroup,
      theme: "plain",
    });

    const columns = ["", "LUNES", "MARTES", "MIÉRCOLES", "JUEVES", "VIERNES"];
    const data = [
      [
        "7:00 - 8:50",
        "Homenaje / Tutoria",
        `${filterHourGroup(
          schedulesScholar,
          "Martes",
          "07:00:00"
        )}${filterHourActivity(scheduleTeacher, "Martes", "07:00:00")}`,
        `${filterHourGroup(
          schedulesScholar,
          "Miercoles",
          "07:00:00"
        )}${filterHourActivity(scheduleTeacher, "Miercoles", "07:00:00")}`,
        `${filterHourGroup(
          schedulesScholar,
          "Jueves",
          "07:00:00"
        )}${filterHourActivity(scheduleTeacher, "Jueves", "07:00:00")}`,
        `${filterHourGroup(
          schedulesScholar,
          "Viernes",
          "07:00:00"
        )}${filterHourActivity(scheduleTeacher, "Viernes", "07:00:00")}`,
      ],
      [
        "8:50 - 9:20",
        { content: "RECREO", colSpan: 5, styles: { halign: "center" } },
      ],
      [
        "9:20 - 11:10",
        `${filterHourGroup(
          schedulesScholar,
          "Lunes",
          "09:20:00"
        )}${filterHourActivity(scheduleTeacher, "Lunes", "09:20:00")}`,
        `${filterHourGroup(
          schedulesScholar,
          "Martes",
          "09:20:00"
        )}${filterHourActivity(scheduleTeacher, "Martes", "09:20:00")}`,
        `${filterHourGroup(
          schedulesScholar,
          "Miercoles",
          "09:20:00"
        )}${filterHourActivity(scheduleTeacher, "Miercoles", "09:20:00")}`,
        `${filterHourGroup(
          schedulesScholar,
          "Jueves",
          "09:20:00"
        )}${filterHourActivity(scheduleTeacher, "Jueves", "09:20:00")}`,
        `${filterHourGroup(
          schedulesScholar,
          "Viernes",
          "09:20:00"
        )}${filterHourActivity(scheduleTeacher, "Viernes", "09:20:00")}`,
      ],
      [
        "11:10 - 13:00",
        `${filterHourGroup(
          schedulesScholar,
          "Lunes",
          "11:10:00"
        )}${filterHourActivity(scheduleTeacher, "Lunes", "11:10:00")}`,
        `${filterHourGroup(
          schedulesScholar,
          "Martes",
          "11:10:00"
        )}${filterHourActivity(scheduleTeacher, "Martes", "11:10:00")}`,
        `${filterHourGroup(
          schedulesScholar,
          "Miercoles",
          "11:10:00"
        )}${filterHourActivity(scheduleTeacher, "Miercoles", "11:10:00")}`,
        `${filterHourGroup(
          schedulesScholar,
          "Jueves",
          "11:10:00"
        )}${filterHourActivity(scheduleTeacher, "Jueves", "11:10:00")}`,
        `${filterHourGroup(
          schedulesScholar,
          "Viernes",
          "11:10:00"
        )}${filterHourActivity(scheduleTeacher, "Viernes", "11:10:00")}`,
      ],
      [
        "13:00 - 13:10",
        { content: "RECREO", colSpan: 5, styles: { halign: "center" } },
      ],
      [
        "13:10 - 15:00",
        `${filterHourGroup(
          schedulesScholar,
          "Lunes",
          "13:10:00"
        )}${filterHourActivity(scheduleTeacher, "Lunes", "13:10:00")}`,
        `${filterHourGroup(
          schedulesScholar,
          "Martes",
          "13:10:00"
        )}${filterHourActivity(scheduleTeacher, "Martes", "13:10:00")}`,
        `${filterHourGroup(
          schedulesScholar,
          "Miercoles",
          "13:10:00"
        )}${filterHourActivity(scheduleTeacher, "Miercoles", "13:10:00")}`,
        `${filterHourGroup(
          schedulesScholar,
          "Jueves",
          "13:10:00"
        )}${filterHourActivity(scheduleTeacher, "Jueves", "13:10:00")}`,
        `${filterHourGroup(
          schedulesScholar,
          "Viernes",
          "13:10:00"
        )}${filterHourActivity(scheduleTeacher, "Viernes", "13:10:00")}`,
      ],
    ];

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
        0: { cellWidth: 50 },
      },
      head: [columns],
      body: data,
      theme: "grid",
    });

    // Get current date
    const options = { day: "numeric", month: "long", year: "numeric" };
    const today = new Date();
    const formattedDate = today.toLocaleDateString("es-ES", options);

    const infoSchool = [
      ["", "", `Balancán, Tabasco a ${formattedDate}`],
      [
        {
          content: "Encargado De Despacho De La Dirección De La Escuela",
          styles: { font: "Montserrat-Bold" },
        },
        {
          content: "Vo. Bo",
          rowSpan: 4,
          styles: { halign: "center" },
        },
        {
          content: "Subdirección Académica",
          styles: { font: "Montserrat-Bold" },
        },
      ],
      [roles[1].workers.name, roles[0].workers.name],
      [
        {
          content: "Director(a) De Educación Superior",
          styles: { font: "Montserrat-Bold" },
        },
        {
          content: "Coordinador(a) De Escuelas Normales IESMA Y UPN",
          styles: { font: "Montserrat-Bold" },
        },
      ],
      [
        stateRoles[0].name_worker.toUpperCase(),
        stateRoles[1].name_worker.toUpperCase(),
      ],
    ];

    doc.autoTable({
      styles: {
        halign: "center",
        valign: "middle",
        font: "Montserrat-Regular",
        fontSize: 9,
      },
      body: infoSchool,
      theme: "plain",
    });

    doc.output("dataurlnewwindow");
  };

  if (isLoadingRoles || isLoadingStateRoles) return <Spinner />;

  return (
    <Button variation="secondary" onClick={generatePDF}>
      Generar horario del maestro
    </Button>
  );
}

export default ScheduleTeacherPDF;
