"""Generate improved truthful CV PDF for Rakib Hasan Shuvo."""
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER

ACCENT = HexColor("#7c3aed")
DARK = HexColor("#111827")
GRAY = HexColor("#4b5563")
LIGHT_BG = HexColor("#f5f3ff")

out = "public/Rakib-Hasan-Shuvo-CV.pdf"
doc = SimpleDocTemplate(out, pagesize=A4, leftMargin=18*mm, rightMargin=18*mm, topMargin=14*mm, bottomMargin=14*mm)

h1 = ParagraphStyle("h1", fontSize=22, leading=26, textColor=DARK, fontName="Helvetica-Bold", alignment=TA_CENTER)
sub = ParagraphStyle("sub", fontSize=11, leading=14, textColor=ACCENT, fontName="Helvetica-Bold", alignment=TA_CENTER)
contact = ParagraphStyle("contact", fontSize=8.5, leading=12, textColor=GRAY, fontName="Helvetica", alignment=TA_CENTER)
h2 = ParagraphStyle("h2", fontSize=11, leading=14, textColor=ACCENT, fontName="Helvetica-Bold", spaceBefore=10, spaceAfter=4)
body = ParagraphStyle("body", fontSize=9, leading=13, textColor=DARK, fontName="Helvetica", alignment=TA_LEFT)
bold = ParagraphStyle("bold", parent=body, fontName="Helvetica-Bold")
small = ParagraphStyle("small", fontSize=8.5, leading=12, textColor=GRAY, fontName="Helvetica")

story = []
story.append(Paragraph("Rakib Hasan Shuvo", h1))
story.append(Paragraph("CSE Student & Aspiring Full-Stack Developer", sub))
story.append(Spacer(1, 3))
story.append(Paragraph(
    "rakibhasanshuvo7171@gmail.com &nbsp;|&nbsp; Savar, Dhaka, Bangladesh &nbsp;|&nbsp; "
    "github.com/rakibhasanshuvo712-hub &nbsp;|&nbsp; linkedin.com/in/rakib-hasan-shuvo-7110ba407",
    contact))
story.append(Spacer(1, 2))
story.append(HRFlowable(width="100%", thickness=1.2, color=ACCENT))

story.append(Paragraph("PROFESSIONAL SUMMARY", h2))
story.append(Paragraph(
    "Computer Science & Engineering student from Bangladesh focused on modern web development. "
    "Builds responsive, user-friendly apps with React, Next.js, TypeScript and Tailwind CSS, with growing "
    "backend skills in Node.js, Express and MongoDB. Shipped live projects on Vercel including a Bengali "
    "market-price tracker and a fitness app. Open to internships, freelance work and collaborations.",
    body))

story.append(Paragraph("TECHNICAL SKILLS", h2))
skills = [
    ("<b>Frontend:</b>", "React.js, Next.js, TypeScript, Tailwind CSS, Responsive Design, Framer Motion"),
    ("<b>Backend:</b>", "Node.js, Express.js, REST APIs, API Integration, Auth & Protected Routes"),
    ("<b>Database:</b>", "MongoDB, Mongoose, Database Design"),
    ("<b>Languages:</b>", "JavaScript (ES6+), TypeScript, HTML5, CSS3"),
    ("<b>Tools:</b>", "Git, GitHub, Vite, VS Code, Vercel, Figma basics"),
]
rows = [[Paragraph(k, bold), Paragraph(v, body)] for k, v in skills]
t = Table(rows, colWidths=[32*mm, 140*mm])
t.setStyle(TableStyle([
    ("BACKGROUND", (0, 0), (-1, -1), LIGHT_BG),
    ("ROUNDEDCORNERS", [4, 4, 4, 4]),
    ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ("LEFTPADDING", (0, 0), (-1, -1), 6),
    ("RIGHTPADDING", (0, 0), (-1, -1), 6),
    ("TOPPADDING", (0, 0), (-1, -1), 3),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
]))
story.append(t)

story.append(Paragraph("PROJECTS (all on GitHub, 2 live on Vercel)", h2))
projects = [
    ("Bazar Dor — Bengali Market Price Tracker (Next.js, TypeScript, Tailwind, Auth, Vercel) — LIVE: bazar-dor-three.vercel.app",
     "Tracks daily prices of rice, lentils, oil, vegetables, fish, meat, eggs & spices. Day-over-day changes, category browsing, per-market comparison, sign-in + profile page."),
    ("Fit Log — Fitness Workout App (Next.js, React, TypeScript, Tailwind, Vercel) — LIVE: fit-log-sandy.vercel.app",
     "Explore workouts, view details, create personal plans, save workouts and track completed exercises. Fully responsive."),
    ("Technology Stack Builder (React, TypeScript, Tailwind, Toastify)",
     "Interactive app to explore technologies and build a personal stack with add / remove / manage actions."),
    ("BorrowHub (HTML, CSS, JavaScript, Responsive)",
     "Book/item borrowing interface with listings and categories. Practices real-world CRUD-style UI flows."),
    ("PH-A1 Landing Page (HTML, CSS)",
     "Clean responsive landing page built with pure HTML & CSS."),
]
for title, desc in projects:
    story.append(Paragraph(f"<b>{title}</b>", body))
    story.append(Paragraph(f"&nbsp;&nbsp;&bull; {desc}", small))
    story.append(Spacer(1, 2))

story.append(Paragraph("EDUCATION", h2))
story.append(Paragraph("<b>B.Sc. in Computer Science & Engineering — Ongoing</b>, Bangladesh", body))
story.append(Paragraph("&nbsp;&nbsp;&bull; Coursework & self-learning: Data Structures, DBMS, Networking + full-stack web via docs & building.", small))

story.append(Paragraph("GOALS & STRENGTHS", h2))
story.append(Paragraph(
    "&bull; Goal: become a skilled Full-Stack Developer (deepening Node/Express/MongoDB). "
    "&bull; Fast learner who learns by shipping. "
    "&bull; Clean, responsive UI focus. &bull; Welcomes feedback, communicates clearly.",
    body))
story.append(Spacer(1, 6))
story.append(Paragraph("References & live demos available on GitHub: github.com/rakibhasanshuvo712-hub", contact))

doc.build(story)
print(f"wrote {out}")
