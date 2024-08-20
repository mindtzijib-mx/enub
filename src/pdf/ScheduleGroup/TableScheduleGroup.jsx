import { Page, Document, StyleSheet, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    fontSize: 11,
    flexDirection: "column",
  },
});
function TableScheduleGroup() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>Hello</View>
      </Page>
    </Document>
  );
}

export default TableScheduleGroup;
