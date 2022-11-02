function bmi(weight, height) {
  const val = weight / Math.pow(height, 2);

  if (val <= 18.5) {
    return "Underweight";
  } else if (val <= 25.0) {
    return "Normal";
  } else if (val <= 30.0) {
    return "Overweight";
  } else if (val > 30.0) {
    return "Obese";
  }
}
