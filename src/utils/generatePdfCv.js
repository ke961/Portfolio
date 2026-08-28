import { jsPDF } from 'jspdf';
import { profileData } from '../data/profileData';

export function downloadPdfCv() {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const margin = 15;
  const pageWidth = doc.internal.pageSize.getWidth();
  const contentWidth = pageWidth - (margin * 2);
  let y = 18;

  const checkPageBreak = (neededHeight) => {
    if (y + neededHeight > 280) {
      doc.addPage();
      y = 18;
    }
  };

  // HEADER
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.setTextColor(20, 24, 33);
  doc.text(profileData.personal.name, margin, y);
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(12);
  doc.setTextColor(100, 116, 139);
  doc.text(profileData.personal.title, margin + 65, y);
  y += 7;

  // Contact line
  doc.setFontSize(9);
  doc.setTextColor(51, 65, 85);
  const contactText = `Email: ${profileData.personal.email}   |   Phone: ${profileData.personal.phone}   |   ${profileData.personal.location}`;
  doc.text(contactText, margin, y);
  y += 5;
  const linksText = `GitHub: github.com/${profileData.personal.githubUsername}   |   LinkedIn: ${profileData.personal.linkedin}`;
  doc.text(linksText, margin, y);
  y += 5;

  // Horizontal divider
  doc.setDrawColor(203, 213, 225);
  doc.setLineWidth(0.5);
  doc.line(margin, y, margin + contentWidth, y);
  y += 6;

  // SECTION HELPER
  const addSectionHeading = (title) => {
    checkPageBreak(12);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(15, 23, 42);
    doc.text(title.toUpperCase(), margin, y);
    y += 2;
    doc.setDrawColor(56, 189, 248);
    doc.setLineWidth(0.8);
    doc.line(margin, y, margin + contentWidth, y);
    y += 5;
  };

  // 1. PROFILE
  addSectionHeading('Profile');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(51, 65, 85);
  const bioLines = doc.splitTextToSize(profileData.personal.bio, contentWidth);
  doc.text(bioLines, margin, y);
  y += (bioLines.length * 4.2) + 4;

  // 2. EDUCATION
  addSectionHeading('Education');
  profileData.education.forEach(edu => {
    checkPageBreak(12);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(15, 23, 42);
    doc.text(edu.degree, margin, y);
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(71, 85, 105);
    doc.text(edu.period, pageWidth - margin - doc.getTextWidth(edu.period), y);
    y += 4.5;

    doc.setTextColor(51, 65, 85);
    doc.text(edu.institution, margin, y);
    y += 5;
  });

  // 3. CERTIFICATIONS
  addSectionHeading('Certifications');
  profileData.certifications.forEach(cert => {
    checkPageBreak(12);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(15, 23, 42);
    doc.text(cert.title, margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(71, 85, 105);
    doc.text(cert.date, pageWidth - margin - doc.getTextWidth(cert.date), y);
    y += 4.5;

    doc.text(`${cert.issuer}  ·  Cert ID: ${cert.certId}`, margin, y);
    y += 5;
  });

  // 4. SKILLS
  addSectionHeading('Skills');
  const skillGroups = [
    { label: "Programming Languages:", val: "Python, Java (OOP), JavaScript, PHP (Basic), SQL (SQLite, MySQL)" },
    { label: "AI, ML & Computer Vision:", val: "Deep Learning, CNNs, Transfer Learning, Ensemble Methods, OpenCV, NumPy" },
    { label: "Backend & Frameworks:", val: "FastAPI, SQLAlchemy, Pydantic, RESTful APIs, JWT Auth, Passlib, SQLite, MySQL" },
    { label: "Frontend & Desktop UI:", val: "React 19, Vite, HTML5, CSS3, Tkinter, Pygame" },
    { label: "DevOps & Tools:", val: "Git, GitHub Actions (CI/CD), Vercel, Render, VS Code, Postman" },
    { label: "Languages:", val: "Bangla (Native), English (Fluent), Korean (1A)" }
  ];

  skillGroups.forEach(sg => {
    checkPageBreak(7);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(15, 23, 42);
    doc.text(`• ${sg.label} `, margin, y);
    const labelWidth = doc.getTextWidth(`• ${sg.label} `);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    const valLines = doc.splitTextToSize(sg.val, contentWidth - labelWidth);
    doc.text(valLines[0], margin + labelWidth, y);
    y += 4.2;
    for (let i = 1; i < valLines.length; i++) {
      doc.text(valLines[i], margin + labelWidth, y);
      y += 4.2;
    }
  });
  y += 2;

  // 5. PROJECTS
  addSectionHeading('Projects');
  profileData.projects.forEach(proj => {
    checkPageBreak(18);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(15, 23, 42);
    const titleLine = `${proj.title}  |  ${proj.techStack.slice(0, 4).join(', ')}`;
    doc.text(titleLine, margin, y);
    y += 4.5;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(51, 65, 85);
    const descLines = doc.splitTextToSize(proj.description, contentWidth);
    doc.text(descLines, margin, y);
    y += (descLines.length * 3.8) + 3;
  });

  // 6. RELEVANT COURSEWORK
  addSectionHeading('Relevant Coursework');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85);
  const courseworkText = profileData.coursework.join('   •   ');
  const courseLines = doc.splitTextToSize(courseworkText, contentWidth);
  doc.text(courseLines, margin, y);
  y += (courseLines.length * 4) + 4;

  // 7. REFERENCES
  addSectionHeading('References');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(15, 23, 42);
  doc.text(profileData.reference.name + ', ' + profileData.reference.title, margin, y);
  y += 4.5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(71, 85, 105);
  doc.text(`${profileData.reference.email}   ·   ${profileData.reference.phone}`, margin, y);

  // Save the PDF
  doc.save('Abila_Khan_Keya_CV.pdf');
}
