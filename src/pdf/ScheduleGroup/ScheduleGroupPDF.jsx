import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import "../../styles/Montserrat-Regular-normal";
import "../../styles/Montserrat-Italic-italic";
import "../../styles/Montserrat-Bold-bold";
import "../../styles/Montserrat-BoldItalic-bolditalic";
import Button from "../../ui/Button";
import filterHour from "./FilterHour.js";
import { useRoles } from "../../features/roles/useRoles.js";
import { useStateRoles } from "../../features/stateRoles/useStateRoles.js";
import Spinner from "../../ui/Spinner.jsx";

function ScheduleGroupPDF({ schedules }) {
  const { isLoading: isLoadingRoles, roles } = useRoles();
  const { isLoading: isLoadingStateRoles, stateRoles } = useStateRoles();

  const generatePDF = () => {
    const doc = new jsPDF();

    const infoGroup = [
      ["ESCUELA: NORMAL URBANA", `PERIODO ESCOLAR: <>`],
      [`LIC LEPRI`, `PLAN: 2022`],
    ];

    const columns = ["", "LUNES", "MARTES", "MIÉRCOLES", "JUEVES", "VIERNES"];
    const data = [
      [
        "7:00 - 8:50",
        "Homenaje / Tutoria",
        filterHour(schedules, "Martes", "07:00:00"),
        filterHour(schedules, "Miercoles", "07:00:00"),
        filterHour(schedules, "Jueves", "07:00:00"),
        filterHour(schedules, "Viernes", "07:00:00"),
      ],
      [
        "8:50 - 9:20",
        { content: "RECREO", colSpan: 5, styles: { halign: "center" } },
      ],
      [
        "9:20 - 11:10",
        filterHour(schedules, "Lunes", "09:20:00"),
        filterHour(schedules, "Martes", "09:20:00"),
        filterHour(schedules, "Miercoles", "09:20:00"),
        filterHour(schedules, "Jueves", "09:20:00"),
        filterHour(schedules, "Viernes", "09:20:00"),
      ],
      [
        "11:10 - 13:00",
        filterHour(schedules, "Lunes", "11:10:00"),
        filterHour(schedules, "Martes", "11:10:00"),
        filterHour(schedules, "Miercoles", "11:10:00"),
        filterHour(schedules, "Jueves", "11:10:00"),
        filterHour(schedules, "Viernes", "11:10:00"),
      ],
      [
        "13:00 - 13:10",
        { content: "RECREO", colSpan: 5, styles: { halign: "center" } },
      ],
      [
        "13:10 - 15:00",
        filterHour(schedules, "Lunes", "13:10:00"),
        filterHour(schedules, "Martes", "13:10:00"),
        filterHour(schedules, "Miercoles", "13:10:00"),
        filterHour(schedules, "Jueves", "13:10:00"),
        filterHour(schedules, "Viernes", "13:10:00"),
      ],
    ];

    // Header

    doc.autoTable({
      styles: {
        halign: "center",
        font: "Montserrat-Bold",
        fontStyle: "bold",
      },
      body: [["a", "APRENDER PARA ENSEÑAR", ""]],
      theme: "plain",
    });

    // Information about groups

    doc.autoTable({
      styles: {
        valign: "middle",
        font: "Montserrat-Regular",
      },
      body: infoGroup,
      theme: "plain",
    });

    // Schedule of the group

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
        0: { cellWidth: 25 },
      },
      head: [columns],
      body: data,
      theme: "grid",
    });

    const infoSchool = [
      ["", "", "Balancán, Tabasco a 19 de August del 2024"],
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

    const infoFooter = [
      ["Col. Las Flores. CP. 86930"],
      ["Teléfono (934) 344 04 77, 344 04 88"],
      ["Balancán, Tabasco"],
      ["escuela.normalurbana@correo.setab.gob.mx"],
    ];

    doc.autoTable({
      styles: {
        font: "Montserrat-Regular",
        fontSize: 9,
      },
      body: infoFooter,
      theme: "plain",
    });

    doc.output("dataurlnewwindow");
  };

  if (isLoadingRoles || isLoadingStateRoles) return <Spinner />;

  return (
    <Button variation="secondary" onClick={generatePDF}>
      Generar horario grupal
    </Button>
  );
}

export default ScheduleGroupPDF;
