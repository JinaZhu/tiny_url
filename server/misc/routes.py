from flask import jsonify

from server.misc import misc_bp

@misc_bp.route('/api/ping')
def ping_cron():
    """misc route for cron job to ping"""
    return jsonify('hello world')