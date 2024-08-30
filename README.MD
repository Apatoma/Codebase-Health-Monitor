# 📊 Codebase Health Monitor

Welcome to **Codebase Health Monitor**! This project is a comprehensive tool designed to help developers track and maintain the health of their codebase over time. It provides key metrics like code complexity, code smells, duplication percentage, and technical debt ratio, along with real-time alerts when thresholds are exceeded. 

## ✨ Features

- 🔍 **Real-Time Analysis**: Instantly analyze your codebase and get feedback on critical health metrics.
- 📈 **Historical Metrics**: Visualize the evolution of your codebase's health over time.
- 🚨 **Alerts**: Get notified when metrics like complexity or technical debt exceed safe levels.
- 🖥️ **User-Friendly Interface**: Simple and intuitive web interface for monitoring and managing your codebase's health.

## 🛠️ Technologies Used

- **Backend**: Flask, SQLAlchemy
- **Frontend**: React.js
- **Database**: SQLite
- **Styling**: CSS

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- **Python 3.x**
- **Node.js & npm**

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Apatoma/Codebase-Health-Monitor.git
    cd codebase-health-monitor
    ```

2. **Set up the backend**:
    ```bash
    cd backend
    python3 -m venv venv
    source venv/bin/activate
    pip install -r requirements.txt
    python run.py
    ```

3. **Set up the frontend**:
    ```bash
    cd frontend
    npm install
    npm start
    ```

4. **Access the application**:
    - The backend will be running on `http://localhost:5000`
    - The frontend will be running on `http://localhost:3000`

## 📝 Usage

- **Run an Analysis**: Trigger the backend to analyze the codebase and store the metrics.
- **View Metrics**: Use the frontend to view the latest metrics and historical data.
- **Monitor Alerts**: Check the alerts section to keep your codebase healthy.

## 🛤️ Future Enhancements

- 🔗 **Integrations**: Connect with CI/CD pipelines for automated codebase analysis.
- ⚙️ **Custom Thresholds**: Allow users to define their own alert thresholds.
- 📊 **Detailed Reports**: Generate and export comprehensive health reports.

## 🧑‍💻 Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an issue to discuss improvements, bug fixes, or new features.

## 📄 License

This project is licensed under the MIT License.

---

Made with ❤️ by [Alejandro](https://github.com/Apatoma)
