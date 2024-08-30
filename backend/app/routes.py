from flask import jsonify, request
from app import app, db
from app.models import CodebaseMetric
from app.analysis import analyze_codebase

@app.route('/analyze', methods=['POST'])
def run_analysis():
    metrics_data = analyze_codebase()
    metric = CodebaseMetric(**metrics_data)
    db.session.add(metric)
    db.session.commit()
    return jsonify(metric.to_dict())

@app.route('/metrics', methods=['GET'])
def get_metrics():
    metrics = CodebaseMetric.query.all()
    return jsonify([metric.to_dict() for metric in metrics])

@app.route('/alerts', methods=['GET'])
def get_alerts():
    alerts = []
    metrics = CodebaseMetric.query.order_by(CodebaseMetric.timestamp.desc()).first()
    if metrics:
        if metrics.complexity > 3.5:
            alerts.append('High complexity detected.')
        if metrics.code_smells > 30:
            alerts.append('Too many code smells.')
        if metrics.duplication > 20.0:
            alerts.append('High code duplication.')
        if metrics.debt_ratio > 0.6:
            alerts.append('High technical debt ratio.')
    return jsonify(alerts)
