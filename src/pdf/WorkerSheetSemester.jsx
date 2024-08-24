import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import "../styles/Montserrat-Regular-normal.js";
import "../styles/Montserrat-Italic-italic.js";
import "../styles/Montserrat-Bold-bold.js";
import "../styles/Montserrat-BoldItalic-bolditalic.js";
import Button from "../ui/Button";
import { useRoles } from "../features/roles/useRoles.js";

function WorkerSheetSemester() {
  const { isLoading: isLoadingRoles, roles } = useRoles();

  const generatePDF = () => {
    const doc = new jsPDF("landscape", "px", "letter");

    // Header

    const logoEnub = new Image();
    logoEnub.src = "/enub.jpg";
    doc.addImage(logoEnub, "JPG", 510, 10, 50, 50);

    const logoSetab = new Image();
    logoSetab.src = "/setab.jpeg";
    doc.addImage(logoSetab, "JPEG", 30, 5, 60, 60);

    doc.autoTable({
      willDrawPage: function (data) {
        // Header
        doc.autoTable({
          styles: {
            halign: "center",
            font: "Montserrat-Italic",
            fontStyle: "italic",
            fontSize: 7,
          },
          body: [["SECRETARÍA DE EDUCACIÓN"]],
          theme: "plain",
          startY: 5,
        });

        doc.autoTable({
          styles: {
            halign: "center",
            font: "Montserrat-Italic",
            fontStyle: "italic",
            fontSize: 7,
          },
          body: [["SUBSECRETARÍA DE EDUCACIÓN MEDIA Y SUPERIOR"]],
          theme: "plain",
          startY: doc.lastAutoTable.finalY - 5,
        });

        doc.autoTable({
          styles: {
            halign: "center",
            font: "Montserrat-Italic",
            fontStyle: "italic",
            fontSize: 7,
          },
          body: [["DIRECCIÓN DE EDUCACIÓN SUPERIOR"]],
          theme: "plain",
          startY: doc.lastAutoTable.finalY - 5,
        });

        doc.autoTable({
          styles: {
            halign: "center",
            font: "Montserrat-Italic",
            fontStyle: "italic",
            fontSize: 7,
          },
          body: [["COORDINACIÓN DE ESCUELAS NORMALES, IESMA Y UPN"]],
          theme: "plain",
          startY: doc.lastAutoTable.finalY - 5,
        });

        let wantedTableWidth = 360;
        let pageWidth = doc.internal.pageSize.width;
        let margin1 = (pageWidth - wantedTableWidth) / 2;

        doc.autoTable({
          styles: {
            halign: "center",
            font: "Montserrat-BoldItalic",
            fontStyle: "bolditalic",
            fontSize: 7,
          },
          columnStyles: {
            0: { cellWidth: 90 },
            1: { cellWidth: 90 },
            2: { cellWidth: 90 },
            3: { cellWidth: 90 },
          },
          body: [
            [
              "ESCUELA: NORMAL URBANA",
              "PLAN DE ESTUDIOS: 2022",
              "C.C.T.27DNL0001K",
              "MODALIDAD: ESCOLARIZADA",
            ],
            [
              {
                content: "LICENCIATURA: EN EDUCACIÓN PRIMARIA Y PREESCOLAR",
                colSpan: 2,
              },
              "TURNO:MATUTINO",
              "CICLO ESCOLAR: 2022-2023",
            ],
            [
              {
                content: "DIRECCIÓN: PERIFÉRICO S/N.  COL. LAS FLORES",
                colSpan: 2,
              },
              {
                content: "MUNICIPIO: BALANCÁN, TABASCO.",
                colSpan: 2,
              },
            ],
          ],
          theme: "plain",
          margin: { left: margin1, right: margin1 },
          startY: doc.lastAutoTable.finalY,
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

    doc.output("dataurlnewwindow");
  };

  return <Button onClick={generatePDF}>Imprimir plantilla horaria</Button>;
}

export default WorkerSheetSemester;
