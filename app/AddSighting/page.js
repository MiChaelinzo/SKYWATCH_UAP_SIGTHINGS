"use client"

import React, { useState, useEffect } from 'react';

const AddData = () => {
  const [formData, setFormData] = useState({
    event_date_time: '',
    city: '',
    state_provinces: '',
    shape: '',
    duration: '',
    summary: '',
    posted: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/addData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        setFormData({
          event_date_time: '',
          city: '',
          state_provinces: '',
          shape: '',
          duration: '',
          summary: '',
          posted: '',
        });
      } else {
        console.error('Failed to add data to the database.');
      }
    } catch (error) {
      console.error('An error occurred while adding data:', error);
    }
  };

  const currentDate = new Date().toISOString().slice(0, 10);

  useEffect(() => {
    setFormData((prev) => ({ ...prev, posted: currentDate }));
  }, [currentDate]);

  const fields = [
    { label: 'Date of Sighting', name: 'event_date_time', type: 'date' },
    { label: 'City', name: 'city', type: 'text', placeholder: 'Night City' },
    { label: 'State / Province', name: 'state_provinces', type: 'text', placeholder: 'State of Sighting' },
    { label: 'Shape of Object', name: 'shape', type: 'text', placeholder: 'Triangle, Sphere, Disc...' },
    { label: 'Duration', name: 'duration', type: 'time' },
    { label: 'Incident Summary', name: 'summary', type: 'text', placeholder: 'Describe what you witnessed...' },
    { label: 'Report Filed', name: 'posted', type: 'text', placeholder: 'Date posted' },
  ];

  return (
    <div className="min-h-screen py-10 px-4">
      <div className="grid place-items-center">
        <div className="flex items-center gap-2 mb-2">
          <span className="status-online"></span>
          <span className="text-xs font-sharetech text-cyber-cyan uppercase tracking-[0.3em]">Secure Upload Channel</span>
        </div>
        <h1 className="text-4xl md:text-5xl text-center text-cyber-yellow font-orbitron font-bold text-glow-yellow">
          FILE REPORT
        </h1>
        <div className="cyber-divider w-64 my-4"></div>
      </div>

      <div className="grid place-items-center py-8">
        <form onSubmit={handleSubmit} className="w-full max-w-2xl">
          <div className="cyber-card p-8 md:p-10">
            {submitted && (
              <div className="mb-6 p-3 border border-green-400/50 bg-green-400/10 text-green-400 font-sharetech text-sm uppercase tracking-widest text-center">
                ✓ Report Filed Successfully — Data Uploaded to SkyWatch Network
              </div>
            )}

            <div className="space-y-6">
              {fields.map((field) => (
                <div key={field.name} className="relative">
                  <label className="block text-xs font-sharetech text-cyber-cyan uppercase tracking-[0.2em] mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className="cyber-input w-full"
                    placeholder={field.placeholder || ''}
                  />
                </div>
              ))}

              <div className="pt-4">
                <button
                  type="submit"
                  className="cyber-btn w-full text-lg py-3"
                >
                  Submit Report
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* Footnote */}
      <div className="max-w-2xl mx-auto mt-8">
        <div className="cyber-divider mb-4"></div>
        <p className="text-xs text-gray-600 font-sharetech leading-relaxed" id="footnote-1">
          <span className="text-cyber-yellow/50 uppercase tracking-widest">// NOTICE:</span> SkyWatch compiles reported UAP sightings.
          Eyewitness accounts may be influenced by misidentification, atmospheric conditions, or perceptual limitations.
          Many reported UAPs can be attributed to conventional aircraft, satellites, drones, or weather phenomena.
        </p>
      </div>
    </div>
  );
};

export default AddData;
