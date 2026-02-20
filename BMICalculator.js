import React, { useState } from "react";
import "./BMICalculator.css";

function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    if (!weight || !height) {
      alert("Please enter both height and weight");
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    setBmi(bmiValue);
    setCategory(getBMICategory(bmiValue));
  };

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) return "Underweight";
    if (bmi >= 18.5 && bmi < 24.9) return "Normal Weight";
    if (bmi >= 25 && bmi < 29.9) return "Overweight";
    return "Obese";
  };

  const resetFields = () => {
    setWeight("");
    setHeight("");
    setBmi(null);
    setCategory("");
  };

  return (
    <div className="bmi-container">
      <h2>BMI Calculator</h2>

      <div className="input-group">
        <label>Weight (kg)</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Enter weight"
        />
      </div>

      <div className="input-group">
        <label>Height (cm)</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Enter height"
        />
      </div>

      <div className="button-group">
        <button onClick={calculateBMI}>Calculate</button>
        <button onClick={resetFields} className="reset">
          Reset
        </button>
      </div>

      {bmi && (
        <div className="result">
          <h3>Your BMI: {bmi}</h3>
          <p>Category: {category}</p>
        </div>
      )}
    </div>
  );
}

export default BMICalculator;
