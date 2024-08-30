from app import app, db
from app.models import CodebaseMetric

if __name__ == "__main__":
    db.create_all()  # Create database tables
    app.run()
