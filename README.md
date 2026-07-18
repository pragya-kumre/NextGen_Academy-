# 🚀 NextGen Academy AI Lead Automator

> AI-Powered Student Support & Lead Management System

An intelligent AI assistant designed for educational institutions to automate student enquiries, qualify leads, store them automatically, and notify the admission team instantly.

---

## 📖 Overview

NextGen Academy AI Lead Automator was developed as part of the AI-Powered Builder Program Capstone Project.

The system acts as a virtual admission counselor that helps students get instant answers to their questions while simultaneously helping the institute capture and manage potential admissions leads.

The project supports both:

- 🌐 Website Assistant (Webhook Workflow)
- 🤖 Telegram Assistant (Telegram Workflow)

---

## 🎯 Problem Statement

Many educational institutes receive enquiries through websites, WhatsApp, Telegram, and social media platforms.

Students frequently ask about:

- Course fees
- Course details
- Schedules
- Placement support
- Learning paths

Without a structured system:

- Potential leads are lost
- Follow-ups are delayed
- Student information is not tracked properly

This project solves these challenges through AI-driven automation.

---

## 💡 Solution

The AI Lead Automator performs the following tasks:

✅ Answers student queries instantly

✅ Provides course and fee information

✅ Identifies genuinely interested students

✅ Collects lead information

✅ Stores leads automatically in Google Sheets

✅ Sends instant Gmail notifications

✅ Works through Website and Telegram channels

---

## 🏗️ System Architecture

```text
Website / Telegram
        │
        ▼
    AI Agent
        │
        ▼
 Lead Qualification
        │
 ┌──────┴──────┐
 ▼             ▼
Google      Gmail
Sheets    Notification
```

---

## ⚙️ Technology Stack

| Layer | Technology |
|---------|------------|
| Frontend | Lovable.dev |
| Framework | React + TypeScript |
| Styling | Tailwind CSS |
| Automation | n8n |
| AI Agent | OpenAI |
| Lead Storage | Google Sheets |
| Notifications | Gmail |
| Version Control | GitHub |
| Deployment | Vercel |

---

## 🔄 Workflow 1 – Website Assistant

```text
Webhook Trigger
      ↓
AI Agent
      ↓
Memory
      ↓
Google Sheets
      ↓
Gmail
      ↓
Website Response
```

### Features

- Answers student FAQs
- Provides course details
- Handles fee enquiries
- Captures interested students
- Stores qualified leads

---

## 🔄 Workflow 2 – Telegram Assistant

```text
Telegram Trigger
       ↓
AI Agent
       ↓
Memory
       ↓
Google Sheets
       ↓
Gmail
       ↓
Telegram Response
```

### Features

- 24/7 student support
- Lead capture through Telegram
- Automated responses
- Real-time notifications

---

## 📋 Lead Qualification Criteria

A lead is captured only when the user demonstrates genuine interest in enrollment.

Required information:

- Student Name
- Contact Information
- Interested Course

Once collected:

1. Lead is saved to Google Sheets
2. Gmail notification is sent instantly
3. Student receives confirmation

---

## 📈 Business Impact

This solution helps educational institutions:

- Improve response time
- Reduce manual work
- Track enquiries efficiently
- Increase lead conversion
- Automate admission support

---

## 🌐 Live Deployment

### Website
https://nextgenacademy-roan.vercel.app/

### Telegram Bot
@NextGenAcademy_support_bot

### GitHub Repository
https://github.com/pragya-kumre/ask-and-grow-58.git

---

## 🧪 Testing Results

Successfully tested:

- ✅ Website chatbot
- ✅ Telegram chatbot
- ✅ Lead capture workflow
- ✅ Google Sheets integration
- ✅ Gmail notification system
- ✅ AI Agent responses

---

## 👩‍💻 Developer

**Pragya Kumre**

Final Year Engineering Student

AI-Powered Builder Program – Capstone Project

---

## 📜 License

This project was developed for educational and demonstration purposes as part of the AI-Powered Builder Program.
