import React, { useState } from "react";
import "./App.css";
import img1 from './images/BMI.jpg';

export default function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    if (weight > 0 && height > 0) {
      const heightInMeters = height / 100;
      const calculatedBMI = weight / (heightInMeters * heightInMeters);
      const roundedBMI = parseFloat(calculatedBMI.toFixed(1));
      setBmi(roundedBMI);
      determineBMICategory(roundedBMI);
    } else {
      alert("Please enter valid height and weight.");
    }
  };

  const determineBMICategory = (bmi) => {
    if (bmi < 18.5) {
      setCategory("Under Weight");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setCategory("Normal Weight");
    } else if (bmi >= 25 && bmi <= 29.9) {
      setCategory("Over Weight");
    } else {
      setCategory("Obese");
    }
  };

  const resetForm = () => {
    setWeight("");
    setHeight("");
    setBmi(null);
    setCategory("");
  };

  return (
    <div className="bmi-container">
      <img src={img1} alt="BMI Illustration" className="bmi-image" />
      <h1 className="bmi-title">BMI Calculator</h1>
      <div className="bmi-input-group">
        <label>Weight (kg)</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Enter weight"
        />
      </div>
      <div className="bmi-input-group">
        <label>Height (cm)</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Enter height"
        />
      </div>
      <div className="bmi-button-group">
        <button className="bmi-button" onClick={calculateBMI}>
          Calculate BMI
        </button>
        <button className="bmi-button reset-button" onClick={resetForm}>
          Reset
        </button>
      </div>

      {bmi && (
        <div className="bmi-result">
          <p>Your BMI: <strong>{bmi}</strong></p>
          <p className="bmi-category">{category}</p>
        </div>
      )}
    </div>
  );
}
