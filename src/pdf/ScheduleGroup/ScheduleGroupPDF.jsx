import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import TableScheduleGroup from "./TableScheduleGroup";

// Create styles
const styles = StyleSheet.create({
  page: {
    color: "black",
  },
  section: {
    margin: 10,
    padding: 10,
  },
  viewer: {
    width: 900, //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
  },
});

function ScheduleGroupPDF() {
  return (
    <PDFViewer style={styles.viewer}>
      <TableScheduleGroup />
    </PDFViewer>
  );
}

export default ScheduleGroupPDF;
