function calculateSemesterGroup(entryYear) {
  // Obtener el año y mes actual
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();

  // Determinar el año escolar actual
  const schoolYear = currentMonth >= 7 ? currentYear : currentYear - 1; // Si es agosto o después, estamos en el segundo semestre

  // Calcular el número de años desde el ingreso
  const yearsElapsed = schoolYear - entryYear;

  // Determinar el grado actual
  const grade = yearsElapsed * 2 + (currentMonth >= 7 ? 1 : 0);

  return grade;
}

export default calculateSemesterGroup;
