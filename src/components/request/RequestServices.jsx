import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import ClearIcon from "@mui/icons-material/Clear";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

export const ServiceRequestForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    description: "",
    urgency: "medium",
    agreeTerms: false,
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    description: "",
    agreeTerms: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      description: "",
      agreeTerms: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      valid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
      valid = false;
    } else if (!/^[\d\s\-()+]{10,20}$/.test(formData.phone)) {
      newErrors.phone = "Phone is invalid";
      valid = false;
    }

    if (!formData.serviceType) {
      newErrors.serviceType = "Service type is required";
      valid = false;
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
      valid = false;
    } else if (formData.description.trim().length < 20) {
      newErrors.description = "Description must be at least 20 characters";
      valid = false;
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = "You must agree to the terms";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Simulate API call
      setTimeout(() => {
        toast.success(
          <div className="flex items-center">
            <CheckCircleOutlineIcon className="mr-2" />
            Service request submitted successfully!
          </div>
        );
        console.log("Form submitted:", formData);
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          serviceType: "",
          description: "",
          urgency: "medium",
          agreeTerms: false,
        });
      }, 1000);
    } else {
      toast.error(
        <div className="flex items-center">
          <ErrorOutlineIcon className="mr-2" />
          Please fix the errors in the form
        </div>
      );
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      description: "",
      urgency: "medium",
      agreeTerms: false,
    });
    setErrors({
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      description: "",
      agreeTerms: "",
    });
  };

  return (
    <div className="min-h-screen mt-4 mb-2 text-black bg-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <ToastContainer position="top-right" autoClose={5000} />

      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">
              Service Request Form
            </h2>
            <p className="mt-2 text-gray-600">
              Fill out the form to request our services
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 text-black">
            <div>
              <TextField
                fullWidth
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
                variant="outlined"
              />
            </div>

            <div>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                variant="outlined"
              />
            </div>

            <div>
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                error={!!errors.phone}
                helperText={errors.phone}
                variant="outlined"
              />
            </div>

            <div>
              <TextField
                fullWidth
                select
                // label="Service Type"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                error={!!errors.serviceType}
                helperText={errors.serviceType}
                variant="outlined"
                SelectProps={{
                  native: true,
                }}
              >
                <option value="">Select a service</option>
                <option value="consultation">Consultation</option>
                <option value="repair">Repair Service</option>

                <option value="other">Other</option>
              </TextField>
            </div>

            <div>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Service Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                error={!!errors.description}
                helperText={errors.description}
                variant="outlined"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Urgency Level
              </label>
              <div className="flex space-x-4">
                {["low", "medium", "high"].map((level) => (
                  <label key={level} className="inline-flex items-center">
                    <input
                      type="radio"
                      name="urgency"
                      value={level}
                      checked={formData.urgency === level}
                      onChange={handleChange}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                    />
                    <span className="ml-2 text-gray-700 capitalize">
                      {level}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="agreeTerms"
                  name="agreeTerms"
                  type="checkbox"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="agreeTerms"
                  className="font-medium text-gray-700"
                >
                  I agree to the terms and conditions
                </label>
                {errors.agreeTerms && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.agreeTerms}
                  </p>
                )}
              </div>
            </div>

            <div className="flex justify-end gap-6 space-x-4">
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<ClearIcon />}
                onClick={handleReset}
                className="bg-white hover:bg-gray-50"
              >
                Reset
              </Button>
              <button
                variant="contained"
                color="primary"
                type="submit"
                startIcon={<SendIcon />}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 font-semibold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
