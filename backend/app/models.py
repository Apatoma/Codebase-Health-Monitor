from app import db

class CodebaseMetric(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    timestamp = db.Column(db.DateTime, nullable=False)
    complexity = db.Column(db.Float, nullable=False)
    code_smells = db.Column(db.Integer, nullable=False)
    duplication = db.Column(db.Float, nullable=False)
    debt_ratio = db.Column(db.Float, nullable=False)

    def to_dict(self):
        return {
            'timestamp': self.timestamp.isoformat(),
            'complexity': self.complexity,
            'code_smells': self.code_smells,
            'duplication': self.duplication,
            'debt_ratio': self.debt_ratio,
        }
