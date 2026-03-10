# 😂LOL Mails – Temporary Email Service

**Temporary. Private. Hilarious.**

LOL Mails is a temporary email service wrapper built on top of the RapidAPI. It provides a fun, modern, and privacy-focused interface for receiving disposable emails without signups.

🔗 Live Demo: [LOL_Mails](https://sagarsingh-git-hub.github.io/LOL_Mails/)

## 🚀 Features

- **Instant Email Generation**: Get a disposable email address immediately.
- **Real-time Inbox**: Auto-refreshes every few seconds to check for new messages.
- **Privacy First**: No tracking, no logs, 100% anonymous.
- **Themes**: Glassmorphism design with dynamic themes that change based on the time of day (Morning, Noon, Evening, Night).
- **Fun Interactions**: Confetti on new mail, funny notification sounds, and tilt effects.
- **QR Code Sharing**: Easily share your temporary email address via QR code to mobile devices.

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3 (Glassmorphism, Animations), and JavaScript (Vanilla).
- **Backend**: Python (Flask)
- **Styling**: Custom CSS with Glassmorphism and Tailwind-like utility concepts (but pure CSS).
- **API**: [Privatix Temp Mail API](https://rapidapi.com/Privatix/api/temp-mail) via RapidAPI
- **Lucide Icons**: Modern icon system

## 📁 Project Structure

```
😂 LOL Mails – Temporary Email Service/
├── app.py        # Flask backend server (handles API requests & proxy)
├── index.html    # Main frontend interface (HTML, CSS, JavaScript)
├── .env          # Environment variables (API keys & secrets - not pushed to GitHub)
├── .gitignore    # Prevents sensitive files like .env from being tracked 
├── README.md     # Project documentation 
└── .git/         # Git version control directory
```

## 🎯 Key Components

The application includes the following main components:

1. **Email Generator**: Instantly generates a disposable email address
2. **Inbox Viewer**: Displays received emails with auto refresh
3. **Theme Engine**: Automatically adapts UI theme based on time
4. **Share System**: Copy, share, or generate QR codes for the temp email
5. **Notification System**: Visual and audio alerts when new emails arrive

## 🔌 API Integration

The app uses the RapidAPI to generate temporary email addresses and fetch incoming messages.

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

-   **Python 3.x**: Ensure you have Python installed.
-   **RapidAPI Key**: You need a valid API key for the Privatix Temp Mail API.

### Installation

1.  **Clone the repository** (or download the source code):
    ```bash
    git clone https://github.com/yourusername/lol-mails.git
    cd lol-mails
    ```

2.  **Install Python dependencies**:
    ```bash
    pip install -r requirements.txt
    ```
    *(Note: If `requirements.txt` is missing, run: `pip install flask python-dotenv requests`)*

3.  **Configure Environment Variables**:
    Create a `.env` file in the root directory and add your RapidAPI credentials:
    ```env
    RAPIDAPI_KEY=your_rapidapi_key_here
    RAPIDAPI_HOST=privatix-temp-mail-v1.p.rapidapi.com
    ```

## 📸 Preview
<img width="1920" height="1216" alt="screencapture-127-0-0-1-5500-2026-03-08-09_54_54" src="https://github.com/user-attachments/assets/7bd3239a-2161-46e0-a8fd-644b727ec8c3" />

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve the project.

## 📝 License

Free to use. Built for privacy.

---

**⭐ If you found this project useful, consider giving it a star!**
