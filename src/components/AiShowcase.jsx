import React, { useState } from 'react';
import { Brain, HeartHandshake, Sparkles, CheckCircle2, AlertCircle, RefreshCw, Layers, ShieldAlert, Cpu } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function AiShowcase() {
  const [activeTab, setActiveTab] = useState('leaf');

  // Leaf Disease Simulator State
  const leafSamples = [
    {
      id: 1,
      name: "Tomato Leaf Sample #7080",
      disease: "Tomato Early Blight (Alternaria solani)",
      confidence: "98.7%",
      ensembleScore: "99.93% ROC-AUC",
      status: "Diseased",
      severity: "High",
      treatment: "Apply copper-based fungicide spray every 7-10 days and prune affected lower foliage.",
      featuresExtracted: ["Xception: Concentric Ring Lesions", "ResNet: Chlorotic Halo", "VGG19: Edge Necrosis"]
    },
    {
      id: 2,
      name: "Corn Leaf Sample #4120",
      disease: "Corn Common Rust (Puccinia sorghi)",
      confidence: "96.4%",
      ensembleScore: "99.85% ROC-AUC",
      status: "Diseased",
      severity: "Medium",
      treatment: "Utilize resistant hybrid cultivars and apply foliar fungicide if humidity remains > 90%.",
      featuresExtracted: ["Xception: Pustule Density", "ResNet: Brown Spore Pustules", "VGG19: Epidermal Rupture"]
    },
    {
      id: 3,
      name: "Potato Leaf Sample #1290",
      disease: "Potato Late Blight (Phytophthora infestans)",
      confidence: "99.2%",
      ensembleScore: "99.96% ROC-AUC",
      status: "Diseased",
      severity: "Critical",
      treatment: "Destroy infected tubers immediately; apply Mancozeb protective spray.",
      featuresExtracted: ["Xception: Water-soaked Lesions", "ResNet: White Mildew Underside", "VGG19: Rapid Stem Collapse"]
    },
    {
      id: 4,
      name: "Apple Leaf Sample #0912",
      disease: "Healthy Leaf (No Pathology Detected)",
      confidence: "99.8%",
      ensembleScore: "99.99% ROC-AUC",
      status: "Healthy",
      severity: "None",
      treatment: "No treatment required. Maintain regular watering schedule and soil nutrient testing.",
      featuresExtracted: ["Xception: Uniform Chlorophyll Density", "ResNet: Smooth Margin", "VGG19: Intact Cuticle"]
    }
  ];

  const [selectedLeaf, setSelectedLeaf] = useState(leafSamples[0]);
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState(null);

  const handleScanLeaf = () => {
    setIsScanning(true);
    setScanResult(null);

    setTimeout(() => {
      setIsScanning(false);
      setScanResult(selectedLeaf);
      confetti({ particleCount: 30, spread: 60, origin: { y: 0.7 } });
    }, 1200);
  };

  // LifeFlow Blood Matcher State
  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];
  const [patientBloodGroup, setPatientBloodGroup] = useState('O-');
  const [isMatching, setIsMatching] = useState(false);
  const [matchedDonors, setMatchedDonors] = useState(null);

  const mockDonors = {
    'O-': [
      { name: "Tanvir Rahman", group: "O-", dist: "1.2 km", hospital: "Uttara Crescent Hospital", status: "Verified & Available", phone: "+880171****90" },
      { name: "Nusrat Jahan", group: "O-", dist: "2.8 km", hospital: "IUB Medical Center", status: "Verified & Available", phone: "+880182****44" }
    ],
    'A+': [
      { name: "Rafiqul Islam", group: "A+", dist: "0.8 km", hospital: "Dhaka Medical College", status: "Verified & Available", phone: "+880191****12" },
      { name: "Sumi Akter", group: "O+", dist: "1.5 km (Universal Donor)", hospital: "Uttarkhan General Clinic", status: "Verified & Available", phone: "+880161****88" }
    ],
    'AB+': [
      { name: "Farhan Ahmed", group: "AB+", dist: "0.5 km", hospital: "United Hospital Gulshan", status: "Universal Recipient Matched", phone: "+880175****33" },
      { name: "Kazi Nazmul", group: "B+", dist: "1.9 km", hospital: "Uttara Sector 11", status: "Verified & Available", phone: "+880181****77" }
    ]
  };

  const handleMatchBlood = () => {
    setIsMatching(true);
    setMatchedDonors(null);

    setTimeout(() => {
      setIsMatching(false);
      const results = mockDonors[patientBloodGroup] || [
        { name: "Emergency Donor Pool #1", group: patientBloodGroup, dist: "1.4 km", hospital: "Dhaka Central Hospital", status: "Verified & Available", phone: "+880173****55" },
        { name: "Emergency Donor Pool #2", group: "O-", dist: "3.1 km (Universal Donor)", hospital: "Kurmitola General Hospital", status: "Verified & Available", phone: "+880189****11" }
      ];
      setMatchedDonors(results);
      confetti({ particleCount: 40, spread: 70, origin: { y: 0.7 } });
    }, 1000);
  };

  return (
    <section id="ai-showcase" style={{ padding: '5rem 0', position: 'relative', background: 'rgba(17, 24, 39, 0.4)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-tag">
            <Brain size={16} />
            <span>Interactive Project Simulators</span>
          </div>
          <h2 className="section-title">
            Experience <span className="text-gradient-cyan">Live Model Logic</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Test simulated inference for Abila's Deep Learning Plant Classifier and LifeFlow Emergency Blood Donor Matcher directly in your browser.
          </p>
        </div>

        {/* Tab Switcher */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
          <button
            onClick={() => setActiveTab('leaf')}
            style={{
              background: activeTab === 'leaf' ? 'linear-gradient(135deg, rgba(192, 132, 252, 0.25) 0%, rgba(56, 189, 248, 0.25) 100%)' : 'rgba(255, 255, 255, 0.04)',
              color: activeTab === 'leaf' ? 'var(--text-main)' : 'var(--text-muted)',
              border: activeTab === 'leaf' ? '1px solid rgba(192, 132, 252, 0.4)' : '1px solid var(--border-color)',
              padding: '0.75rem 1.5rem',
              borderRadius: 'var(--radius-full)',
              fontWeight: 600,
              fontSize: '0.95rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.2s ease'
            }}
          >
            <Brain size={18} style={{ color: 'var(--accent-purple)' }} />
            <span>Plant Disease ML Scanner (95.45% Acc)</span>
          </button>

          <button
            onClick={() => setActiveTab('lifeflow')}
            style={{
              background: activeTab === 'lifeflow' ? 'linear-gradient(135deg, rgba(56, 189, 248, 0.25) 0%, rgba(52, 211, 153, 0.25) 100%)' : 'rgba(255, 255, 255, 0.04)',
              color: activeTab === 'lifeflow' ? 'var(--text-main)' : 'var(--text-muted)',
              border: activeTab === 'lifeflow' ? '1px solid rgba(56, 189, 248, 0.4)' : '1px solid var(--border-color)',
              padding: '0.75rem 1.5rem',
              borderRadius: 'var(--radius-full)',
              fontWeight: 600,
              fontSize: '0.95rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.2s ease'
            }}
          >
            <HeartHandshake size={18} style={{ color: 'var(--accent-cyan)' }} />
            <span>LifeFlow Donor Matcher Simulator</span>
          </button>
        </div>

        {/* TAB 1: Plant Disease ML Simulator */}
        {activeTab === 'leaf' && (
          <div className="glass-card" style={{ padding: '2rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'center' }}>
              
              {/* Left Column - Input Picker */}
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.6rem', color: 'var(--text-main)' }}>
                  1. Select a Sample Leaf Image
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1.25rem' }}>
                  Simulates feeding a 224x224 RGB image tensor into the 3-branch feature concatenation ensemble (Xception + VGG19 + ResNet152V2).
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  {leafSamples.map((sample) => (
                    <div
                      key={sample.id}
                      onClick={() => { setSelectedLeaf(sample); setScanResult(null); }}
                      style={{
                        padding: '0.85rem 1.1rem',
                        borderRadius: 'var(--radius-md)',
                        background: selectedLeaf.id === sample.id ? 'rgba(192, 132, 252, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                        border: selectedLeaf.id === sample.id ? '1px solid var(--accent-purple)' : '1px solid var(--border-color)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <div>
                        <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-main)' }}>
                          {sample.name}
                        </div>
                        <div style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>
                          Target: {sample.disease.split(' (')[0]}
                        </div>
                      </div>
                      <span className={`badge badge-${sample.status === 'Healthy' ? 'emerald' : 'purple'}`}>
                        {sample.status}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleScanLeaf}
                  disabled={isScanning}
                  className="btn-primary"
                  style={{ width: '100%', padding: '0.85rem', gap: '0.6rem', background: 'linear-gradient(135deg, #a855f7 0%, #0284c7 100%)' }}
                >
                  {isScanning ? (
                    <>
                      <RefreshCw size={18} className="animate-spinSlow" />
                      <span>Fusing Feature Concatenation Maps...</span>
                    </>
                  ) : (
                    <>
                      <Cpu size={18} />
                      <span>Run Ensemble Model Classifier</span>
                    </>
                  )}
                </button>
              </div>

              {/* Right Column - Results Display */}
              <div style={{
                background: 'rgba(5, 7, 12, 0.7)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.75rem',
                border: '1px solid var(--border-color)',
                minHeight: '340px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                {!scanResult && !isScanning && (
                  <div style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
                    <Layers size={48} style={{ color: 'var(--accent-purple)', opacity: 0.5, marginBottom: '1rem' }} />
                    <h4 style={{ color: 'var(--text-main)', marginBottom: '0.4rem' }}>Ready for Inference</h4>
                    <p style={{ fontSize: '0.875rem' }}>Click "Run Ensemble Model Classifier" to trigger real-time predictions.</p>
                  </div>
                )}

                {isScanning && (
                  <div style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
                    <div style={{ fontSize: '1.1rem', color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: '1rem' }}>
                      Evaluating 7,080-trained Ensemble Model Weights...
                    </div>
                    <div style={{ width: '100%', height: '8px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                      <div className="animate-pulse-glow" style={{ width: '75%', height: '100%', background: 'linear-gradient(90deg, #c084fc 0%, #38bdf8 100%)' }} />
                    </div>
                  </div>
                )}

                {scanResult && !isScanning && (
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
                      <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                        Inference Output: #7080
                      </span>
                      <span className="badge badge-cyan">{scanResult.ensembleScore}</span>
                    </div>

                    <div style={{ marginBottom: '1.25rem' }}>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Detected Plant Pathology
                      </div>
                      <div style={{ fontSize: '1.35rem', fontWeight: 800, color: scanResult.status === 'Healthy' ? 'var(--accent-emerald)' : 'var(--accent-purple)', margin: '0.2rem 0' }}>
                        {scanResult.disease}
                      </div>
                      <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                        <span>Confidence Score: <strong style={{ color: 'var(--text-main)' }}>{scanResult.confidence}</strong></span>
                        <span>Severity Level: <strong style={{ color: 'var(--accent-amber)' }}>{scanResult.severity}</strong></span>
                      </div>
                    </div>

                    {/* Features Extracted */}
                    <div style={{ marginBottom: '1.25rem', background: 'rgba(255, 255, 255, 0.03)', padding: '0.85rem', borderRadius: 'var(--radius-md)' }}>
                      <div style={{ fontSize: '0.775rem', fontWeight: 700, color: 'var(--accent-cyan)', marginBottom: '0.4rem' }}>
                        Concatenated Deep Feature Maps:
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                        {scanResult.featuresExtracted.map((feat, fIdx) => (
                          <span key={fIdx} style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', background: 'rgba(56, 189, 248, 0.1)', color: 'var(--accent-cyan)', padding: '0.2rem 0.6rem', borderRadius: 'var(--radius-sm)' }}>
                            {feat}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actionable Treatment Advice */}
                    <div style={{ background: 'rgba(52, 211, 153, 0.1)', border: '1px solid rgba(52, 211, 153, 0.25)', padding: '0.85rem 1rem', borderRadius: 'var(--radius-md)' }}>
                      <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-emerald)', marginBottom: '0.2rem' }}>
                        Agronomic Recommendation:
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-main)' }}>
                        {scanResult.treatment}
                      </div>
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>
        )}

        {/* TAB 2: LifeFlow Blood Matcher Simulator */}
        {activeTab === 'lifeflow' && (
          <div className="glass-card" style={{ padding: '2rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'center' }}>
              
              {/* Left Column - Recipient Selector */}
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.6rem', color: 'var(--text-main)' }}>
                  LifeFlow Emergency Blood Matching Algorithm
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1.25rem' }}>
                  Simulates FastAPI backend logic connecting patients to verified nearby blood donors with automated compatibility verification.
                </p>

                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                    Select Urgent Recipient Blood Group:
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}>
                    {bloodGroups.map((bg) => (
                      <button
                        key={bg}
                        onClick={() => { setPatientBloodGroup(bg); setMatchedDonors(null); }}
                        style={{
                          padding: '0.6rem',
                          borderRadius: 'var(--radius-md)',
                          background: patientBloodGroup === bg ? 'rgba(56, 189, 248, 0.2)' : 'rgba(255, 255, 255, 0.03)',
                          border: patientBloodGroup === bg ? '1px solid var(--accent-cyan)' : '1px solid var(--border-color)',
                          color: patientBloodGroup === bg ? 'var(--accent-cyan)' : 'var(--text-main)',
                          fontWeight: 700,
                          fontSize: '0.9rem',
                          cursor: 'pointer'
                        }}
                      >
                        {bg}
                      </button>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: '1.5rem', fontSize: '0.825rem', color: 'var(--text-muted)', background: 'rgba(255, 255, 255, 0.02)', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                  Location: <strong style={{ color: 'var(--text-main)' }}>Uttarkhan / Gulshan / Dhaka Hospitals</strong> (Radius: 5 km)
                </div>

                <button
                  onClick={handleMatchBlood}
                  disabled={isMatching}
                  className="btn-primary"
                  style={{ width: '100%', padding: '0.85rem', gap: '0.6rem' }}
                >
                  {isMatching ? (
                    <>
                      <RefreshCw size={18} className="animate-spinSlow" />
                      <span>Querying Live SQLite Donor Registry...</span>
                    </>
                  ) : (
                    <>
                      <HeartHandshake size={18} />
                      <span>Find Compatible Donors</span>
                    </>
                  )}
                </button>
              </div>

              {/* Right Column - Matching Donors Output */}
              <div style={{
                background: 'rgba(5, 7, 12, 0.7)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.75rem',
                border: '1px solid var(--border-color)',
                minHeight: '340px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                {!matchedDonors && !isMatching && (
                  <div style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
                    <HeartHandshake size={48} style={{ color: 'var(--accent-cyan)', opacity: 0.5, marginBottom: '1rem' }} />
                    <h4 style={{ color: 'var(--text-main)', marginBottom: '0.4rem' }}>LifeFlow Match Engine Idle</h4>
                    <p style={{ fontSize: '0.875rem' }}>Select a blood type and click "Find Compatible Donors".</p>
                  </div>
                )}

                {isMatching && (
                  <div style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
                    <div style={{ fontSize: '1.1rem', color: 'var(--accent-emerald)', fontWeight: 600, marginBottom: '1rem' }}>
                      Executing Role-Based Donor Compatibility Logic...
                    </div>
                    <div style={{ width: '100%', height: '8px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                      <div className="animate-pulse-glow" style={{ width: '80%', height: '100%', background: 'linear-gradient(90deg, #38bdf8 0%, #34d399 100%)' }} />
                    </div>
                  </div>
                )}

                {matchedDonors && !isMatching && (
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
                      <span style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                        Matches for Patient Group: {patientBloodGroup}
                      </span>
                      <span className="badge badge-emerald">{matchedDonors.length} Verified Donors Found</span>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                      {matchedDonors.map((donor, idx) => (
                        <div
                          key={idx}
                          style={{
                            background: 'rgba(255, 255, 255, 0.03)',
                            padding: '1rem',
                            borderRadius: 'var(--radius-md)',
                            border: '1px solid var(--border-color)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                          }}
                        >
                          <div>
                            <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-main)' }}>
                              {donor.name}
                            </div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                              {donor.hospital} • {donor.dist}
                            </div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--accent-emerald)', marginTop: '0.2rem' }}>
                              Status: {donor.status}
                            </div>
                          </div>
                          <div style={{ textAlign: 'right' }}>
                            <span className="badge badge-cyan" style={{ fontSize: '0.85rem' }}>
                              {donor.group}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div style={{ marginTop: '1.25rem', fontSize: '0.775rem', color: 'var(--text-sub)', textAlign: 'center', fontFamily: 'var(--font-mono)' }}>
                      Integrated with Swagger REST API & Vercel/Render GitHub Actions CI/CD
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
