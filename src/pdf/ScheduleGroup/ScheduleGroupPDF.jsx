import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import "../../styles/Montserrat-Regular-normal";
import "../../styles/Montserrat-Italic-italic";
import "../../styles/Montserrat-Bold-bold";
import "../../styles/Montserrat-BoldItalic-bolditalic";
import Button from "../../ui/Button";
import filterHour from "./FilterHour";

function ScheduleGroupPDF({ schedules }) {
  const generatePDF = () => {
    const doc = new jsPDF();

    const options = {};

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
        { content: "Recreo", colSpan: 5, styles: { halign: "center" } },
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
        { content: "Recreo", colSpan: 5, styles: { halign: "center" } },
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

    doc.autoTable({
      styles: {
        halign: "center",
        font: "Montserrat-Bold",
        fontStyle: "bold",
      },
      body: [["a", "APRENDER PARA ENSEÑAR", ""]],
      theme: "plain",
    });

    doc.autoTable({
      styles: {
        valign: "middle",
        font: "Montserrat-Regular",
      },
      body: infoGroup,
      theme: "plain",
    });

    doc.autoTable({
      styles: {
        halign: "center",
        valign: "middle",
        font: "Montserrat-Regular",
        fontSize: 9,
      },
      headStyles: {
        fillColor: [0, 0, 0],
        font: "Montserrat-Bold",
      },
      head: [columns],
      body: data,
    });

    doc.output("dataurlnewwindow");

    console.log(doc.getFontList());
  };

  console.log(schedules);

  return (
    <Button variation="secondary" onClick={generatePDF}>
      Generar horario grupal
    </Button>
  );
}

export default ScheduleGroupPDF;
